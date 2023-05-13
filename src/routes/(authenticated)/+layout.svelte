<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';
	import { AppBar, AppShell, Modal } from '@skeletonlabs/skeleton';

	import { goto } from '$app/navigation';
	import LeftSidebar from './LeftSidebar.svelte';
	import RightSidebar from './RightSidebar.svelte';
	import { browser } from '$app/environment';

	if (browser) {
		if (!localStorage.getItem('token')) {
			goto('/');
		}
	}
</script>

<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<div class="hidden xl:hidden sm:block">
			<h3>foo</h3>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftSidebar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<RightSidebar />
	</svelte:fragment>
	<slot />
</AppShell>
