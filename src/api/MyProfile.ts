import APIBaseURL from './APIBaseURL';

async function MyProfile(): Promise<Response> {
	return await fetch(APIBaseURL() + '/api/v1/login', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});
}

export default MyProfile;
