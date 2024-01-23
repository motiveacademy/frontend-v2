const ENV_DOMAIN = {
  development: "http://localhost:3000/",
  preview: process.env.PREVIEW_DOMAIN,
  production: process.env.PRODUCTION_DOMAIN,
};

const env = process.env.NODE_ENV;
const vercel_env = process.env.VERCEL_ENV;
let DOMAIN = "";
if (env == "development") {
  DOMAIN = ENV_DOMAIN.development;
} else {
  if (vercel_env === "preview") {
    DOMAIN = ENV_DOMAIN.preview;
  } else if (vercel_env === "production") {
    DOMAIN = ENV_DOMAIN.production;
  }
}

export default DOMAIN;
