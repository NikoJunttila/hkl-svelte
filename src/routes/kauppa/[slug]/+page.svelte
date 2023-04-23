<script lang="ts">
	export let data : any;
    
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
    backdrop-filter: blur(6px);
    border-radius: 17px;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
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
  .card:hover {
    border: 1px solid black;
    transform: scale(1.05);
  }
  
  .card:active {
    transform: scale(0.95) rotateZ(1.7deg);
  }
  a{
      text-decoration: none !important; 
      color: inherit !important;
  }
  </style>
  <svelte:head>
	<title>{data.post[0].categoria}</title>
	<meta name="description" content="{data.post[0].categoria}">
</svelte:head>
<ol class="breadcrumb ml-5 mt-1">
	<li class="crumb"><a href="/kauppa">Kauppa</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb">{data.post[0].categoria}</li>	
</ol>
{#await data}
<p>...waiting</p>
{:then data}
<section class="grid-container pt-[5vh] pb-[25vh] px-2 ">
{#each data.post as post }
<a href="{post.categoria}/{post.id}">
<div class="card hover:drop-shadow-dark dark:hover:drop-shadow-light ">
    <p>{post.tuote}</p>
    <p>Hinta: {post.hinta}€</p>
    <img class="max-w-[100px] rounded" src="{post.kuva}" alt="tuotekuva">
</div>
</a>
{/each}
</section>
{/await} 

