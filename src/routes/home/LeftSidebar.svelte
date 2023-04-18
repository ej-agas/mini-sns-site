<script lang="ts">
	import { onMount } from 'svelte';
	import MyProfile from '../../api/MyProfile';

	let profile: App.UserProfile | undefined = undefined;

	onMount(async () => {
		profile = await MyProfile();
	});
</script>

<div class="sidebar-left">
	<h1>Left Sidebar</h1>
	{#if profile}
		<h2>Welcome, {profile.fullName}</h2>
		<p>{profile.bio}</p>
		<p>{profile.email}</p>
		<p>{profile.isVerified}</p>
		<p>{profile.verifiedDate}</p>
		<p>{profile.joinDate}</p>
	{:else}
		<h2>Loading...</h2>
	{/if}
</div>
