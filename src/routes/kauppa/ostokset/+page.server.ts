export async function load({ params }) {
	const endpoint = 'https://hkl.fly.dev/api/coupons';
	const response = await fetch(endpoint);
	const data = await response.json();
    console.log(data)
	if (!data) throw error(404);
	return {
		data
	};
}
