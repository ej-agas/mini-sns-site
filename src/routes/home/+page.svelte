<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import MyProfile from '../../api/MyProfile';
	import LeftSidebar from './LeftSidebar.svelte';
	import RightSidebar from './RightSidebar.svelte';
	import PageHeader from './PageHeader.svelte';
	import Feed from './Feed.svelte';

	if (!localStorage.getItem('token')) {
		goto('/');
	}
</script>

<div class="container mx-auto px-4">
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
</div>
