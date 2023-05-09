<script lang="ts">
	import userProfile from '$stores/UserProfile';
	import { superForm } from 'sveltekit-superforms/client';
	import UpdateMyProfile from '../../../api/UpdateMyProfile';

	let userProfileForm: App.UserProfileForm = {
		first_name: '',
		middle_name: '',
		last_name: '',
		bio: ''
	};

	const { form, errors, enhance, constraints } = superForm(userProfileForm, {
		SPA: true,
		taintedMessage: 'Are you sure you want to leave this page? You have unsaved changes.',
		validators: {
			firstName: (value) => {
				if (value.length <= 1) {
					return 'First name is required.';
				}
			},
			lastName: (value) => {
				if (value.length <= 1) {
					return 'Last name is required.';
				}
			},
			bio: (value) => {
				if (value.length > 50) {
					return 'Bio must be less than 50 characters.';
				}
			},
			email: (value) => {
				if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
					return 'Invalid email address.';
				}
			}
		},
		onUpdate({ form }) {
			if (form.valid === true) {
				handleSubmit();
			}
		}
	});

	$form = $userProfile;

	async function handleSubmit() {
		await UpdateMyProfile({
			first_name: $form.firstName,
			middle_name: $form.middleName,
			last_name: $form.lastName,
			bio: $form.bio
		});

		location.reload();
	}
</script>

<form class="p-4 m-4 bg-surface-600 rounded-xl grid grid-cols-3 gap-4" method="POST" use:enhance>
	<header class="text-4xl font-bold col-span-3">Update Profile</header>
	<label class="label">
		<span>First Name</span>
		<input
			class="input"
			class:input-error={$errors.firstName}
			type="text"
			bind:value={$form.firstName}
		/>
		{#if $errors.firstName}
			<span class="badge variant-filled-error">{$errors.firstName}</span>
		{/if}
	</label>
	<label class="label">
		<span>Middle Name</span>
		<input
			class="input"
			class:input-error={$errors.middleName}
			type="text"
			bind:value={$form.middleName}
		/>
		{#if $errors.middleName}
			<span class="badge variant-filled-error">{$errors.middleName}</span>
		{/if}
	</label>
	<label class="label">
		<span>Last Name</span>
		<input
			class="input"
			class:input-error={$errors.lastName}
			type="text"
			bind:value={$form.lastName}
		/>
		{#if $errors.lastName}
			<span class="badge variant-filled-error">{$errors.lastName}</span>
		{/if}
	</label>
	<label class="label col-span-3">
		<span>Bio</span>
		<input class="textarea" class:input-error={$errors.bio} type="text" bind:value={$form.bio} />
		{#if $errors.bio}
			<span class="badge variant-filled-error">{$errors.bio}</span>
		{/if}
	</label>
	<label class="label">
		<span>Email</span>
		<input
			type="text"
			class="input"
			class:input-error={$errors.email}
			bind:value={$form.email}
			disabled
		/>
		{#if $errors.email}
			<span class="badge variant-filled-error">{$errors.email}</span>
		{/if}
	</label>
	<label class="label">
		<span>Join Date</span>
		<input type="text" class="input" bind:value={$form.joinDate} disabled />
	</label>
	<label class="label">
		<span>Verified Date</span>
		<input type="text" class="input" bind:value={$form.verifiedDate} disabled />
	</label>
	<button class="btn variant-filled p-2 float-right col-span-3">Update</button>
</form>
