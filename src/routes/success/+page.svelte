<script lang="ts">
   import { onMount } from "svelte";

   let linkki : any;
   onMount(() => {
    localStorage.removeItem("tuotteet")
    linkki = sessionStorage.getItem("link")
	});

</script>

<div class="flex min-h-[60vh]  flex-col gap-3 text-center justify-center items-center">
    <h1 class="">Kiitos tilauksesta. Varaa hoitoaika linkistä </h1>
    ajanvaraus: <a href="https://booksalon.fi/hyvinvointikeskus-luxus ">booksalon.fi/hyvinvointikeskus-luxus </a>
    {#if linkki}
    <h2><a href="/order/{linkki}">Linkki tilauksen seuranta sivulle</a></h2>
    {/if}

</div>