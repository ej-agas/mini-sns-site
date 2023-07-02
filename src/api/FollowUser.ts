import APIBaseURL from './APIBaseURL';

async function FollowUser(userId: string): Promise<Response> {
	const response = await fetch(APIBaseURL() + `/api/v1/follow`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		},
		body: JSON.stringify({ user_id: userId })
	});

	return response;
}

export default FollowUser;
