<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import LoginForm from './LoginForm.svelte';

	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	const loginComponent: ModalComponent = {
		ref: LoginForm
	};

	const loginModal: ModalSettings = {
		type: 'component',
		component: loginComponent
	};
</script>

<Modal />

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">Mini SNS</a></strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="btn variant-filled" on:click={() => modalStore.trigger(loginModal)}
					>Login</button
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
