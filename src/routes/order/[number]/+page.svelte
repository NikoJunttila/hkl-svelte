<script lang="ts">
    	export let data : any;

</script>

<div class="min-h-[70vh] flex items-center justify-center gap-3 flex-col">
{#if data.post.link_to.length >= 1}
<h2>Linkki tiedostoihin</h2>
{#each data.post.link_to as item }
    <a href={item}>{item}</a>
{/each}
{/if}
<h3>tuotteet:</h3>
{#each data.post.ordered_items as item }
    <a href="/kauppa/slug/{item}">{item}</a>
{/each}
<h3>tilaus id: {data.post.id}</h3>
<h3>hinta: {data.post.total}€</h3>
<h3>tilauksen status: {data.post.status}</h3>
ajanvaraus: <a href="https://booksalon.fi/hyvinvointikeskus-luxus ">booksalon.fi/hyvinvointikeskus-luxus </a>

</div>