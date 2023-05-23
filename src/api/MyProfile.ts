import APIBaseURL from './APIBaseURL';

async function MyProfile(): Promise<App.UserProfile> {
	const response = await fetch(APIBaseURL() + '/api/v1/my-profile', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});

	const data = await response.json();

	return {
		id: data.id,
		fullName: data.full_name,
		firstName: data.first_name,
		middleName: data.middle_name,
		lastName: data.last_name,
		bio: data.bio,
		email: data.email,
		isVerified: data.is_verified,
		verifiedDate: data.verified_date,
		joinDate: data.join_date,
		userName: data.username,
		picture: data.picture
	};
}

export default MyProfile;
