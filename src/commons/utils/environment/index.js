const ENV_DOMAIN = {
  development: "http://localhost:3000/",
  preview: "https://motive-redesign-preview.vercel.app",
  production: "https://motive-redesign-preview.vercel.app",
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
