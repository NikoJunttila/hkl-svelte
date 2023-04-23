<script lang="ts">
    import CartItemStore from "../../../stores/store";


    $: cartItems = $CartItemStore

    $: total = cartItems.reduce((acc, item) => {
  return acc + item.hinta;
}, 0);


  
</script>
{#if cartItems.length === 0}
Lisää ensin tuotteita
{:else}
<div class="flex flex-wrap items-center gap-3 py-4 justify-center flex-col">
{#each cartItems as item }
<a href="/kauppa/{item.categoria}/{item.id}">
<div class="flex flex-col items-center justify-center">
    <span>{item.tuote} {item.hinta}€</span>
    <img height="50" width="60" src="{item.kuva}" alt="tuote">
</div>
</a> 
{/each}
<h2>yhteensä: {total}€</h2>
<button on:click={() => console.log("kassa")} class="dark:bg-[#0f0448] bg-blue-400 hover:dark:bg-[var(--dark-green)] hover:bg-[var(--light-green)] mt-3">Siirry maksamaan</button>
</div>
{/if}




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