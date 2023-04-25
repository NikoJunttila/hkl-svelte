<script>
import Landing from "$lib/landing.svelte";
import Contact from "$lib/contact.svelte";
import viewport from "../stores/useViewportAction";
let one = false;
let two = false;
let three = false;
let four = false;
let five = false;
let six = false;

</script>
<svelte:head>
	<title>Hyvinvointikeskus Luxus</title>
</svelte:head>


<main class="flex flex-col">
<Landing />
<section class="min-h-[30vh] flex items-center py-5 ">
	<div 
	use:viewport
		on:enterViewport={() => one = true}
		on:exitViewport={() => one = false}
	class="{one ? "fade-in" : "opacity-0" } max-w-[500px] rounded ml-[5%] xl:ml-[10%] flex items-center">
		<div>
		<span><h3>Hei, kiva että löysit sivuilleni!</h3> Hyvinvointikeskus Luxuksessa työskentelee Susanna Höijer, näkijä, parantaja ja koulutettu hieroja, jolla on yli 20 vuosikymmenen kokemus ja ammattitaidot. Tervetuloa avaamaan oven omaan hyvinvointiisi ja saavuttamaan tasapaino, eheys ja ilo elämässäsi.</span>
	</div>
	<div >
		<img class="drop-shadow-light dark:drop-shadow-dark min-w-[250px] min-h-[250px] rounded ml-2" src="https://i.imgur.com/6Qa8W4R.jpeg" alt="hkl"/>
	</div>
</div>
	</section>
<section class="min-h-[30vh] flex items-center py-5">
	<div
	use:viewport
		on:enterViewport={() => two = true}
		on:exitViewport={() => two = false}
	class="{two ? "fade-in" : "opacity-0" } w-[400px] rounded ml-[50%]">
 <div><strong>Hyvinvointipalveluillani</strong> pyritään löytämään ydinsyyt siitä, miksi terveys tai elämän muut eri osa-alueet ovat epätasapainossa. Palveluissa toimii lähihoidot vastaanotolla Sastamalassa sekä myös etähoidot.	
<p class="pt-2">Palveluni on suunnattu sinulle , joka haluat muutosta elämääsi ja lisätä hyvinvointia arkeesi.
</p>
</div>
</div>
	</section>
<section class="min-h-[30vh] flex items-center py-5">
	<div use:viewport
	on:enterViewport={() => three = true}
	on:exitViewport={() => three = false}
	 class="{three ? "fade-in" : "opacity-0" } w-[400px] rounded ml-[5%] xl:ml-[10%] grid place-items-center">
	<div>
		<a class="text-lg" href="/kauppa">Verkkokaupasta</a> voit ostaa hyvää oloa kuten kursseja, lahjakortteja, hoitoja, hoitavia äänitteitä sekä uniikkeja käsintehtyjä Ailéakorun koruja.
	</div>
	
	<div class="mt-2">
			<img class="mt-3 drop-shadow-light dark:drop-shadow-dark max-w-[300px] max-h-[250px] rounded" src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/angel-wing-7006-43c4c887f1a78a06a2554d6c7b1ba048@1x.jpg" alt="angel">
	</div>
</div>
	

	</section>
<section class="min-h-[30vh] flex items-center py-5">
	<div use:viewport
	on:enterViewport={() => four = true}
	on:exitViewport={() => four = false} class="{four ? "fade-in" : "opacity-0" } w-[400px] rounded ml-[50%] ">
		<div>
		<span><strong>Ajanvaraukset</strong> hoidat helpoiten <a href="/ajanvaraus">nettiajanvarauksesta.</a> Myös tekstiviestillä ja sähköpostitse voit kysellä aikoja.</span>
	<p class="pt-2">Ota yhteyttä ja kysy lisää!</p>
</div>
<div>
	<img loading="lazy" class="mt-3 drop-shadow-light dark:drop-shadow-dark rounded" src="https://i.imgur.com/IyYc81d.jpg" alt="angel2">
</div>
	</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div use:viewport
		on:enterViewport={() => five = true}
		on:exitViewport={() => five = false} class="{five ? "fade-in" : "opacity-0" } w-[400px] rounded ml-[5%] xl:ml-[10%] p-4 border-4 border-dashed  dark:border-[var(--dark-green)] border-[var(--light-green)]">
			<h2 class="mb-2">Voimalause päivään</h2>
			<q>Ansaitsemallani rahalla voin tehdä hyviä asioita itselleni ja muille.</q>
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div 
		use:viewport
		on:enterViewport={() => six = true}
		on:exitViewport={() => six = false}
		class="{six ? "fade-in" : "opacity-0" } w-[450px] rounded ml-[45%] flex">
			<div><img loading="lazy" src="https://www.hyvinvointikeskusluxus.com/susanna.jpg" alt="susanna" class="drop-shadow-light dark:drop-shadow-dark rounded" /> </div>
			<div class="flex flex-col gap-2 pl-3 ml-2">
				<p>Valolla ja rakkaudella, minulla on ilo palvella Sinua hyvinvointisi matkalla!</p>
				<p>Susanna Höijer
				Parantaja, Näkijä, Kouluttaja, Theta Healing® Practioner,
				Koulutettu hieroja</p>
			</div>
		</div>
		</section>
		
		<Contact />
</main>

<style>
.fade-in {
	-webkit-animation: fade-in 1.5s linear both;
	        animation: fade-in 1.5s linear both;
			animation-delay: 0.5s;
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
	transform: translateX(40px);
  }
  100% {
    opacity: 1;
	transform: translateX(0px);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
	transform: translateX(40px);
  }
  100% {
    opacity: 1;
	transform: translateX(0px);
  }
}
</style>
