import { getApiUrl } from "~/utils/helper";

export const getAdvice = async (): Promise<Advice> => {
	try {
		const apiUrl: string = getApiUrl();

		const response = await fetch(apiUrl);
		const data: AdviceResponse = await response.json();

		return {
			id: data.slip.id || 0,
			advice: data.slip.advice || "n/a",
		};
	} catch (error) {
		throw error;
	}
};
