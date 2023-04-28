<script lang="ts">
    import { onMount } from "svelte";

    const options = [
    "” Kun keskityn valoon, ystävällisyyteen, runsauteen ja rakkauteen, ne laajenee elämässäni”.",
    "” Vapautan menneisyyden katumukset ja tulevaisuuden huolet.”",
   " ” Kuulun positiivisten tunteiden taajuuteen. ”",
    "” Minulla on rohkeus ja luottamus mennä elämässäni eteenpäin.”",
   " ” Vapautan kaiken epävarmuuden ja pelon. Olen tietoinen omasta voimastani.”",
  "  ” Olen läsnä omassa elämässäni.”",
    "” Luotan parhaaseen lopputulokseen joka tilanteessa.”",
    "” Luotan omiin kykyihini ja elämän prosessiin. ”",
    "” Vapautan asioita, tunteita ja ajatuksia jotka eivät enää palvele minua.”",
    "” Sydämeni on rakkauden taajuudella.”",
   " ” Kehoni on hyvinvoinnin taajuudella.”",
"    ” Olen arvokas, riittävä ja hyvä juuri sellaisena kuin olen. Minä olen.”",
    "” Käytän viisauttani ja arvostelukykyäni ja teen valintoja ilman pelkoja ja huolta.",
    "” Tiedän miltä tuntuu kunnioittaa ja arvostaa itseäni. Arvostan ja kunnioitan itseäni.”",
    "” Tiedän kuinka rakastaa ilman menettämisen pelkoa.”",
  "  ” Annan anteeksi päästämällä irti kivusta ja kaunasta ja teen tilaa rakkaudelle.”",
    "” Ansaitsemallani rahalla voin tehdä hyviä asioita itselleni ja muille.”",
];
let quoteToShow : string

 onMount(() => {
	const randomIndex = Math.floor(Math.random() * options.length);
	quoteToShow = options[randomIndex];

}) 
</script>
<h3>{quoteToShow}</h3>
