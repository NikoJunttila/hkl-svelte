export async function load({ params }) {
	const endpoint = 'https://hkl.fly.dev/api/events';
	const response = await fetch(endpoint);
	const post = await response.json();

	return {
		post
	};
}
