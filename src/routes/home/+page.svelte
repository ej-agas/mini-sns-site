<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	import { goto } from '$app/navigation';
	import LeftSidebar from './LeftSidebar.svelte';
	import RightSidebar from './RightSidebar.svelte';
	import PageHeader from './PageHeader.svelte';
	import Feed from './Feed.svelte';

	if (!localStorage.getItem('token')) {
		goto('/');
	}
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<LeftSidebar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">
		<RightSidebar />
	</svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<PageHeader />
	</svelte:fragment>
	<Feed />
</AppShell>
