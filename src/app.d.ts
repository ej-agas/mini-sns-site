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

	type PostForm = {
		title: string;
		body: string;
	}

	type SignupForm = {
		firstName: string;
		middleName: string;
		lastName: string;
		email: string;
		password: string;
		gender: string;
		birthdate: {
			year: number;
			month: number;
			day: number;
			toString: function (): string;
		};
	};

	type ValidationErrors = {
		[key: string]: string;
	}

	type UserProfile = {
		id: string;
		fullName: string;
		firstName: string;
		middleName: string;
		lastName: string;
		bio: string;
		email: string;
		isVerified: boolean;
		verifiedDate: string;
		joinDate: string,
		userName: string;
		picture: string;
		followersCount: number;
		followingCount: number;
		postsCount: number;
		isFollowing: boolean;
	}

	type MyProfile = {
		id: string;
		fullName: string;
		firstName: string;
		middleName: string;
		lastName: string;
		bio: string;
		email: string;
		isVerified: boolean;
		verifiedDate: string;
		joinDate: string,
		userName: string;
		picture: string;
		followersCount: number;
		followingCount: number;
		postsCount: number;
	}

	type UserProfileForm = {
		first_name: string;
		middle_name: string;
		last_name: string;
		bio: string;
	}

	type GlobalStore = {
		isLoggedIn: boolean;
	}

	type FeedPost = {
		id: string;
		title: string
		body: string;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		user: {
			firstName: string;
			middleName: string;
			lastName: string;
			picture: string;
			username: string;
		}
	}

	type Post = {
		id: string;
		title: string
		body: string;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
	}
}
