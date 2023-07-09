<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import dayjs from 'dayjs';
	import advancedFormat from 'dayjs/plugin/advancedFormat';
	import timezone from 'dayjs/plugin/timezone';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(timezone);
	dayjs.extend(advancedFormat);
	dayjs.extend(relativeTime);

	export let post: App.FeedPost;
	export let userProfile: App.UserProfile;

</script>

<div class="feed">
	<div class="p-4 m-4 bg-surface-600 rounded-xl grid">
		<div class="flex flex-col">
			<div class="flex">
				<Avatar src="https://i.pravatar.cc/?img=48" width="w-10" rounded="rounded-full" />
				<a href="/users/{userProfile.userName}" class="p-2">
					<b
						>{userProfile.firstName +
							(' ' + userProfile.middleName ?? '') +
							' ' +
							userProfile.lastName}</b
					>
					<span>@{userProfile.userName}</span>
				</a>
				.
				<a href="/users/{userProfile.userName}/{post.id}" class="p-2"
					>{dayjs(post.createdAt).fromNow(true)}</a
				>
			</div>
			<div class="text-2xl text-white">{post.title}</div>
			<div class="text-xl text-white">{post.body}</div>
		</div>
	</div>
</div>
