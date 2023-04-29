import { writable } from 'svelte/store';

const userProfile = writable<App.UserProfile>({
	fullName: '',
	firstName: '',
	middleName: '',
	lastName: '',
	bio: '',
	email: '',
	isVerified: false,
	verifiedDate: '',
	joinDate: ''
});

export default userProfile;
