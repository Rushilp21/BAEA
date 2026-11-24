import { fileURLToPath } from "node:url";
import express from "express";
import { createContactApi } from "./contact.mjs";

try {
  process.loadEnvFile(fileURLToPath(new URL("../.env.local", import.meta.url)));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

const app = express();
app.disable("x-powered-by");
app.use("/api/contact", createContactApi(process.env));
app.use(express.static(fileURLToPath(new URL("../dist/", import.meta.url))));
const port = Number(process.env.PORT || 4173);
app.listen(port, () => console.log(`BAEA website listening on port ${port}`));
