import { c as create_ssr_component, d as subscribe, h as each, e as escape, a as add_attribute } from "../../../../chunks/index3.js";
import { C as CartItemStore } from "../../../../chunks/store.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-jd5aob:disabled{background-color:rgb(170, 12, 12)}input.svelte-jd5aob:invalid{border:1px solid rgb(170, 12, 12)}a.svelte-jd5aob{text-decoration:none !important;color:inherit !important}button.svelte-jd5aob{appearance:none;border:0.125em solid #1A1A1A;border-radius:0.9375em;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:16px;font-weight:600;line-height:normal;min-height:3.75em;min-width:0;outline:none;padding:1em 2.3em;text-align:center;text-decoration:none;transition:all 300ms cubic-bezier(.23, 1, 0.32, 1);user-select:none;-webkit-user-select:none;touch-action:manipulation;will-change:transform}button.svelte-jd5aob:disabled{pointer-events:none}button.svelte-jd5aob:hover{box-shadow:rgba(0, 0, 0, 0.25) 0 8px 15px;transform:translateY(-2px)}button.svelte-jd5aob:active{box-shadow:none;transform:translateY(0)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cartItems;
  let total;
  let isFormValid;
  let $CartItemStore, $$unsubscribe_CartItemStore;
  $$unsubscribe_CartItemStore = subscribe(CartItemStore, (value) => $CartItemStore = value);
  let email = "";
  let name = "";
  let address = "";
  let phoneNum = "";
  $$result.css.add(css);
  cartItems = $CartItemStore;
  total = cartItems.reduce(
    (acc, item) => {
      return acc + item.hinta;
    },
    0
  );
  isFormValid = email !== "";
  $$unsubscribe_CartItemStore();
  return `<div class="min-h-[70vh]">${cartItems.length === 0 ? `<h2 class="text-center mt-4">Lisää ensin tuotteita</h2>` : `<div class="flex flex-wrap items-center gap-3 py-4 justify-center flex-col">${each(cartItems, (item) => {
    return `<a href="${"/kauppa/" + escape(item.categoria, true) + "/" + escape(item.id, true)}" class="svelte-jd5aob"><div class="flex flex-col items-center justify-center"><span>${escape(item.tuote)} ${escape(item.hinta)}€</span>
    <img height="50" width="60"${add_attribute("src", item.kuva, 0)} alt="tuote"></div>
</a>`;
  })}
<h2>yhteensä: ${escape(total)}€</h2>
<form class=""><p>nimi:</p>
<input class="input variant-form-material svelte-jd5aob" type="text" name="name" required${add_attribute("value", name, 0)}> 
<p>sähköposti:</p>
<input class="input variant-form-material svelte-jd5aob" type="text" name="email" required${add_attribute("value", email, 0)}> 
<p>osoite:</p>
<input class="input variant-form-material svelte-jd5aob" type="text" name="address" required${add_attribute("value", address, 0)}> 
<p>puh numero:</p>
<input class="input variant-form-material svelte-jd5aob" type="text" name="phone" required${add_attribute("value", phoneNum, 0)}> <br>
<button type="button" ${!isFormValid ? "disabled" : ""} class="hover:dark:bg-[#0f0448] hover:bg-blue-400 dark:bg-[var(--dark-green)] bg-[var(--light-green)] mt-3 svelte-jd5aob">Siirry maksamaan</button></form></div>`} 
</div>`;
});
export {
  Page as default
};
