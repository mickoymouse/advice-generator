export const getAdvice = async (): Promise<Advice> => {
	try {
		const response = await fetch(process.env.API_URL + "");
		const data: AdviceResponse = await response.json();

		return {
			id: data.slip.id || 0,
			advice: data.slip.advice || "n/a",
		};
	} catch (error) {
		throw error;
	}
};
