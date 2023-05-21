<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	let searchQuery: string = '';
	let searchResults: [] = [];
	let debounceTimeout: number = 0;

	async function performSearch() {
		// Perform your API search request here
		// You can use fetch or any library of your choice
		// For simplicity, let's simulate an API call with a setTimeout

		// Clear existing timeout if it exists
		clearTimeout(debounceTimeout);

		// Set a new timeout for 300 milliseconds
		debounceTimeout = setTimeout(async () => {
			// Make the API call with the searchQuery
			// const response = await fetch(`https://api.example.com/search?query=${searchQuery}`);
			// const data = await response.json();

			// Update searchResults with the API response
			// searchResults = data.results;
			console.log(searchQuery);
		}, 300);
	}
</script>

<div
	class="modal-search card bg-surface-100/60 dark:bg-surface-500/30 backdrop-blur-lg overflow-hidden w-full max-w-[800px] shadow-xl mt-8 mb-auto"
>
	<header class="modal-search-header bg-surface-300-600-token flex items-center">
		<i class="fa-solid fa-magnifying-glass text-xl ml-4" />
		<input
			type="search"
			class="bg-transparent border-0 ring-0 focus:ring-0 w-full p-4 text-lg"
			placeholder="Search..."
			bind:value={searchQuery}
			on:input={performSearch}
		/>
	</header>
	<div class="modal-search-results overflow-x-auto max-h-[480px] hide-scrollbar">
		<nav class="list-nav">
			<ul>
				<li>
					<div class="grid grid-cols-[0fr,2fr] gap-2 p-4">
						<div>
							<Avatar src="https://i.pravatar.cc/?img=48" width="w-16" rounded="rounded-full" />
						</div>
						<div class="items-center grid grid-rows-2">
							<p class="text-sm font-bold">John Doe</p>
							<p class="text-sm font-bold">@jdoe123</p>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</div>
