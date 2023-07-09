import { writable } from 'svelte/store';

const feed = writable<App.FeedPost[]>([]);

export default feed;
