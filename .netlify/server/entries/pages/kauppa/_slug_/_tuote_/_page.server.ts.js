import { e as error } from "../../../../../chunks/index.js";
async function load({ params }) {
  const endpoint = `https://hkl.fly.dev/api/products/${params.tuote}`;
  const response = await fetch(endpoint);
  const post = await response.json();
  if (!post)
    throw error(404);
  return {
    post
  };
}
export {
  load
};
