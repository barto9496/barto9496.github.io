/**
 * Returns the correct base path for static assets and routing,
 * based on the environment and next.config.js settings.
 */
export function getBasePath() {
  return process.env.NODE_ENV === "production" ? "/personal-portfolio" : "";
}