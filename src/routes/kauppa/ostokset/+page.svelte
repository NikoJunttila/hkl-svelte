<script lang="ts">
    import CartItemStore from "../../../stores/store";
    import {toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';


    

    $: cartItems = $CartItemStore

    $: total = cartItems.reduce((acc : any, item : any) => {
  return acc + item.hinta;
}, 0);

const t: ToastSettings = {
	message: 'Jokin meni pieleen. tarkasta annetut infot. Jos ei onnistu silti niin ota yhteyttä spostilla tai soita',
	background: "variant-filled-error",
  autohide: false
};

function buyItems(){
let randomNum = Math.floor(Math.random() * 9999999999 -1111111)
//fetch("http://localhost:3001/create-checkout-session",
      fetch("https://hkl.fly.dev/create-checkout-session",   {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      items: cartItems,
      name:name,
      address:address,
      email:email,
      total:total,
      phone:phoneNum,
      orderId:randomNum,
      extratext:extratext
    })
  }).then(res => {
    sessionStorage.setItem("link",JSON.stringify(randomNum))
    if(res.ok){
     return res.json()
    }
  toastStore.trigger(t);
    console.log("varmista tiedot")
    return res.json().then(json => Promise.reject(json))
  }).then(({url}) => {
  window.location = url
}).catch(e => {
  console.error(e.error)
})
}

let email :string= ""
let name : string = ""
let address : string = ""
let phoneNum : string = "";
let extratext : string = "";

$: isFormValid =  email !== '' && name !== '' && address !== '' && phoneNum !== '';


function removeItem(index : number){
		CartItemStore.update((cartItems) => {
      cartItems.splice(index,1)
			return cartItems
		})
	}

</script>
<div class="min-h-[70vh]">
  <ol class="breadcrumb ml-5 mt-1">
    <li class="crumb"><a href="/kauppa">Kauppa</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  </ol>
 {#if cartItems.length === 0}
<h2 class="text-center mt-4">Lisää ensin tuotteita</h2>
 {:else} 
<div class="flex flex-wrap items-center gap-3 py-4 justify-center flex-col">
{#each cartItems as item, index }
<div class="flex flex-col gap-2 items-center justify-center">
  <!-- <a href="/kauppa/{item.categoria}/{item.id}">
  </a>  -->
    <span>{item.tuote} {item.hinta}€</span>
    <img height="50" width="60" src="{item.kuva}" alt="tuote">
    <button on:click={() => removeItem(index)}>poista</button>
</div>
{/each}
<h2>yhteensä: {total}€</h2>
<form class="" >
<p>nimi:</p>
<input class="input variant-form-material"  bind:value={name} type="text" name="name" required> 
<p>sähköposti:</p>
<input class="input variant-form-material"  bind:value={email} type="text" name="email" required> 
<p>osoite:</p>
<input class="input variant-form-material"  bind:value={address} type="text" name="address" required> 
<p>puh numero:</p>
<input class="input variant-form-material"  bind:value={phoneNum} type="number" name="phone" required>
<p>lisätietoa:</p>
<textarea class="input variant-form-material" bind:value={extratext}></textarea>
<br>
<button type="button" disabled={!isFormValid} on:click={() => buyItems()} class="hover:dark:bg-[#0f0448]  mb-10 hover:bg-blue-400 dark:bg-[var(--dark-green)] bg-[var(--light-green)] mt-3">Siirry maksamaan</button>
</form>
</div>
 {/if} 
</div>




<style>
  button:disabled{
    background-color: rgb(170, 12, 12);
  }
  input:invalid {
    border: 1px solid rgb(170, 12, 12);
  }

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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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