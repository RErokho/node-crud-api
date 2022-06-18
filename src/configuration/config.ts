import detEnv from "dotenv";

detEnv.config();

const config = {
  env: process.env["NODE_ENV"],
  port: process.env["PORT"] || "8080",
};

export default config;
