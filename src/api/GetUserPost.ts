import APIBaseURL from './APIBaseURL';

async function GetUserPost(postId: string): Promise<App.Post> {
	const response = await fetch(APIBaseURL() + `/api/v1/posts/${postId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});

	const data = await response.json();

	return {
		id: data.id,
		title: data.title,
		body: data.body,
		createdAt: data.created_at,
		updatedAt: data.updated_at,
		userId: data.user_id
	}
}

export default GetUserPost;
