import { error } from '@sveltejs/kit';

export async function load({ params }) {
const endpoint = `https://hkl.fly.dev/api/products/${params.tuote}`;
const response = await fetch(endpoint);
const post = await response.json();
	//const post = data.find((post) => post.id === params.tuote);

	if (!post) throw error(404);

	return {
		post
	};
}