<script lang>
	import Landing from '$lib/landing.svelte';
	import Contact from '$lib/contact.svelte';
	import viewport from '../stores/useViewportAction';
	import Quote from '$lib/quote.svelte';
	import {toastStore } from '@skeletonlabs/skeleton';
	let one = false;
	let two = false;
	let three = false;
	let four = false;
	let five = false;
	let six = false;

	const t = {
	message: 'Kiitos uutiskirjeen tilauksesta',
	background: "variant-filled-success",
  autohide: false
};

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
				: 'opacity-0'} max-w-[500px] rounded ml-[5%] gap-5 xl:ml-[10%] flex flex-col lg:flex-row items-center"
		>
			<div>
				
					<h2>Valoisasti tervetuloa omalle muutosmatkallesi</h2>
					<p class="bigFont">-  näkyväksi omalle itsellesi, löytämään oma vahvuutesi sekä avaamaan korkein tietoisuustaajuutesi jolloin myös  fyysinen hyvinvointisi voi alkaa kukoistaa.
</p>
				
			</div>
			<div>
				<img
					class="drop-shadow-light dark:drop-shadow-dark min-w-[250px] min-h-[250px] rounded ml-2"
					src="https://i.imgur.com/9TTYcth.jpeg"
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
			class="{two ? 'fade-in' : 'opacity-0'} w-[400px] rounded lessMargin flex gap-6 flex-col"
		>
		<div>
			<img
				class="mt-3 drop-shadow-light dark:drop-shadow-dark max-w-[300px] max-h-[250px] rounded"
				src="https://i.imgur.com/851DS8t.jpeg"
				alt="senjankuva"
			/>
		</div>
			<div>
				Hyvinvointikeskus Luxusen hoidot ja valmennukset ovat syntyneet vankalla kokemuksella ja ammattitaidolla yli kahdenkymmenen vuoden ajalta.

				Hoidot sisältävät vahvaa hoitavaa valoa ja energiataajuutta joka on yksi  muutoksen työvälineistä.
				
				Palveluista löytyy seuraavat etäohjelmat:
				<br>
				🟣 Muutoksen matka valmennusohjelma joka on 3 kk rakkausmatka itseesi.
				<br>
				🟣 Syvällisellä Theta Healing matkalla työstetään ydinsyitä alitajunnan taajuudella jolloin henkinen ja fyysinen tila pääsee paremmin eheytymään.
				<br>
				🟣 Pääset Valosiivet ohjelmalla lempeästi kokemaan enkeleiden luomat vahvat energiahoidot ja viestit. 
				<br>
				🟣 Navigointi ohjelma on hienovärähteistä energiahoitoa joka avaa sinua ja näyttää sinulle eteenpäin menemisen reitit.
				<br>
				🟣 Tiennäyttäjä ohjelma avaa elämän ilon ja vapauttaa pelkoja silloin kun jokin sairaus on tullut opettamaan asioita.
				<img
				class="mt-3 drop-shadow-light dark:drop-shadow-dark max-w-[300px] max-h-[250px] rounded"
				src="https://i.imgur.com/iD3SVYo.jpeg"
				alt="idk"
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
			Pääset omille muutoksen matkoille kolmella tavalla:
			<br>
			1. Varaa ilmainen kartoitusaika jossa katsotaan mikä palvelu olisi sinulle sopivin.
			<br>
			2. Osta palvelu suoraan kaupasta jolloin pääset sen jälkeen varaamaan ajan hoitoon. 
			<br>
			3. Kun 3 kk Muutoksen matka valmennusohjelma kutsuu sinua, varaa ensin siihen oma tutustumisaika täältä.
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
		 	<div>
				🟣 KAUPASTA:
				löytyy lisäksi minivalmennuksia sekä kuunneltavia äänitteitä.
				
				Ja lisäksi kaikille jotka haluavat avata oven maailmankaikkeuden ihmeille, niin
				on nyt myös tarjolla Metsätonttu Alfredin tarinoiden matkat jotka ohjaavat sinut luonnon lempeään maailmaan. Alfredin tarinoihin pääset kaupan kautta jonne tulee aina uusi tarina sitä mukaan kun energiamatkoja syntyy. 
			</div>
			<div> 
				<img
					loading="lazy"
					class="mt-3 drop-shadow-light dark:drop-shadow-dark rounded"
					src="https://i.imgur.com/PLnX1Ch.jpeg"
					alt="susanna2"
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
					src="https://i.imgur.com/tUuUTbr.jpg"
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
<div class="flex justify-center items-center ">
	<form id="tilaus" class="w-64 sm:w-[600px] p-4 flex justify-center items-center flex-col gap-3 bg-primary-50-900-token rounded-md py-10" target="_blank" method="post" action="https://archive.cardu.com/mailinglist/d2951a3fb48b486d576ac1a9fab11d0b73aac32f">
	<p class="bigFont">Haluatko oppia rakastamaan itseäsi? </p>
      <p>
* Saat maksuttoman minivalmennuksen, jolla vapautat tärkeitä esteitä itsesi rakastamisen tieltä ja lisäksi saat minivalmennuksen mukana 'Rakkauden lataus" äänitteen - kun liityt Luxusen valokirjeen lukijaksi.
<br>
* Luxusen valokirjeen lukijat saavat sähköpostiinsa eheyttävää, hoitavaa ja positiivista sisältöä sekä harjoituksia itsensä rakastamiseen ja tasapainoa aktivoinneilla.
<br><br>
<span class="bigFont">Kyllä haluan liittyä Luxusen valokirjeen lukijaksi ja saada maksuttoman minivalmennuksen!</span>
<br><br>
      </p>
	<span class="flex">Email:<input class="ml-2 input variant-form-material" type="text" name="email" placeholder="Sähköposti" value=""></span>	
		<button on:click={() => toastStore.trigger(t)} class="btn  bg-secondary-50-900-token" type="submit" value="Liity" >Tilaa</button>
* Antamalla yhteystietosi hyväksyt samalla, että sinulle voidaan jatkossa lähettää sähköpostia. Voit poistua listalta koska tahansa. 
	</form>
</div>
<div class="max-w-[500px] mx-auto py-5">
	Lääketieteellinen vastuuvapaus lauseke:
<br>
Tällä sivustolla annettuja tietoja tai yrityksen palveluita ei ole tarkoitettu diagnosoimaan, hoitamaan tai parantamaan ketään. Sivun tiedot ja palvelut eivät korvaa terveydenhuollon ammattilaisen kanssa tapahtuvaa vastaanottoa tai konsultaatiota, eikä niitä pidä tulkita lääketieteellisenä neuvona. Nämä sivut ja Hyvinvointikeskus Luxusen palvelut on tarkoitettu lisäämään Sinulle tietoisuutta ja ymmärrystä henkisestä ja fyysisestä hyvinvoinnista, tasapainosta ja eheytymisestä ja siten tukemaan Sinua muutoksesi ja hyvinvointisi matkalla. Jos Sinulla on jokin henkistä tai fyysistä terveyttä uhkaava asia jossa tarvitset terveydenhuollon neuvoja käänny heidän puoleen. Hyvinvointikeskus Luxus ei ole vastuussa näiden palveluiden ja hoitojen mahdollisista haittavaikutuksista terveydellesi. 
</div>
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
