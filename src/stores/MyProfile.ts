import { writable } from 'svelte/store';

const myProfileStore = writable<App.MyProfile>({
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
	joinDate: '',
	followersCount: 0,
	followingCount: 0,
	postsCount: 0
});

export default myProfileStore;
