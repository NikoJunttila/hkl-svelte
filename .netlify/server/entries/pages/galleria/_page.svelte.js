import { c as create_ssr_component, h as each, a as add_attribute, e as escape } from "../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let galleria = [];
  return `<div class="grid grid-cols-1 place-items-center">${galleria.length ? each(galleria, (photo) => {
    return `<figure><img loading="lazy" class="rounded mx-1"${add_attribute("src", photo.img, 0)} alt="kuva">
			<figcaption class="my-2 text-center">${escape(photo.text)}</figcaption>
		</figure>`;
  }) : `
		<p>ladataan...</p>`}</div>
${$$result.head += `<!-- HEAD_svelte-g8stxx_START -->${$$result.title = `<title>Galleria</title>`, ""}<!-- HEAD_svelte-g8stxx_END -->`, ""}`;
});
export {
  Page as default
};
