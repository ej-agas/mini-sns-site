import APIBaseURL from './APIBaseURL';

async function GetUserPosts(userId: string): Promise<App.FeedPost[]> {
	const response = await fetch(APIBaseURL() + `/api/v1/users/${userId}/posts`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});

	const res = await response.json();

	return res.data.map((post: any) => {
		return {
			id: post.id,
			title: post.title,
			body: post.body,
			createdAt: new Date(post.created_at),
			updatedAt: new Date(post.updated_at),
			userId: post.user_id
		};
	}).reverse();
}

export default GetUserPosts;
