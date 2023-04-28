<script>
	import Landing from '$lib/landing.svelte';
	import Contact from '$lib/contact.svelte';
	import viewport from '../stores/useViewportAction';
	import Quote from '$lib/quote.svelte';
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
	<section class="min-h-[30vh] flex items-center py-5">
		<div
			use:viewport
			on:enterViewport={() => (one = true)}
			on:exitViewport={() => (one = false)}
			class="{one
				? 'fade-in'
				: 'opacity-0'} max-w-[500px] rounded ml-[5%] xl:ml-[10%] flex items-center"
		>
			<div>
				
					<h2>Tervetuloa eheytymisen matkalle</h2>
					<p class="bigFont">yhdessä löytämään työvälineet hyvinvointia edistävään,
tasapainoisempaan ja onnellisempaan elämään.
	Hyvinvointikeskus Luxusen hoidot ja
valmennukset ovat syntyneet pitkästä vankasta työkokemuksesta,
asiantuntemuksesta ja halusta auttaa.
</p>
				
			</div>
			<div>
				<img
					class="drop-shadow-light dark:drop-shadow-dark min-w-[250px] min-h-[250px] rounded ml-2"
					src="https://i.imgur.com/KpWECR8.jpg"
					alt="hkl"
				/>
			</div>
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div
			use:viewport
			on:enterViewport={() => (two = true)}
			on:exitViewport={() => (two = false)}
			class="{two ? 'fade-in' : 'opacity-0'} w-[400px] rounded lessMargin flex gap-6 flex-row-reverse"
		>
			<div>
				<strong>Hyvinvointipalveluillani</strong> pyritään löytämään ydinsyyt miksi terveys tai
				elämän muut eri osa-alueet ovat epätasapainossa.
				<p class="pt-2">
					Muutos alkaa Sinusta itsestäsi. Ja muistathan, että Sinä itse olet oman
elämäsi Luxus.</p> <p>Voit valita tuletko vastanotolleni Sastamalaan tai onko Sinulle parempi
vaihtoehto etävastaanotto.
				</p>
			</div>
			<div>
				<img
					class="mt-3 drop-shadow-light dark:drop-shadow-dark max-w-[300px] max-h-[250px] rounded"
					src="https://i.imgur.com/lPPhbfX.jpg"
					alt="senjankuva"
				/>
			</div>
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div
			use:viewport
			on:enterViewport={() => (three = true)}
			on:exitViewport={() => (three = false)}
			class="{three
				? 'fade-in'
				: 'opacity-0'} w-[400px] rounded ml-[5%] xl:ml-[10%] grid place-items-center"
		>
		<div>
			<span
				><strong>Palveluvalikoima, ajanvaraukset ja muu lisätieto löytyy <a href="/kauppa">kaupasta.</a></strong> 
				Ole yhteydessä sähköpostilla mikäli haluat lisää tietoa palveluista.
				Tai voit myös <a href="https://booksalon.fi/hyvinvointikeskus-luxus?booking-state=N4IgzgpgTgbglgYwgSQCYgFwgGwBZcAcAzLgAwBM5A7OQIZWq3bYCMquVRERIAvkA">varata</a> ilmaisen 30 min. etäajan jossa kartoitamme mikä palvelu
				Sinulle parhaiten sopisi.
		</div>
			<div class="mt-2 ">
				<img
					class="mt-3 drop-shadow-light dark:drop-shadow-dark max-w-[300px] max-h-[250px] rounded"
					src="https://i.imgur.com/3BK0By2.jpg"
					alt="angel"
				/>
			</div>
		</div>
	</section>

 	<section class="min-h-[30vh] flex items-center py-5">
		<div
			use:viewport
			on:enterViewport={() => (four = true)}
			on:exitViewport={() => (four = false)}
			class="{four ? 'fade-in' : 'opacity-0'} w-[400px] rounded lessMargin"
		>
		<!-- 	<div>
				<span
					><strong>Palveluvalikoima, ajanvaraukset ja muu lisätieto löytyy <a href="/kauppa">kaupasta.</a></strong> 
					Ole yhteydessä sähköpostilla mikäli haluat lisää tietoa palveluista.
					Tai voit myös <a href="https://booksalon.fi/hyvinvointikeskus-luxus?booking-state=N4IgzgpgTgbglgYwgSQCYgFwgGwBZcAcAzLgAwBM5A7OQIZWq3bYCMquVRERIAvkA">varata</a> ilmaisen 30 min. etäajan jossa kartoitamme mikä palvelu
					Sinulle parhaiten sopisi.
			</div> -->
			<div> 
				<img
					loading="lazy"
					class="mt-3 drop-shadow-light dark:drop-shadow-dark rounded"
					src="https://i.imgur.com/TaYXXMo.jpg"
					alt="angel2"
				/>
			</div>
		</div>
	</section> 

	<section class="min-h-[30vh] flex items-center py-5">
		<div
			use:viewport
			on:enterViewport={() => (five = true)}
			on:exitViewport={() => (five = false)}
			class="{five
				? 'fade-in'
				: 'opacity-0'} w-[400px] rounded ml-[5%] xl:ml-[10%] p-4 border-4 border-dashed dark:border-[var(--dark-green)] border-[var(--light-green)]"
		>
			<h2 class="mb-2">Voimalause päivään</h2>
			<Quote />
		</div>
	</section>
	<section class="min-h-[30vh] flex items-center py-5">
		<div
			use:viewport
			on:enterViewport={() => (six = true)}
			on:exitViewport={() => (six = false)}
			class="{six ? 'fade-in' : 'opacity-0'} w-[450px] rounded lessMargin flex"
		>
			<div>
				<img
					loading="lazy"
					src="https://www.hyvinvointikeskusluxus.com/susanna.jpg"
					alt="susanna"
					class="drop-shadow-light dark:drop-shadow-dark rounded"
				/>
			</div>
			<div class="flex flex-col gap-2 pl-3 ml-2">
				<p>Valolla ja rakkaudella, minulla on ilo palvella Sinua hyvinvointisi matkalla!</p>
				<p>
					Susanna Höijer Parantaja, Näkijä, Kouluttaja, Theta Healing® Practioner, Koulutettu
					hieroja
				</p>
			</div>
		</div>
	</section>

	<Contact />
</main>

<style>
	div{
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	.lessMargin{
		margin-left: 50%;
	}
	@media(max-width: 750px){
		.lessMargin{
		margin-left: 20%;
		}
	}
	@media(max-width: 750px){
		.lessMargin{
		margin-left: 5%;
		}
	}

	.bigFont{
		font-size: 1.25rem !important;
	}
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
