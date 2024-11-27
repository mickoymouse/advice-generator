import { getApiUrl } from "~/utils/helper";

export const getAdvice = async (): Promise<Advice> => {
	try {
		// call the helper function to get the api url
		const apiUrl: string = getApiUrl();

		// fetch the advice data
		const response = await fetch(apiUrl);
		// parse the response. Cast it to AdviceResponse type.
		const data: AdviceResponse = await response.json();

		return {
			id: data.slip.id || 0,
			advice: data.slip.advice || "n/a",
		};
	} catch (error) {
		console.error("Error fetching advice: ", error);
		throw error;
	}
};
