<script lang="ts">
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import Posts from '$api/Posts';
	import Spinner from '$lib/Spinner.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import feed from '$stores/FeedStore';
	import { fade } from 'svelte/transition';

	let isLoading: boolean = true;

	onMount(async () => {
		$feed = await Posts();
		isLoading = false;
	});
</script>

<div class="feed">
	{#if isLoading}
		<div class="p-4 m-4 bg-surface-600 rounded-xl grid">
			<div class="flex flex-col items-center">
				<Spinner />
			</div>
		</div>
	{:else}
		{#each $feed as post}
			<div class="p-4 m-4 bg-surface-600 rounded-xl grid" transition:fade={{ duration: 200 }}>
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
	{/if}
</div>
