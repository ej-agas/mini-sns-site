import APIBaseURL from './APIBaseURL';

async function SearchUsers(query: string): Promise<App.UserProfile[]> {
	const response = await fetch(APIBaseURL() + `/api/v1/search-users?q=${query}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token')
		}
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const userJSON = await response.json();
	const users: App.UserProfile[] = [];

	userJSON.users.forEach((user) => {
		users.push({
			id: user.id,
			firstName: user.first_name,
			middleName: user.middle_name,
			lastName: user.last_name,
			picture: user.picture,
			userName: user.username
		});
	});

	console.log(users);

	return users;
}

export default SearchUsers;
