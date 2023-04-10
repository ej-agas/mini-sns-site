<script lang="ts">
	let signupForm: App.SignupForm = {
		firstName: '',
		middleName: '',
		lastName: '',
		email: '',
		password: ''
	};

	function login(): void {
		console.log('signupForm', signupForm);
	}
</script>

<form class="login-form flex flex-col" on:submit|preventDefault={login}>
	<label class="label">
		<span>First Name:</span>
		<input class="input" type="text" bind:value={signupForm.firstName} />
	</label>
	<label class="label">
		<span>Middle Name:</span>
		<input class="input" type="text" bind:value={signupForm.middleName} />
	</label>
	<label class="label">
		<span>Last Name:</span>
		<input class="input" type="text" bind:value={signupForm.lastName} />
	</label>
	<label class="label">
		<span>E-mail:</span>
		<input class="input" type="text" bind:value={signupForm.email} />
	</label>
	<label class="label">
		<span>Password:</span>
		<input class="input" type="password" bind:value={signupForm.password} />
	</label>
	<button type="submit" class="btn btn-sm variant-filled px-10 mt-4 text-2xl">Sign Up</button>
</form>

<style>
</style>
