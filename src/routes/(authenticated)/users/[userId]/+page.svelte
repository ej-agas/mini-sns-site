<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Spinner from '$lib/Spinner.svelte';
	import { page } from '$app/stores';
	import GetUserProfile from '$api/GetUserProfile';
	import GetUserPosts from '$api/GetUserPosts';

	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);

	let isLoading: boolean = true;
	let posts: App.Post[] = [];
	let userProfile: App.UserProfile;

	let isError: boolean = false;

	let userId: string = '';

	onMount(async () => {
		try {
			await loadUserDetails(userId);
		} catch (error) {
			isLoading = false;
			isError = true;
			return;
		}

		isLoading = false;
	});

	async function loadUserDetails(userId: string) {
		userProfile = await GetUserProfile(userId);
		posts = await GetUserPosts(userProfile.id);
	}

	$: {
		userId = $page.params.userId;
		loadUserDetails(userId);
	}
</script>

{#if isLoading}
	<div class="mt-8 p-4 m-4 bg-surface-600 rounded-xl grid">
		<div class="flex flex-col items-center">
			<Spinner />
		</div>
	</div>
{:else if isError}
	<div class="mt-8 p-4 m-4 bg-surface-600 rounded-xl grid">
		<div class="flex flex-col items-center">
			<h2>Profile Not Found</h2>
		</div>
	</div>
{:else}
	<div class="p-4 m-4 bg-surface-600 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
		<div class="rounded-xl card p-4 grid justify-items-center">
			<Avatar src="https://i.pravatar.cc/?img=48" width="w-32" rounded="rounded" />
			<h1>{userProfile.fullName}</h1>
			<h3>{userProfile.bio}</h3>
		</div>
		<div class="rounded-xl card p-4">
			<div class="grid grid-cols-1">
				<h4>First Name: {userProfile.firstName}</h4>
				<h4>Middle Name: {userProfile.middleName}</h4>
				<h4>Last Name: {userProfile.lastName}</h4>
				<h4>Email: {userProfile.email}</h4>
				<h4>Join Date: {dayjs(userProfile.joinDate).format('MMMM DD, YYYY h:mm A z')}</h4>
				<h4>
					Is Verified: <span
						class={'chip ' +
							(userProfile.isVerified ? 'variant-filled-success' : 'variant-chip-warning')}
						>{userProfile.isVerified ? 'Verified' : 'Unverified'}</span
					>
				</h4>
				{#if userProfile.isVerified}
					<h4>
						Verified Date: {dayjs(userProfile.verifiedDate).format('MMMM DD, YYYY h:mm A z')}
					</h4>
				{/if}
			</div>
		</div>
	</div>

	<div class="feed">
		{#each posts as post}
			<div class="p-4 m-4 bg-surface-600 rounded-xl grid">
				<div class="flex flex-col">
					<Avatar src="https://i.pravatar.cc/?img=48" width="w-10" rounded="rounded-full" />
					<div class="text-2xl text-white">Title: {post.title}</div>
					<div class="text-xl text-white">Body: {post.body}</div>
					<div class="text-xl">User ID: {post.userId}</div>
					<div class="text-md text-white justify-items-end">
						Created At: {dayjs(post.createdAt).format('MMM D, YYYY h:mm:ss a')}
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
