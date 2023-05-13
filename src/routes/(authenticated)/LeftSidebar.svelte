<script lang="ts">
	import { onMount } from 'svelte';
	import MyProfile from '$api/MyProfile';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import userProfile from '$stores/UserProfile';

	onMount(async () => {
		$userProfile = await MyProfile();
	});
</script>

<div class="sidebar-left hidden lg:block">
	<div class="p-4 m-8 bg-surface-600 rounded-xl grid justify-items-center">
		<Avatar src="https://i.pravatar.cc/?img=48" width="w-32" rounded="rounded-full" />
		<h3 class="text-md text-primary-500 py-4">{$userProfile.fullName}</h3>
		<div class="grid grid-cols-3">
			<div class="text-center">
				<h3 class="text-md text-primary-500">42</h3>
				<p class="text-sm text-primary-500">Followers</p>
			</div>
			<div class="text-center px-2">
				<h3 class="text-md text-primary-500">345</h3>
				<p class="text-sm text-primary-500">Following</p>
			</div>
			<div class="text-center">
				<h3 class="text-md text-primary-500">1203</h3>
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
	</div>
	<div class="p-4 m-8 bg-surface-600 rounded-xl grid justify-items-stretch">
		<button class="text-center bg-primary-500 rounded-md text-surface-500 text-2xl font-bold py-3">
			Create Post
		</button>
	</div>
</div>
