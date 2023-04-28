<script lang="ts">
   import { onMount } from "svelte";

   let linkki : any;
   onMount(() => {

    localStorage.removeItem("tuotteet")
    linkki = sessionStorage.getItem("link")
		
	});

</script>



<div class="flex min-h-[60vh]  flex-col gap-3 text-center justify-center items-center">
    <h1 class="">Kiitos tilauksesta. Toimitan tuotteet/hoidot heti 😀😘 </h1>
    {#if linkki}
    <h2><a href="/order/{linkki}">Linkki tilauksen seuranta sivulle</a></h2>
    {/if}

</div>