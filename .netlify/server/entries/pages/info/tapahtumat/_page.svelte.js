import { c as create_ssr_component, h as each, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="max-w-[50ch]">${data.post ? `${each(data.post, (event) => {
    return `<h2 class="py-5">${escape(event.text)}</h2>`;
  })}` : `<h3>Tällä hetkellä ei ole tulossa tapahtumia tarkasta uudestaan myöhemmin tai käy katsomassa
    löytyykö <a href="facebook.com/hyvinvointikeskusluxus/">facebook</a>/<a href="instagram.com/hyvinvointikeskusluxus/">instagram</a> sivuilta tulevia tapahtumia.
</h3>`}</div>`;
});
export {
  Page as default
};
