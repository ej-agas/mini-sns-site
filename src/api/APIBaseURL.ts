export default function APIBaseURL(): string {
	let apiBaseUrl = import.meta.env.VITE_API_BASE_URL_DEV;

	if (import.meta.env.ENVIRONMENT === 'production') {
		apiBaseUrl = import.meta.env.VITE_API_BASE_URL_PROD;
	}

	return apiBaseUrl;
}
