import APIBaseURL from './APIBaseURL';

async function Feed(page: number): Promise<App.Post[]> {
	const response = await fetch(APIBaseURL() + `/api/v1/feed?page=${page}`, {
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
				userId: post.user_id,
				user: {
					firstName: post.user.first_name,
					middleName: post.user.middle_name,
					lastName: post.user.last_name,
					picture: post.user.picture,
					username: post.user.username
				}
			};
		}, [])
		.reverse();
}

export default Feed;
