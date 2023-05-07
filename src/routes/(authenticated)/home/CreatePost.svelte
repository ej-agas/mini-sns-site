<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	let postForm: App.PostForm = {
		title: '',
		body: ''
	};

	const { form, errors, enhance, constraints } = superForm(postForm, {
		SPA: true,
		taintedMessage: 'Are you sure you want to leave this page? You have unsaved changes.',
		validators: {
			title: (value) => {
				if (value.length <= 1) {
					return 'Title is required.';
				}
			},
			body: (value) => {
				if (value.length <= 1) {
					return 'Body is required.';
				}
			}
		},
		onUpdate({ form }) {
			if (form.valid === true) {
				handleSubmit();
			}
		}
	});

	function handleSubmit() {
		console.log($form.title, $form.body);
	}
</script>

<SuperDebug data={$form} />

<form class="p-4 m-4 bg-surface-600 rounded-xl grid" use:enhance>
	<label class="label">
		<span>Title</span>
		<input
			class="input"
			class:input-error={$errors.title}
			type="text"
			placeholder="Title"
			bind:value={$form.title}
		/>
		{#if $errors.title}
			<span class="badge variant-filled-error">{$errors.title}</span>
		{/if}
	</label>
	<label class="label">
		<span>Body</span>
		<textarea
			class="textarea"
			class:input-error={$errors.body}
			rows="4"
			placeholder="Share your thoughts!"
			bind:value={$form.body}
		/>
		{#if $errors.body}
			<span class="badge variant-filled-error">{$errors.body}</span>
		{/if}
	</label>
	<button class="btn variant-filled p-2 mt-2" type="submit">Post</button>
</form>
