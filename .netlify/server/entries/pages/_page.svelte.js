import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index3.js";
import { C as Contact } from "../../chunks/contact.js";
const landing_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".title-font.svelte-p2jzay.svelte-p2jzay{font-family:'Instrument Serif', serif}.wrapper.svelte-p2jzay.svelte-p2jzay{background-image:url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');background-size:cover;-webkit-animation:svelte-p2jzay-slidein 100s;animation:svelte-p2jzay-slidein 100s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@-webkit-keyframes svelte-p2jzay-slidein{from{background-position:top;background-size:3000px}to{background-position:-100px 0px;background-size:2750px}}@keyframes svelte-p2jzay-slidein{from{background-position:top;background-size:3000px}to{background-position:-100px 0px;background-size:2750px}}.center.svelte-p2jzay.svelte-p2jzay{display:flex;align-items:center;justify-content:center;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0;background:rgba(94, 94, 222, 0.3);border-radius:3px}.center.svelte-p2jzay h1.svelte-p2jzay{text-align:center;text-transform:uppercase}",
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="wrapper relative h-[50vh] svelte-p2jzay"><div class="center svelte-p2jzay"><h1 class="title-font svelte-p2jzay">Hyvinvointikeskus Luxus
      </h1></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".fade-in.svelte-1gbk1b8{-webkit-animation:svelte-1gbk1b8-fade-in 1.5s linear both;animation:svelte-1gbk1b8-fade-in 1.5s linear both;animation-delay:0.5s}@-webkit-keyframes svelte-1gbk1b8-fade-in{0%{opacity:0;transform:translateX(40px)}100%{opacity:1;transform:translateX(0px)}}@keyframes svelte-1gbk1b8-fade-in{0%{opacity:0;transform:translateX(40px)}100%{opacity:1;transform:translateX(0px)}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-yjybz0_START -->${$$result.title = `<title>Hyvinvointikeskus Luxus</title>`, ""}<!-- HEAD_svelte-yjybz0_END -->`, ""}


<main class="flex flex-col">${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
<section class="min-h-[30vh] flex items-center py-5 "><div class="${escape("opacity-0", true) + " max-w-[500px] rounded ml-[5%] xl:ml-[10%] flex items-center svelte-1gbk1b8"}"><div><span><h3>Hei, kiva että löysit sivuilleni!</h3> Hyvinvointikeskus Luxuksessa työskentelee Susanna Höijer, näkijä, parantaja ja koulutettu hieroja, jolla on yli 20 vuosikymmenen kokemus ja ammattitaidot. Tervetuloa avaamaan oven omaan hyvinvointiisi ja saavuttamaan tasapaino, eheys ja ilo elämässäsi.</span></div>
	<div><img class="drop-shadow-light dark:drop-shadow-dark min-w-[250px] min-h-[250px] rounded ml-2" src="https://i.imgur.com/6Qa8W4R.jpeg" alt="hkl"></div></div></section>
<section class="min-h-[30vh] flex items-center py-5"><div class="${escape("opacity-0", true) + " w-[400px] rounded ml-[50%] svelte-1gbk1b8"}"><div><strong>Hyvinvointipalveluillani</strong> pyritään löytämään ydinsyyt siitä, miksi terveys tai elämän muut eri osa-alueet ovat epätasapainossa. Palveluissa toimii lähihoidot vastaanotolla Sastamalassa sekä myös etähoidot.	
<p class="pt-2">Palveluni on suunnattu sinulle , joka haluat muutosta elämääsi ja lisätä hyvinvointia arkeesi.
</p></div></div></section>
<section class="min-h-[30vh] flex items-center py-5"><div class="${escape("opacity-0", true) + " w-[400px] rounded ml-[5%] xl:ml-[10%] grid place-items-center svelte-1gbk1b8"}"><div><a class="text-lg" href="/kauppa">Verkkokaupasta</a> voit ostaa hyvää oloa kuten kursseja, lahjakortteja, hoitoja, hoitavia äänitteitä sekä uniikkeja käsintehtyjä Ailéakorun koruja.
	</div>
	
	<div class="mt-2"><img class="mt-3 drop-shadow-light dark:drop-shadow-dark max-w-[300px] max-h-[250px] rounded" src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/angel-wing-7006-43c4c887f1a78a06a2554d6c7b1ba048@1x.jpg" alt="angel"></div></div></section>
<section class="min-h-[30vh] flex items-center py-5"><div class="${escape("opacity-0", true) + " w-[400px] rounded ml-[50%] svelte-1gbk1b8"}"><div><span><strong>Ajanvaraukset</strong> hoidat helpoiten <a href="/ajanvaraus">nettiajanvarauksesta.</a> Myös tekstiviestillä ja sähköpostitse voit kysellä aikoja.</span>
	<p class="pt-2">Ota yhteyttä ja kysy lisää!</p></div>
<div><img loading="lazy" class="mt-3 drop-shadow-light dark:drop-shadow-dark rounded" src="https://i.imgur.com/IyYc81d.jpg" alt="angel2"></div></div></section>
	<section class="min-h-[30vh] flex items-center py-5"><div class="${escape("opacity-0", true) + " w-[400px] rounded ml-[5%] xl:ml-[10%] p-4 border-4 border-dashed dark:border-[var(--dark-green)] border-[var(--light-green)] svelte-1gbk1b8"}"><h2 class="mb-2">Voimalause päivään</h2>
			<q>Ansaitsemallani rahalla voin tehdä hyviä asioita itselleni ja muille.</q></div></section>
	<section class="min-h-[30vh] flex items-center py-5"><div class="${escape("opacity-0", true) + " w-[450px] rounded ml-[45%] flex svelte-1gbk1b8"}"><div><img loading="lazy" src="https://www.hyvinvointikeskusluxus.com/susanna.jpg" alt="susanna" class="drop-shadow-light dark:drop-shadow-dark rounded"></div>
			<div class="flex flex-col gap-2 pl-3 ml-2"><p>Valolla ja rakkaudella, minulla on ilo palvella Sinua hyvinvointisi matkalla!</p>
				<p>Susanna Höijer
				Parantaja, Näkijä, Kouluttaja, Theta Healing® Practioner,
				Koulutettu hieroja</p></div></div></section>
		
		${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
