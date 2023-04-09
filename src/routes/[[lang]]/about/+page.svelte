<script lang="ts">
	import { page } from '$app/stores';
	const name = 'John';
</script>

<h1>About {name}</h1>
<a href="/">Home</a>

{JSON.stringify($page.params)}
