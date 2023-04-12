// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
	type LoginForm = {
		email: string;
		password: string;
	};
	type SignupForm = {
		firstName: string;
		middleName: string;
		lastName: string;
		email: string;
		password: string;
		gender: string;
		birthdate: string;
	};
}
