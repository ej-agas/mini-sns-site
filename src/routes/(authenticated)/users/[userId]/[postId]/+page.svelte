<script lang="ts">
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import { onMount } from 'svelte';
	import Spinner from '$lib/Spinner.svelte';
	import { page } from '$app/stores';
	import GetUserProfile from '$api/GetUserProfile';
	import UserProfile from '../UserProfile.svelte';
	import GetUserPost from '$api/GetUserPost';
	import UserPost from '../UserPost.svelte';

	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);
	dayjs.extend(relativeTime);

	let isLoading: boolean = true;
	let post: App.FeedPost;
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
		post = await GetUserPost($page.params.postId);
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
	<UserProfile {userProfile} {userId} />
	<UserPost {post} {userProfile} />
{/if}
