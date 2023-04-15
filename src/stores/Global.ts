import { writable } from 'svelte/store';

function createGlobalStore() {
	const defaults = {
		isLoggedIn: false
	};

	const { subscribe, set, update } = writable<App.GlobalStore>({ ...defaults });

	return {
		subscribe,
		set,
		update,
		login: () => set({ isLoggedIn: true }),
		logout: () => set({ isLoggedIn: false }),
		reset: () => set({ ...defaults })
	};
}

export default createGlobalStore();
