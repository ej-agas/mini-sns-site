<script lang="ts">
	import Product from './Product.svelte';
	import { page } from '$app/stores';
</script>

<h1>Product page</h1>
<br />
<h2>Product ID: {$page.params.id}</h2>
<br />
<Product />
