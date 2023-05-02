<script lang="ts">
    	export let data : any;

</script>

<div class="min-h-[70vh] flex items-center justify-center gap-3 flex-col">
{#if data.post.link_to}
<h2>Linkki tiedostoihin</h2>
{#each data.post.link_to as item }
    <a href={item}>{item}</a>
{/each}
{/if}
<h2>tuotteiden id:</h2>
{#each data.post.ordered_items as item }
    <a href="/kauppa/slug/{item}">{item}</a>
{/each}
<h2>tilaus id: {data.post.id}</h2>
<h2>hinta: {data.post.total}€</h2>
<h2>tilauksen status: {data.post.status}</h2>
ajanvaraus: <a href="https://holvi.com/shop/hyvinvointikeskusluxus/section/hoidot-kaltsilassa-etahoidot/">holvi.com/shop/hyvinvointikeskusluxus/section/hoidot-kaltsilassa-etahoidot/</a>

</div>