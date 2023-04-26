async function load({ params }) {
  const endpoint = "https://hkl.fly.dev/api/products";
  const response = await fetch(endpoint);
  const data = await response.json();
  const post = data.filter((post2) => post2.categoria === params.slug);
  if (!post)
    throw error(404);
  return {
    post
  };
}
export {
  load
};
