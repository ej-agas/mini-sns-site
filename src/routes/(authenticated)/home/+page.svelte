<script lang="ts">
	import { goto } from '$app/navigation';
	import Feed from '../Feed.svelte';

	if (!localStorage.getItem('token')) {
		goto('/');
	}
</script>

<Feed />
