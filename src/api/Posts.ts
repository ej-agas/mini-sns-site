import APIBaseURL from './APIBaseURL';

async function Posts(): Promise<App.FeedPost[]> {
	const response = await fetch(APIBaseURL() + '/api/v1/posts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});

	const data = await response.json();

	return data.data
		.map((post: any) => {
			return {
				id: post.id,
				title: post.title,
				body: post.body,
				createdAt: new Date(post.created_at),
				updatedAt: new Date(post.updated_at),
				userId: post.user_id
			};
		}, [])
		.reverse();
}

export default Posts;
