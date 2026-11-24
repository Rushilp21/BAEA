import { defineConfig, loadEnv, type Plugin } from "vite";
import { createContactApi } from "./server/contact.mjs";

export default defineConfig(({ mode }) => ({
  base: "./",
  build: { assetsInlineLimit: 0 },
  plugins: [contactApiPlugin(mode)],
}));

function contactApiPlugin(mode: string): Plugin {
  const env = loadEnv(mode, process.cwd(), ["CONTACT_", "SMTP_"]);
  return {
    name: "baea-contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", createContactApi(env));
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/contact", createContactApi(env));
    },
  };
}
