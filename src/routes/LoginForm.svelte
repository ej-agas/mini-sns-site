<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import SignupForm from './SignupForm.svelte';
	import { goto } from '$app/navigation';
	import Login from '../api/Login';
	import globalStore from '$stores/Global';

	let loginForm: App.LoginForm = {
		email: '',
		password: ''
	};

	let errors: App.ValidationErrors = {
		email: '',
		password: '',
		message: ''
	};

	function clearErrors() {
		errors = {
			email: '',
			password: '',
			message: ''
		};
	}

	async function handleLogin() {
		clearErrors();

		const response = await Login(loginForm);

		if (!response.ok) {
			const error = await response.json();

			if (error.errors) {
				const fields = Object.keys(error.errors);
				fields.forEach((field) => {
					errors[field] = error.errors[field][0];
				});

				return;
			}

			if (error.message) {
				errors.message = error.message;
				return;
			}
		}

		const data = await response.json();
		localStorage.setItem('token', data.token);

		goto('/home');
	}

	function openModal(): void {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: SignupForm
			}
		});
	}
</script>

<div class="modal-example-form card p-8 w-modal shadow-xl space-y-4">
	<form
		class="modal-form border border-surface-500 p-8 space-y-4 rounded-container-token flex flex-col"
		on:submit|preventDefault={handleLogin}
	>
		<label class="label">
			<span class="">Email</span>
			<input
				class="input p-4"
				class:input-error={errors.email}
				type="text"
				bind:value={loginForm.email}
			/>
			{#if errors.email}
				<p class="err-text">{errors.email}</p>
			{/if}
		</label>
		<label class="label">
			<span class="">Password</span>
			<input
				class="input p-4"
				class:input-error={errors.password}
				type="password"
				bind:value={loginForm.password}
			/>
			{#if errors.password}
				<p class="err-text">{errors.password}</p>
			{/if}
		</label>
		<button class="btn variant-filled p-4">Log in</button>
		{#if errors.message}
			<p class="err-text bg-error-50 p-4 rounded-md">{errors.message}</p>
		{/if}
	</form>
	<footer class="modal-footer">
		<button class="btn variant-filled p-4 w-full" on:click={openModal}>Create Account</button>
	</footer>
</div>

<style>
	.err-text {
		color: rgb(var(--color-error-500));
	}
</style>
