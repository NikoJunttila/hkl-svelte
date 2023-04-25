import { error } from '@sveltejs/kit';

export async function load({ params }) {
//const endpoint = `https://hkl.fly.dev/api/orders/${params.number}`;
const endpoint = `http://localhost:3001/api/orders/${params.number}`
const response = await fetch(endpoint);
const post = await response.json();
	//const post = data.find((post) => post.id === params.tuote);

	if (!post) throw error(404);

	return {
		post
	};
}