<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let signupForm: App.SignupForm = {
		firstName: '',
		middleName: '',
		lastName: '',
		email: '',
		password: '',
		gender: '',
		birthdate: {
			year: 2021,
			month: 1,
			day: 1,
			toString: () => {
				return `${signupForm.birthdate.year}-${signupForm.birthdate.month}-${signupForm.birthdate.day}`;
			}
		}
	};

	$: {
		console.log(signupForm);
	}

	function signup(): void {
		console.log(signupForm.birthdate.toString());
	}
</script>

<form class="flex flex-col card card-hover p-10" on:submit|preventDefault={signup}>
	<header class="text-4xl font-bold">Sign Up</header>
	<article class="mb-4">It's quick and easy.</article>
	<div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
		<label class="label col-span-1">
			<span>First Name:</span>
			<input class="input" type="text" bind:value={signupForm.firstName} />
		</label>
		<label class="label col-span-1">
			<span>Middle Name:</span>
			<input class="input" type="text" bind:value={signupForm.middleName} />
		</label>
		<label class="label col-span-1">
			<span>Last Name:</span>
			<input class="input" type="text" bind:value={signupForm.lastName} />
		</label>
		<label class="label col-span-full">
			<span>E-mail:</span>
			<input class="input" type="text" bind:value={signupForm.email} />
		</label>
		<label class="label col-span-full">
			<span>Password:</span>
			<input class="input" type="password" bind:value={signupForm.password} />
		</label>
		<div class="label col-span-full">Birthday:</div>
		<label class="label col-span-1">
			<select class="select" bind:value={signupForm.birthdate.month}>
				<option value="1">Jan</option>
				<option value="2">Feb</option>
				<option value="3">Mar</option>
				<option value="4">Apr</option>
				<option value="5">May</option>
				<option value="6">Jun</option>
				<option value="7">Jul</option>
				<option value="8">Aug</option>
				<option value="9">Sep</option>
				<option value="10">Oct</option>
				<option value="11">Nov</option>
				<option value="12">Dec</option>
			</select>
		</label>
		<label class="label col-span-1">
			<select class="select" bind:value={signupForm.birthdate.day}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
				<option value="11">11</option>
				<option value="12">12</option>
				<option value="13">13</option>
				<option value="14">14</option>
				<option value="15">15</option>
				<option value="16">16</option>
				<option value="17">17</option>
				<option value="18">18</option>
				<option value="19">19</option>
				<option value="20">20</option>
				<option value="21">21</option>
				<option value="22">22</option>
				<option value="23">23</option>
				<option value="24">24</option>
				<option value="25">25</option>
				<option value="26">26</option>
				<option value="27">27</option>
				<option value="28">28</option>
				<option value="29">29</option>
				<option value="30">30</option>
				<option value="31">31</option>
			</select>
		</label>
		<label class="label col-span-1">
			<select class="select" bind:value={signupForm.birthdate.year}>
				{#each Array.from({ length: 124 }, (_, i) => 2023 - i) as year}
					<option value={year}>{year}</option>
				{/each}
			</select>
		</label>
		<div class="label col-span-full">Gender:</div>
		<div class="label col-span-full">
			<RadioGroup display="flex" padding="py-2">
				<RadioItem bind:group={signupForm.gender} name="justify" value={'Male'}>Male</RadioItem>
				<RadioItem bind:group={signupForm.gender} name="justify" value={'Female'}>Female</RadioItem>
				<RadioItem bind:group={signupForm.gender} name="justify" value={'Other'}>Other</RadioItem>
			</RadioGroup>
		</div>
	</div>
	<button type="submit" class="btn btn-sm variant-filled px-10 py-4 mt-4">Sign Up</button>
</form>

<style>
</style>
