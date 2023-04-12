<script lang="ts">
	import LoginForm from './LoginForm.svelte';
	import SignupForm from './SignupForm.svelte';
</script>

<div class="container mx-auto flex flex-col md:flex-row mt-8">
	<div class="basis-1/2">
		<h1 class="unstyled text-7xl">Create, connect, and share with our social community.</h1>
		<p class="unstyled text-2xl">
			Join the conversation and share your thoughts with our microblogging platform.
		</p>
	</div>
	<div class="basis-1/2">
		<LoginForm />
	</div>
</div>
