/** Base API URL — proxied through Vite dev server in development */
export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";
console.log("FINAL API URL:", API_BASE_URL);
export const APP_NAME = "AuthKit";
