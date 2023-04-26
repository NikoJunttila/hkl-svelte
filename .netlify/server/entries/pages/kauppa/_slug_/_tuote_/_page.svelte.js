import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1c4b147{text-decoration:none !important;color:inherit !important}button.svelte-1c4b147{appearance:none;border:0.125em solid #1A1A1A;border-radius:0.9375em;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:16px;font-weight:600;line-height:normal;min-height:3.75em;min-width:0;outline:none;padding:1em 2.3em;text-align:center;text-decoration:none;transition:all 300ms cubic-bezier(.23, 1, 0.32, 1);user-select:none;-webkit-user-select:none;touch-action:manipulation;will-change:transform}button.svelte-1c4b147:disabled{pointer-events:none}button.svelte-1c4b147:hover{box-shadow:rgba(0, 0, 0, 0.25) 0 8px 15px;transform:translateY(-2px)}button.svelte-1c4b147:active{box-shadow:none;transform:translateY(0)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-c8jzno_START -->${$$result.title = `<title>${escape(data.post.tuote)}</title>`, ""}<meta name="description"${add_attribute("content", data.post.tuote, 0)}><!-- HEAD_svelte-c8jzno_END -->`, ""}
<ol class="breadcrumb ml-5 mt-1"><li class="crumb"><a href="/kauppa" class="svelte-1c4b147">Kauppa</a></li>
	<li class="crumb-separator" aria-hidden>›</li>
	<li class="crumb"><a href="${"/kauppa/" + escape(data.post.categoria, true)}" class="svelte-1c4b147">${escape(data.post.categoria)}</a></li>
	<li class="crumb-separator" aria-hidden>›</li>
	<li class="crumb">${escape(data.post.tuote)}</li></ol>
<section class="flex my-4"><div class="basis-full grid place-items-center"><img class="max-w-[90%] rounded"${add_attribute("src", data.post.kuva, 0)} alt="tuote-kuva"></div>
<div class="basis-full text-center"><h3>${escape(data.post.tuote)}</h3>
<h5 class="mt-2">Hinta:${escape(data.post.hinta)}€</h5>
${data.post.määrä < 10 ? `<h5 class="text-red-400">Jäljellä: ${escape(data.post.määrä)}</h5>` : ``}
<p class="mt-2">${escape(data.post.kuvaus)}</p>
<button class="dark:bg-[#0f0448] bg-blue-400 hover:dark:bg-[var(--dark-green)] hover:bg-[var(--light-green)] mt-3 svelte-1c4b147">Lisää ostoskoriin</button></div></section>`;
});
export {
  Page as default
};
