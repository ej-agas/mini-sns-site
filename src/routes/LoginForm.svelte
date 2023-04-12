<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import SignupForm from './SignupForm.svelte';
	import APIBaseURL from '../api/APIBaseURL';

	let loginForm: App.LoginForm = {
		email: '',
		password: ''
	};

	async function login() {
		const response = await fetch(APIBaseURL() + '/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginForm)
		});

		if (!response.ok) {
			const error = await response.json();
			console.error(error);
			return;
		}

		const data = await response.json();
		console.log(data);
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

{#if false}<slot />{/if}

<div class="modal-example-form card p-8 w-modal shadow-xl space-y-4">
	<form
		class="modal-form border border-surface-500 p-8 space-y-4 rounded-container-token flex flex-col"
		on:submit|preventDefault={login}
	>
		<label class="label">
			<span class="">Email</span>
			<input class="input p-4" type="text" bind:value={loginForm.email} />
		</label>
		<label class="label">
			<span class="">Password</span>
			<input class="input p-4" type="password" bind:value={loginForm.password} />
		</label>
		<button class="btn variant-filled p-4" on:click={login}>Log in</button>
	</form>
	<footer class="modal-footer flex justify-end space-x-2">
		<button class="btn variant-filled p-4" on:click={openModal}>Create Account</button>
	</footer>
</div>
