// Purpose: Define global types
// Usage: Used by TypeScript to understand the types of global variables
// Extend the Window interface to include the ENV object
interface Window {
	ENV: {
		API_URL: string;
	};
}
