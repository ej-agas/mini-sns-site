<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	if (browser && !localStorage.getItem('token')) {
		goto('/');
	}
</script>

<h1>Home</h1>
