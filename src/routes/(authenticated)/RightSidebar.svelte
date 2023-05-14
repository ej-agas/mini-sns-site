<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="sidebar-right hidden lg:block">
	<div class="p-4 m-8 bg-surface-600 rounded-xl grid grid-cols-1 card-hover">
		<button type="button" class="btn variant-filled grid col-span-1">Search</button>
	</div>
	<div class="p-2 m-8 bg-surface-600 rounded-xl grid justify-items-center">
		<h3>Suggestions:</h3>
		<div class="grid grid-cols-1 pt-4">
			<div class="grid grid-cols-2 m-2 card card-hover p-4">
				<div class="grid justify-items-center">
					<Avatar src="https://i.pravatar.cc/?img=48" width="w-20" rounded="rounded-full" />
				</div>
				<div>
					<h3 class="text-sm text-primary-500">Jane Doe</h3>
					<p class="text-sm text-primary-500">@jdoe123</p>
				</div>
			</div>
			<div class="grid grid-cols-2 m-2 card card-hover p-4">
				<div class="grid justify-items-center">
					<Avatar src="https://i.pravatar.cc/?img=48" width="w-20" rounded="rounded-full" />
				</div>
				<div>
					<h3 class="text-sm text-primary-500">John Doe</h3>
					<p class="text-sm text-primary-500">@john_doe_47</p>
				</div>
			</div>
			<div class="grid grid-cols-2 m-2 card card-hover p-4">
				<div class="grid justify-items-center">
					<Avatar src="https://i.pravatar.cc/?img=48" width="w-20" rounded="rounded-full" />
				</div>
				<div>
					<h3 class="text-sm text-primary-500">Jack Frost</h3>
					<p class="text-sm text-primary-500">@jack_fr0st_0120</p>
				</div>
			</div>
			<div class="grid grid-cols-2 m-2 card card-hover p-4">
				<div class="grid justify-items-center">
					<Avatar src="https://i.pravatar.cc/?img=48" width="w-20" rounded="rounded-full" />
				</div>
				<div>
					<h3 class="text-sm text-primary-500 break-words max-w-xs">Naruto Uzumaki</h3>
					<p class="text-sm text-primary-500">@narut0</p>
				</div>
			</div>
		</div>
	</div>
</div>
