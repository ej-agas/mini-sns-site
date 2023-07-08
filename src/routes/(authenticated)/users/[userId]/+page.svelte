<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import { onMount } from 'svelte';
	import Spinner from '$lib/Spinner.svelte';
	import { page } from '$app/stores';
	import GetUserProfile from '$api/GetUserProfile';
	import GetUserPosts from '$api/GetUserPosts';
	import FollowUser from '$api/FollowUser';
	import UnfollowUser from '$api/UnfollowUser';
	import myProfileStore from '$stores/MyProfile';
	import MyProfile from '$api/MyProfile';
	import { fade } from 'svelte/transition';
	import UserProfile from './UserProfile.svelte';

	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);
	dayjs.extend(relativeTime);

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
	<UserProfile {userProfile} {userId} {posts} />
{/if}
