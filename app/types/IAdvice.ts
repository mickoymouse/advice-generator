interface Advice {
	id: number;
	advice: string;
}

// slip: { id: 1, advice: "Some advice here" }
interface AdviceResponse {
	slip: Advice;
}
