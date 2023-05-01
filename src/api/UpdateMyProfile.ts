import APIBaseURL from './APIBaseURL';

async function UpdateMyProfile(data: App.UserProfileForm): Promise<Response> {
	const response = await fetch(APIBaseURL() + '/api/v1/my-profile', {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		},
		body: JSON.stringify(data)
	});

	return response;
}

export default UpdateMyProfile;
