<script lang="ts">
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import Spinner from '$lib/Spinner.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import feed from '$stores/FeedStore';
	import { fade } from 'svelte/transition';
	import Feed from '$api/Feed';

	let isLoading: boolean = true;

	dayjs.extend(relativeTime);

	onMount(async () => {
		$feed = await Feed(1);
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
					<div class="flex">
						<Avatar src="https://i.pravatar.cc/?img=48" width="w-10" rounded="rounded-full" />
						<a href="users/{post.user.username}" class="p-2">
							<b
								>{post.user.firstName +
									(' ' + post.user.middleName ?? '') +
									' ' +
									post.user.lastName}</b
							>
							<span>@{post.user.username}</span>
						</a>
						.
						<a href="users/{post.user.username}/{post.id}" class="p-2"
							>{dayjs(post.createdAt).fromNow(true)}</a
						>
					</div>
					<div class="text-2xl text-white">{post.title}</div>
					<div class="text-xl text-white">{post.body}</div>
				</div>
			</div>
		{/each}
	{/if}
</div>
