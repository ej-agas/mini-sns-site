<script lang="ts">
	import userProfile from '$stores/UserProfile';
	import { Avatar, modalStore } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import ProfileForm from './ProfileForm.svelte';
	import { fade } from 'svelte/transition';
	import Posts from '$api/Posts';
	import { onMount } from 'svelte';
	import Spinner from '$lib/Spinner.svelte';

	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);

	function openProfileModal(): void {
		modalStore.trigger({
			type: 'component',
			component: {
				ref: ProfileForm
			}
		});
	}

	let isLoading: boolean = true;

	let posts: App.Post[] = [];

	onMount(async () => {
		posts = await Posts();
		isLoading = false;
	});
</script>

<div class="p-4 m-4 bg-surface-600 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
	<div class="rounded-xl card p-4 grid justify-items-center">
		<Avatar src="https://i.pravatar.cc/?img=48" width="w-32" rounded="rounded" />
		<h1>{$userProfile.fullName}</h1>
		<h3>{$userProfile.bio}</h3>
	</div>
	<div class="rounded-xl card p-4">
		<div class="grid grid-cols-1">
			<h4>First Name: {$userProfile.firstName}</h4>
			<h4>Middle Name: {$userProfile.middleName}</h4>
			<h4>Last Name: {$userProfile.lastName}</h4>
			<h4>Email: {$userProfile.email}</h4>
			<h4>Join Date: {dayjs($userProfile.joinDate).format('MMMM DD, YYYY h:mm A z')}</h4>
			<h4>
				Is Verified: <span
					class={'chip ' +
						($userProfile.isVerified ? 'variant-filled-success' : 'variant-chip-warning')}
					>{$userProfile.isVerified ? 'Verified' : 'Unverified'}</span
				>
			</h4>
			{#if $userProfile.isVerified}
				<h4>
					Verified Date: {dayjs($userProfile.verifiedDate).format('MMMM DD, YYYY h:mm A z')}
				</h4>
			{/if}
		</div>

		<button
			type="button"
			class="btn variant-filled mt-4 float float-right"
			on:click={openProfileModal}>Update</button
		>
	</div>
</div>

<div class="feed">
	{#if isLoading}
		<div class="p-4 m-4 bg-surface-600 rounded-xl grid">
			<div class="flex flex-col items-center">
				<Spinner />
			</div>
		</div>
	{:else}
		{#each posts as post}
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
