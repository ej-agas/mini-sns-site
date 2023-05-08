import APIBaseURL from './APIBaseURL';

async function CreatePost(data: App.PostForm): Promise<Response> {
	const response = await fetch(APIBaseURL() + '/api/v1/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		},
		body: JSON.stringify(data)
	});

	return response;
}

export default CreatePost;
