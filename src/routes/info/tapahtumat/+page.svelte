<script lang="ts">

	export let data : any;
    
</script>
<div class="max-w-[50ch]">
{#if data.post}
{#each data.post as event}
<h2 class="py-5">{event.text}</h2>
{/each}
{:else}
<h3>Tällä hetkellä ei ole tulossa tapahtumia tarkasta uudestaan myöhemmin tai käy katsomassa
    löytyykö <a href="facebook.com/hyvinvointikeskusluxus/">facebook</a>/<a href="instagram.com/hyvinvointikeskusluxus/">instagram</a> sivuilta tulevia tapahtumia.
</h3>
{/if}
</div>