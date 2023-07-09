<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import myProfileStore from '$stores/MyProfile';
	import UnfollowUser from '$api/UnfollowUser';
	import GetUserProfile from '$api/GetUserProfile';
	import MyProfile from '$api/MyProfile';
	import FollowUser from '$api/FollowUser';

	export let userProfile: App.UserProfile;
	export let userId: string;

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
				{#if userProfile.id !== $myProfileStore.id}
					<span class="badge variant-filled-primary">Follows You</span>
				{:else}
					<span class="badge variant-filled-secondary">You</span>
				{/if}
			</div>
		</div>
		{#if userProfile.id !== $myProfileStore.id}
			{console.log(userProfile.id, $myProfileStore.id)}
			<button
				type="button"
				class="btn btn-lg variant-filled mt-2"
				on:click={userProfile.isFollowing ? unFollow : follow}
				>{userProfile.isFollowing ? 'Unfollow' : 'Follow'}</button
			>
		{/if}
	</div>
</div>
