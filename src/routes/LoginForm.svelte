<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import SignupForm from './SignupForm.svelte';
	import { goto } from '$app/navigation';
	import Login from '../api/Login';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let loginForm: App.LoginForm = {
		email: '',
		password: ''
	};

	const { form, errors, enhance, constraints } = superForm(loginForm, {
		SPA: true,
		taintedMessage: 'Are you sure you want to leave this page? You have unsaved changes.',
		validators: {
			email: (value) =>
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
					? null
					: 'Invalid email address.',
			password: (value) => (value.length > 5 ? null : 'Password must be at least 6 characters.')
		},
		onUpdate({ form }) {
			if (form.valid === true) {
				handleLogin();
			}
		}
	});

	async function handleLogin() {
		const response = await Login({
			email: $form.email,
			password: $form.password
		});

		if (!response.ok) {
			const errJSON = await response.json();

			if (errJSON.message) {
				$errors.message = errJSON.message;
				return;
			}

			if (errJSON.errors) {
				const fields = Object.keys(errJSON.errors);
				fields.forEach((field) => {
					$errors[field] = errJSON.errors[field][0];
				});
				return;
			}

			$errors.message = ['An unknown error occurred. check the logs for details.'];
			console.error(errJSON);
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

<SuperDebug data={$form} />

<div class="modal-example-form card p-8 w-modal shadow-xl space-y-4">
	<form
		class="modal-form border border-surface-500 p-8 space-y-4 rounded-container-token flex flex-col"
		method="POST"
		use:enhance
	>
		<label class="label">
			<span class="">Email</span>
			<input
				class="input p-4"
				class:input-error={$errors.email}
				type="text"
				bind:value={$form.email}
			/>
			{#if $errors.email}
				<p class="err-text">{$errors.email}</p>
			{/if}
		</label>
		<label class="label">
			<span class="">Password</span>
			<input
				class="input p-4"
				class:input-error={$errors.password}
				type="password"
				bind:value={$form.password}
			/>
			{#if $errors.password}
				<p class="err-text">{$errors.password}</p>
			{/if}
		</label>
		<button class="btn variant-filled p-4">Log in</button>
		{#if $errors.message}
			<p class="err-text bg-error-50 p-4 rounded-md">{$errors.message}</p>
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
