import { writable } from 'svelte/store';

const feed = writable<App.Post[]>([]);

export default feed;
