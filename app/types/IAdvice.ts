// Type for the advice object
interface Advice {
	id: number;
	advice: string;
}

// Type for the response from the API
interface AdviceResponse {
	slip: Advice;
}
// slip: { id: 1, advice: "Some advice here" }
