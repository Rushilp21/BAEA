import express from "express";
import { ipKeyGenerator, rateLimit } from "express-rate-limit";
import nodemailer from "nodemailer";
import subjects from "../src/data/enquiry-subjects.json" with { type: "json" };

const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*$/i;
const unavailable = "Email delivery is temporarily unavailable. Please try again later.";

export function createContactApi(env, { createTransport = nodemailer.createTransport, getClientIp } = {}) {
  const app = express();
  app.disable("x-powered-by");

  const { CONTACT_TO, SMTP_USER, SMTP_APP_PASSWORD } = env;
  const password = SMTP_APP_PASSWORD?.replace(/\s/g, "");
  const mailer = CONTACT_TO && SMTP_USER && password && createTransport({
    service: "gmail",
    auth: { user: SMTP_USER, pass: password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  app.post(
    "/",
    rateLimit({
      windowMs: 10 * 60_000,
      limit: 10,
      standardHeaders: "draft-8",
      legacyHeaders: false,
      message: { error: "Too many enquiries. Please try again in a few minutes." },
      ...(getClientIp && {
        keyGenerator(request) {
          const ip = getClientIp(request) || request.ip;
          return ip ? ipKeyGenerator(ip) : "unknown";
        },
      }),
    }),
    (req, res, next) => {
      const mediaType = req.get("content-type")?.split(";")[0].trim().toLowerCase();
      if (mediaType !== "application/json") {
        return res.status(415).json({ error: "Send the enquiry as JSON." });
      }
      next();
    },
    express.json({ limit: "64kb" }),
    async (req, res) => {
      const { name, email, subject, message } = Object.fromEntries(
        ["name", "email", "subject", "message"].map((field) => {
          const value = req.body?.[field];
          return [field, typeof value === "string" ? value.trim() : ""];
        }),
      );

      if (!name || name.length > 120 || /[\r\n]/.test(name) ||
          email.length > 254 || !emailPattern.test(email) ||
          !Object.hasOwn(subjects, subject) || !message || message.length > 5000) {
        return res.status(400).json({ error: "Please check your name, email, enquiry subject, and message." });
      }

      if (!mailer) {
        return res.status(503).json({ error: unavailable });
      }

      const subjectLabel = subjects[subject];
      try {
        const result = await mailer.sendMail({
          from: { name: "BAEA Website", address: SMTP_USER },
          to: { address: CONTACT_TO, name: "" },
          replyTo: { name, address: email },
          subject: "BAEA enquiry: " + subjectLabel,
          text: `Name: ${name}\nEmail: ${email}\nEnquiry subject: ${subjectLabel}\n\n${message}`,
        });
        if (!result.accepted.length) {
          return res.status(502).json({ error: unavailable });
        }
        return res.json({ ok: true });
      } catch (error) {
        console.error("Contact email delivery failed", error.code ?? "UNKNOWN");
        return res.status(502).json({ error: unavailable });
      }
    },
  );

  app.all("/", (_req, res) => res.set("Allow", "POST").status(405).json({ error: "Use POST to submit an enquiry." }));
  app.use((error, _req, res, _next) => {
    if (error.type === "entity.too.large") {
      return res.status(413).json({ error: "The enquiry is too large." });
    }
    if (error.type === "entity.parse.failed") {
      return res.status(400).json({ error: "The enquiry could not be read." });
    }
    return res.status(500).json({ error: unavailable });
  });
  return app;
}
