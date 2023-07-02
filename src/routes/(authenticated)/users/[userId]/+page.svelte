<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import { onMount } from 'svelte';
	import Spinner from '$lib/Spinner.svelte';
	import { page } from '$app/stores';
	import GetUserProfile from '$api/GetUserProfile';
	import GetUserPosts from '$api/GetUserPosts';
	import FollowUser from '$api/FollowUser';
	import UnfollowUser from '$api/UnfollowUser';
	import myProfileStore from '$stores/MyProfile';
	import MyProfile from '$api/MyProfile';

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

	async function unFollow(): Promise<Response> {
		const response = await UnfollowUser(userProfile.id);

		userProfile = await GetUserProfile(userId);
		$myProfileStore = await MyProfile();

		return response;
	}

	async function follow(): Promise<Response> {
		const response = await FollowUser(userProfile.id);

		userProfile = await GetUserProfile(userId);
		$myProfileStore = await MyProfile();

		return response;
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
	<div class="p-4 m-4 bg-surface-600 rounded-xl">
		<div class="rounded-xl card p-4 grid justify-items-center">
			<Avatar src="https://i.pravatar.cc/?img=48" width="w-32" rounded="rounded" />
			<h1>{userProfile.fullName}</h1>
			<h3>{userProfile.bio}</h3>
			<div class="grid grid-cols-4">
				<div class="text-center">
					<h3 class="text-md text-white-500">{userProfile.followersCount}</h3>
					<p class="text-sm text-white-500">Followers</p>
				</div>
				<div class="text-center px-2">
					<h3 class="text-md text-white-500">{userProfile.followingCount}</h3>
					<p class="text-sm text-white-500">Following</p>
				</div>
				<div class="text-center">
					<h3 class="text-md text-white-500">{userProfile.postsCount}</h3>
					<p class="text-sm text-white-500">Posts</p>
				</div>
				<div class="text-center">
					<span class="badge variant-filled-primary">Follows You</span>
				</div>
			</div>
			<button
				type="button"
				class="btn btn-lg variant-filled mt-2"
				on:click={userProfile.isFollowing ? unFollow : follow}
				>{userProfile.isFollowing ? 'Unfollow' : 'Follow'}</button
			>
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
