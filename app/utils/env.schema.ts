import * as z from "zod";

const envSchema = z.object({
	API_URL: z.string().min(1),
});

const env = () => envSchema.parse(process.env);

export { env };
