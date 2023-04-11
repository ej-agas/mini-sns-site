<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	// Silence warning of creating <LoginForm /> component with unknown prop 'parent'.
	export let parent = undefined;

	let loginForm: App.LoginForm = {
		email: '',
		password: ''
	};

	function login(): void {
		console.log('loginForm', loginForm);
	}
</script>

{#if false}<slot />{/if}

<div class="modal-example-form card p-4 w-modal shadow-xl space-y-4">
	<header class="text-2xl font-bold">Login</header>
	<form
		class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token flex flex-col"
		on:submit|preventDefault={login}
	>
		<label class="label">
			<span>Username:</span>
			<input class="input" type="text" bind:value={loginForm.email} />
		</label>
		<label class="label">
			<span>Password:</span>
			<input class="input" type="password" bind:value={loginForm.password} />
		</label>
	</form>
	<footer class="modal-footer flex justify-end space-x-2">
		<button class="btn variant-ghost-surface" on:click={() => modalStore.close()}>Cancel</button>
		<button class="btn variant-filled" on:click={login}>Login</button>
	</footer>
</div>
