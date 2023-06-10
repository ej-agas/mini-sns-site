import APIBaseURL from './APIBaseURL';

async function GetUserPosts(userId: string): Promise<App.Post[]> {
	const response = await fetch(APIBaseURL() + `/api/v1/users/${userId}/posts`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});

	const res = await response.json();

	return res.data;
}

export default GetUserPosts;
