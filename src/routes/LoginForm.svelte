<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import SignupForm from './SignupForm.svelte';

	// Silence warning of creating <LoginForm /> component with unknown prop 'parent'.
	export let parent = undefined;

	let loginForm: App.LoginForm = {
		email: '',
		password: ''
	};

	function login(): void {
		console.log('loginForm', loginForm);
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
