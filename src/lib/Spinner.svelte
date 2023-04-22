<script lang="ts">
	import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';

	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 10 },
		{ color: 'rgb(var(--color-primary-500))', start: 99, end: 100 }
	];
</script>

<ConicGradient stops={conicStops} spin>Loading</ConicGradient>
