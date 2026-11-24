import express from "express";
import { createContactApi } from "../server/contact.mjs";

const app = express();
app.disable("x-powered-by");
app.use("/api/contact", createContactApi(process.env, {
  getClientIp: (request) => request.get("x-vercel-forwarded-for"),
}));

export default function handler(request, response) {
  return app(request, response);
}
