import APIBaseURL from './APIBaseURL';

async function Login(loginForm: App.LoginForm): Promise<Response> {
	return await fetch(APIBaseURL() + '/api/v1/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(loginForm)
	});
}

export default Login;
