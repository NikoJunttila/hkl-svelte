<script>


</script>
<style>
  .grid-container{
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  grid-gap: 0.3rem;
}
.card {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.8);
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  border-radius: 17px;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  object-fit: cover;
  height: 25vh; 
  padding: 0.5rem;
  text-align: center;
  border-radius:10px;
  overflow:hidden;
}
img{
    max-height: 70%;
    object-fit: contain;
}
.card:hover {
  border: 1px solid black;
  transform: scale(1.03);
}

.card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
h3{
    margin: 5px 0;
    font-size: 1.3rem;
}
a{
    text-decoration: none !important; 
    color: inherit !important;

}
</style>
<svelte:head>
	<title>Kauppa</title>
</svelte:head>
<ol class="breadcrumb ml-5 mt-1">
	<li class="crumb">Kauppa</li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
</ol>
<section class="grid-container pt-[5vh] pb-[25vh] px-2">
    <a href="kauppa/Hoidot Kaltsilassa">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light card">
    <h3>Hoidot sastamalassa</h3>
    <img src="https://cdn.holvi.com/media/poolimage.image/2023/03/13/4bad4841c881c25c171935d88628618e6d365192.jpg" alt="hoidotkaltsila">
</div>
</a>
<a href="kauppa/Etähoidot">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
        <h3>Etähoidot</h3>
        <img alt="etähoidot" src="https://i.imgur.com/a0wE3Ty.jpg" >
    </div>
</a>
<a href="kauppa/Hoitavat äänitteet">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Hoitavat äänitteet</h3>
    <img alt="Hoitavat äänitteet" src="https://i.imgur.com/raI0aqs.jpg">
</div>
</a>
<a href="kauppa/Theta Healing® hoidot">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Theta Healing hoidot</h3>
    <img alt="kirjat" src="https://i.imgur.com/0x569G5.jpg">
</div>
</a>
<a href="kauppa/Nuotio ja luontoretriitit">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Nuotio ja luontoretriitit</h3>
    <img alt="Parantajakoulutus" src="https://i.imgur.com/qcLfTrO.jpg">
</div>
</a>
<a href="kauppa/Gua sha hoidot">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Gua sha hoidot</h3>
    <img alt="Gua sha hoidot" src="https://i.imgur.com/s7qEwFo.jpg">
</div>
</a>
<a href="kauppa/Tilaisuudet">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Tilaisuudet</h3>
    <img alt="Tilaisuudet" src="https://i.imgur.com/Czctmae.jpg">
</div>
</a>
<a href="kauppa/Valmennukset ja kurssit">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Valmennukset ja kurssit</h3>
    <img alt="Valmennukset ja kurssit" src="https://i.imgur.com/nRyN6cf.jpg">
</div>
</a>
<a href="kauppa/Etäpalvelut">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
    <h3>Etäpalvelut</h3>
    <img alt="Etäpalvelut" src="https://i.imgur.com/ixbmkH4.jpg">
</div>
</a>
<!-- <a href="kauppa/retriitit">
<div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
   <h3>Nuotio - ja luontoretriitit</h3>
   <img  alt="Nuotio - ja luontoretriitit tuotekategoria" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80">
</div>
</a> -->
<a href="kauppa/Lahjakortit">
    <div class="bg-[var(--light-green)] dark:bg-[var(--dark-green)] hover:drop-shadow-dark dark:hover:drop-shadow-light  card">
        <h3>Lahjakortit</h3>
        <img alt="Alennukset / Tarjoukset"src="https://i.imgur.com/oClBNIy.jpg">
    </div>
    </a>
</section>