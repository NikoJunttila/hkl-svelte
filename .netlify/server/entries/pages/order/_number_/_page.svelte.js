import { c as create_ssr_component, h as each, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="min-h-[70vh] flex items-center justify-center gap-3 flex-col"><h2>tuotteiden id:</h2>
${each(data.post.ordered_items, (item) => {
    return `<a href="${"/kauppa/slug/" + escape(item, true)}">${escape(item)}</a>`;
  })}
<h2>tilaus id: ${escape(data.post.id)}</h2>
<h2>hinta: ${escape(data.post.total)}€</h2>
<h2>tilauksen status: ${escape(data.post.status)}</h2></div>`;
});
export {
  Page as default
};
