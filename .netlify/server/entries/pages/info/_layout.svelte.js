import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { C as Contact } from "../../../chunks/contact.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="ml-2 py-10 flex flex-col justify-center align-middle"><div class="grid place-items-center pb-5">${slots.default ? slots.default({}) : ``}</div>
    <div class="smaller">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
