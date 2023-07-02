import APIBaseURL from './APIBaseURL';

async function UnfollowUser(userId: string): Promise<Response> {
	const response = await fetch(APIBaseURL() + `/api/v1/unfollow`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		},
		body: JSON.stringify({ user_id: userId })
	});

	return response;
}

export default UnfollowUser;
