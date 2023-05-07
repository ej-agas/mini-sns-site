<script lang="ts">
	import { goto } from '$app/navigation';
	import Feed from '../Feed.svelte';
	import CreatePost from './CreatePost.svelte';

	if (!localStorage.getItem('token')) {
		goto('/');
	}
</script>

<CreatePost />
<Feed />
