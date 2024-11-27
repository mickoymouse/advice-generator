import { env } from "./env.schema";

// Get the API URL from the environment variables
// If the code is running on the client side, use the window.ENV.API_URL
// Otherwise, use the API_URL from the env.schema.ts
export const getApiUrl = (): string => {
	return typeof window !== "undefined" ? window.ENV.API_URL : env().API_URL;
};
