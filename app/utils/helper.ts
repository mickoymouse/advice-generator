import { env } from "./env.schema";

export const getApiUrl = (): string => {
	return typeof window !== "undefined" ? window.ENV.API_URL : env().API_URL;
};
