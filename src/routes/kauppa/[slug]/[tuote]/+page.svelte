<script lang="ts">
	export let data : any;
    import CartItemStore from "../../../../stores/store";
	import {toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

	const t: ToastSettings = {
	message: 'Lisätty ostoskoriin',
	background: "variant-filled-success"
};


	function update(){
		toastStore.trigger(t);
		CartItemStore.update((currentData) => {
			return [data.post, ...currentData]
		})
	}


  



</script>
<style>
	  a{
      text-decoration: none !important; 
      color: inherit !important;
  }
  button {
 appearance: none;
 border: 0.125em solid #1A1A1A;
 border-radius: 0.9375em;
 box-sizing: border-box;
 cursor: pointer;
 display: inline-block;
 font-size: 16px;
 font-weight: 600;
 line-height: normal;
 min-height: 3.75em;
 min-width: 0;
 outline: none;
 padding: 1em 2.3em;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 will-change: transform;
}

button:disabled {
 pointer-events: none;
}

button:hover {
 box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

button:active {
 box-shadow: none;
 transform: translateY(0);
}

</style>
<svelte:head>
	<title>{data.post.tuote}</title>
	<meta name="description" content="{data.post.tuote}">
</svelte:head>
<ol class="breadcrumb ml-5 mt-1">
	<li class="crumb"><a href="/kauppa">Kauppa</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a href="/kauppa/{data.post.categoria}">{data.post.categoria}</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb">{data.post.tuote}</li>	
</ol>
<section class="flex my-4">
<div class="basis-full grid place-items-center">
<img class="max-w-[90%] rounded" src="{data.post.kuva}" alt="tuote-kuva">
</div>
<div class="basis-full text-center">
<h3>{data.post.tuote}</h3>
<h5 class="mt-2">Hinta:{data.post.hinta}€</h5>
{#if data.post.määrä < 10}
<h5 class="text-red-400">Jäljellä: {data.post.määrä}</h5>
{/if}
<p class="mt-2">{data.post.kuvaus}</p>
<button on:click={update} class="dark:bg-[#0f0448] bg-blue-400 hover:dark:bg-[var(--dark-green)] hover:bg-[var(--light-green)] mt-3">Lisää ostoskoriin</button>
</div>
</section>
