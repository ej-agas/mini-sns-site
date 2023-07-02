<script lang="ts">
	import { onMount } from 'svelte';
	import MyProfile from '$api/MyProfile';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import myProfileStore from '$stores/MyProfile';
	import { goto } from '$app/navigation';

	onMount(async () => {
		$myProfileStore = await MyProfile();
	});

	function logout(): void {
		localStorage.removeItem('token');
		goto('/');
	}
</script>

<div class="sidebar-left hidden lg:block">
	<div class="p-4 m-8 bg-surface-600 rounded-xl grid justify-items-center">
		<Avatar src="https://i.pravatar.cc/?img=48" width="w-32" rounded="rounded-full" />
		<button class="text-md text-primary-500 py-4" on:click={() => goto('/profile')}>
			<h3 class="no-underline">{$myProfileStore.fullName}</h3>
		</button>

		<div class="grid grid-cols-3">
			<div class="text-center">
				<h3 class="text-md text-primary-500">{$myProfileStore.followersCount}</h3>
				<p class="text-sm text-primary-500">Followers</p>
			</div>
			<div class="text-center px-2">
				<h3 class="text-md text-primary-500">{$myProfileStore.followingCount}</h3>
				<p class="text-sm text-primary-500">Following</p>
			</div>
			<div class="text-center">
				<h3 class="text-md text-primary-500">{$myProfileStore.postsCount}</h3>
				<p class="text-sm text-primary-500">Posts</p>
			</div>
		</div>
	</div>
	<div class="p-4 m-8 bg-surface-600 rounded-xl grid justify-items-stretch">
		<a
			href="/home"
			class={'btn text-center rounded-md text-2xl font-bold py-3 mb-2 ' +
				($page.url.pathname.startsWith('/home')
					? 'bg-primary-500 text-surface-500'
					: 'bg-surface-500 text-primary-500')}
		>
			Home
		</a>
		<a
			href="/profile"
			class={'btn text-center rounded-md text-2xl font-bold py-3 mt-2 ' +
				($page.url.pathname.startsWith('/profile')
					? 'bg-primary-500 text-surface-500'
					: 'bg-surface-500 text-primary-500')}
		>
			Profile
		</a>
		<button
			class="btn text-center rounded-md text-2xl font-bold py-3 mt-4 bg-surface-500 text-primary-500"
			on:click={logout}>Logout</button
		>
	</div>
	<div class="p-4 m-8 bg-surface-600 rounded-xl grid justify-items-stretch">
		<button class="text-center bg-primary-500 rounded-md text-surface-500 text-2xl font-bold py-3">
			Create Post
		</button>
	</div>
</div>
