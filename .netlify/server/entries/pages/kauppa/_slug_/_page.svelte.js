import { c as create_ssr_component, e as escape, a as add_attribute, j as is_promise, n as noop, h as each } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid-container.svelte-1a5hx6o{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-gap:0.3rem}.card.svelte-1a5hx6o{box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.8);box-shadow:12px 17px 51px rgba(0, 0, 0, 0.22);backdrop-filter:blur(6px);border-radius:17px;cursor:pointer;transition:all 0.5s;display:flex;align-items:center;user-select:none;display:flex;flex-direction:column;width:100%;object-fit:cover;height:25vh;padding:0.5rem;text-align:center;border-radius:10px;overflow:hidden}.card.svelte-1a5hx6o:hover{border:1px solid black;transform:scale(1.05)}.card.svelte-1a5hx6o:active{transform:scale(0.95) rotateZ(1.7deg)}a.svelte-1a5hx6o{text-decoration:none !important;color:inherit !important}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-dghz50_START -->${$$result.title = `<title>${escape(data.post[0].categoria)}</title>`, ""}<meta name="description"${add_attribute("content", data.post[0].categoria, 0)}><!-- HEAD_svelte-dghz50_END -->`, ""}
<ol class="breadcrumb ml-5 mt-1"><li class="crumb"><a href="/kauppa" class="svelte-1a5hx6o">Kauppa</a></li>
	<li class="crumb-separator" aria-hidden>›</li>
	<li class="crumb">${escape(data.post[0].categoria)}</li></ol>
${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
<p>...waiting</p>
`;
    }
    return function(data2) {
      return `
<section class="grid-container pt-[5vh] pb-[25vh] px-2  svelte-1a5hx6o">${each(data2.post, (post) => {
        return `<a href="${escape(post.categoria, true) + "/" + escape(post.id, true)}" class="svelte-1a5hx6o"><div class="card hover:drop-shadow-dark dark:hover:drop-shadow-light  svelte-1a5hx6o"><p>${escape(post.tuote)}</p>
    <p>Hinta: ${escape(post.hinta)}€</p>
    <img class="max-w-[100px] rounded"${add_attribute("src", post.kuva, 0)} alt="tuotekuva"></div>
</a>`;
      })}</section>
`;
    }(__value);
  }(data)}`;
});
export {
  Page as default
};
