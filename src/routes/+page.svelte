<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	import { Modal } from '@skeletonlabs/skeleton';
	import LoginForm from './LoginForm.svelte';
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase"><a href="/">Mini SNS</a></strong>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Router Slot -->
	<div class="container mx-auto flex flex-col md:flex-row mt-8">
		<div class="basis-1/2">
			<h1 class="unstyled text-7xl">Create, connect, and share with our social community.</h1>
			<p class="unstyled text-2xl">
				Join the conversation and share your thoughts with our microblogging platform.
			</p>
		</div>
		<div class="basis-1/2">
			<LoginForm />
		</div>
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
