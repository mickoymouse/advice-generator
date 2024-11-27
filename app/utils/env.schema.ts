import * as z from "zod";

// Define the schema for the environment variables
const envSchema = z.object({
	API_URL: z
		.string({
			description: "The URL of the API server",
			required_error:
				"API_URL is required. Please set it in the environment variables.",
		})
		.url({
			message: "API_URL must be a valid URL.",
		}),
});

// Parse the environment variables using the schema
// If the environment variables are not valid, this will throw an error
// Otherwise, it will return the parsed environment variables
export const env = () => envSchema.parse(process.env);
