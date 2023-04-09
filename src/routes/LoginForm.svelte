<script lang="ts">
	let loginForm: App.LoginForm = {
		email: '',
		password: ''
	};

	function login(): void {
		console.log('loginForm', loginForm);
	}
</script>

<form class="login-form flex" on:submit|preventDefault={login}>
	<label class="label mr-4">
		<span>Username:</span>
		<input class="input" type="text" bind:value={loginForm.email} />
	</label>
	<label class="label">
		<span>Password:</span>
		<input class="input" type="password" bind:value={loginForm.password} />
	</label>
	<button type="submit" class="btn btn-sm variant-filled px-10 ml-4 text-2xl">Login</button>
</form>

<style>
</style>
