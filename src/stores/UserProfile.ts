import { writable } from 'svelte/store';

const userProfile = writable<App.UserProfile>({
	id: '',
	userName: '',
	picture: '',
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
