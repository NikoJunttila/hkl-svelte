import { g as get_store_value, c as create_ssr_component, a as add_attribute, e as escape, b as compute_slots, d as subscribe, v as validate_component } from "../../chunks/index3.js";
import { w as writable } from "../../chunks/index2.js";
const themeSkeleton = "";
const all = "";
const app = "";
const stores = {};
function getStorage(type) {
  return type === "local" ? localStorage : sessionStorage;
}
function localStorageStore(key, initialValue, options) {
  const serializer = options?.serializer ?? JSON;
  const storageType = options?.storage ?? "local";
  const browser = typeof window !== "undefined" && typeof document !== "undefined";
  function updateStorage(key2, value) {
    if (!browser)
      return;
    getStorage(storageType).setItem(key2, serializer.stringify(value));
  }
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
      const json = browser ? getStorage(storageType).getItem(key) : null;
      if (json) {
        set2(serializer.parse(json));
      }
      if (browser) {
        const handleStorage = (event) => {
          if (event.key === key)
            set2(event.newValue ? serializer.parse(event.newValue) : null);
        };
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
      }
    });
    const { subscribe: subscribe2, set } = store;
    stores[key] = {
      set(value) {
        updateStorage(key, value);
        set(value);
      },
      update(updater) {
        const value = updater(get_store_value(store));
        updateStorage(key, value);
        set(value);
      },
      subscribe: subscribe2
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
const modeCurrent = localStorageStore("modeCurrent", false);
function setInitialClassState() {
  const elemHtmlClasses = document.documentElement.classList;
  const condLocalStorageUserPrefs = localStorage.getItem("modeUserPrefers") === "false";
  const condLocalStorageUserPrefsExists = !("modeUserPrefers" in localStorage);
  const condMatchMedia = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (condLocalStorageUserPrefs || condLocalStorageUserPrefsExists && condMatchMedia) {
    elemHtmlClasses.add("dark");
  } else {
    elemHtmlClasses.remove("dark");
  }
}
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesheader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesheader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell">
	${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesheader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}

	
	<div class="${"flex-auto " + escape(cContentArea, true)}">
		${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}

		
		<div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}">
			${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}

			
			<main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>

			
			${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>

		
		${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>

	
	${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const ProgressBar_svelte_svelte_type_style_lang = "";
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-1fqad1o_START --><!-- HTML_TAG_START -->${`<script>(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-1fqad1o_END -->`, ""}

<div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)} title="${"Toggle " + escape($modeCurrent === true ? "Dark" : "Light", true) + " Mode"}" tabindex="0">
	<div class="${"lightswitch-thumb " + escape(classesThumb, true)}">
		<svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".showMoreBtn.svelte-6iy603:hover+ul.svelte-6iy603,.showMoreBtn.svelte-6iy603:focus+ul.svelte-6iy603{opacity:1;transition:opacity 0.55s ease-in-out;visibility:visible}.showMoreBtn.svelte-6iy603.svelte-6iy603:hover,.showMoreBtn.svelte-6iy603.svelte-6iy603:focus{outline:4px solid var(--dark-green)}ul.svelte-6iy603.svelte-6iy603{width:100px;opacity:0;visibility:hidden;transition:opacity 0.6s ease, visibility 0.6s ease}ul.svelte-6iy603.svelte-6iy603:hover{opacity:1;visibility:visible}li.svelte-6iy603.svelte-6iy603{padding:3px 0}@media(max-width: 500px){ul.svelte-6iy603.svelte-6iy603{transform:translateX(-80px)}}a.svelte-6iy603.svelte-6iy603{text-decoration:none !important;color:inherit !important}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="bg-surface-100-800-token flex w-full justify-center items-center py-4 gap-2"><div class="mr-auto"><img src="/favicon.png" alt="icon"></div>
	<a class="btn btn-sm variant-ghost-surface svelte-6iy603" href="/" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z"></path></svg></a>
	<a class="btn btn-sm variant-ghost-surface svelte-6iy603" href="/kauppa" rel="noreferrer">Kauppa </a>
	<a class="btn btn-sm variant-ghost-surface svelte-6iy603" href="/galleria">Galleria </a>
	<div class="relative"><button class="btn btn-sm variant-ghost-surface showMoreBtn svelte-6iy603"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"></path></svg></button>
		<ul class="absolute min-w-[19ch] text-center left-0 cursor-pointer translate-x-[-25px] p-2 rounded bg-surface-50-900-token svelte-6iy603"><a href="/info/ajanvaraus" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Ajanvaraus</li></a>
			<a href="/info/hinnasto" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Hinnasto</li></a>
			<a href="/info/susanna" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Susanna</li></a>
			<a href="/info/hyvinvointipalvelut" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Hyvinvointipalvelut</li></a>
			<a href="/info/tapahtumat" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Tapahtumat</li></a>
			<a href="/info/yhteystiedot" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Yhteystiedot</li></a>
			<a href="/info/tietosuoja" class="svelte-6iy603"><li class="hover:bg-surface-200-700-token svelte-6iy603">Tietosuojaseloste</li></a></ul></div>
	<div class="ml-auto mr-2">${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})}</div>
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1etey4n{text-align:center}footer.svelte-1etey4n{transition:all 0.5s;box-shadow:0px -6px 10px 5px rgba(0, 0, 0, 0.22)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="py-2 flex flex-col gap-2 justify-center items-center dark:bg-[var(--dark-green)] bg-[var(--light-green)] svelte-1etey4n"><h3>Info</h3>
    <h4>Peruutusehto</h4>
    <p class="svelte-1etey4n">Alle 24 tuntia peruutettu ajanvaraus - veloitetaan ajanvarauksesta normaali hoitohinta. Peruutukset tulee siis tehdä 24 h ennen varattua aikaa. Peruuttamattomat, unohdetut ajat tai peruutukset, jotka tehty alle 24 h ennen hoitoa veloitetaan täysimääräisesti. Uutta aikaa ei voi varata seuraavalle 24 tunnille.</p>
    <h4>Maksuvälineet</h4>
    <p class="svelte-1etey4n">Hoitolassa toimii maksuvälineenä reaaliaikainen tilisiirto yrityksen tilille sekä käteinen. Mahdollisuus laskulla maksamiseen on vain etähoitopalvelujen, kurssien ja kodinhoitopalvelujen maksamiseen. Laskulla on maksuaikaa 4 vuorokautta. Laskutusta varten ilmoita nimesi, osoitteesi, ja sähköpostisi.</p>
    <h4>Ajanvaraus</h4>
    <p class="svelte-1etey4n">Ajanvaraus nettiajanvarauksella, tekstiviestillä, soittamalla tai sähköpostilla.</p>  
    <p class="svelte-1etey4n">Ajanvaraustilauksen yhteydessä anna nimi, osoitteesi ja sähköpostiosoite sekä toive haluamasi hoitoajan tai palvelun kellonajasta.Etähoitotilauksissa lasku lähetetään sähköpostilla. Yritys ei toimita laskua paperisena.</p>
    <h4>Huomioitavaa</h4>
    <p class="svelte-1etey4n">Joissakin hoidossa on käytössä eteerisiä öljyjä. Hyvinvointikeskus Luxus ei vastaa asiakkaan allergiasta mikäli hoitojen aikana eteerisistä öljyistä aiheutuu asiakkaalle allergiaa.
    Omasta allergiasta on tällöin suotavaa mainita jo ajanvarauksen yhteydessä. Näin voidaan välttää öljyjen käyttö hoitotilanteessa.</p>
    <h4>Yhteystiedot</h4>
    <p class="svelte-1etey4n">Hyvinvointikeskus Luxus / Y-tunnus: 1773403-5 / Susanna Höijer / Puh. 040 7249 887 / Sähköposti: info.hyvinvointikeskusluxus@gmail.com</p>
    <p class="svelte-1etey4n">www.hyvinvointikeskusluxus.com</p>
   <div class="flex gap-2"><a href="https://instagram.com/hyvinvointikeskusluxus/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"></rect><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"></path><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"></stop><stop offset=".1" stop-color="#FD5"></stop><stop offset=".5" stop-color="#FF543E"></stop><stop offset="1" stop-color="#C837AB"></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"></stop><stop offset=".128" stop-color="#3771C8"></stop><stop offset="1" stop-color="#60F" stop-opacity="0"></stop></radialGradient></defs></g></svg></a>
    <a href="https://facebook.com/hyvinvointikeskusluxus/"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"></path></svg></a></div></footer>`;
});
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { key } = $$props;
  let { duration = 300 } = $$props;
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    header: () => {
      return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	`;
    },
    default: () => {
      return `${validate_component(Transition, "PageTransition").$$render($$result, { key: data.url, duration: 400 }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
	
	 ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Layout as default
};
