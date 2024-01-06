import type { LayoutLoad } from './$types';

export const load = (async () => {
    const endpoint = 'https://hkl.fly.dev/api/events';
	const response = await fetch(endpoint);
	const data = await response.json();
    const single = data[0].text
    console.log(single)
    return {
        text : single
    };
}) satisfies LayoutLoad;