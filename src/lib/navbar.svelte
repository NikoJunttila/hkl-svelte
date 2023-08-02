<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<header class="bg-surface-100-800-token flex w-full justify-center items-center py-4 gap-2">
	<div class="mr-auto">
		<a href="/"><img src="/favicon.png" alt="icon" /></a>
	</div>
	<a class="btn btn-sm variant-ghost-surface" href="/" rel="noreferrer">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" /></svg
		>
	</a>
	<a class="btn btn-sm variant-ghost-surface" href="/kauppa" rel="noreferrer"> Kauppa </a>
	<a class="btn btn-sm variant-ghost-surface" href="/galleria"> Galleria </a>
	<a class="btn btn-sm variant-ghost-surface" href="/info/hoiva"> Hoiva </a>
	<div class="relative">
		<button class="btn btn-sm variant-ghost-surface showMoreBtn">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 16 16"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
				/></svg
			>
		</button>
		<ul
			class="absolute min-w-[19ch] text-center left-0 cursor-pointer translate-x-[-25px] p-2 rounded bg-surface-50-900-token"
		>
			<a href="/info/ajanvaraus"><li class="hover:bg-surface-200-700-token">Ajanvaraus</li></a>
			<a href="/info/susanna"><li class="hover:bg-surface-200-700-token">Susanna</li></a>
			<a href="/info/yhteystiedot"><li class="hover:bg-surface-200-700-token">Yhteystiedot</li></a>
			<a href="/info/tietosuoja"><li class="hover:bg-surface-200-700-token">Tietosuojaseloste</li></a>
		</ul>
	</div>
	<div class="ml-auto mr-2">
		<LightSwitch />
	</div>
</header>

<style>
	.showMoreBtn:hover + ul,
	.showMoreBtn:focus + ul {
		opacity: 1;
		transition: opacity 0.55s ease-in-out;
		visibility: visible;
	}

	.showMoreBtn:hover,
	.showMoreBtn:focus {
		outline: 1px solid var(--dark-green);
	}
	ul {
		width: 100px;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.6s ease, visibility 0.6s ease;
	}
	ul:hover {
		opacity: 1;
		visibility: visible;
	}
	li {
		padding: 3px 0;
	}
	@media (max-width: 500px) {
		ul {
			transform: translateX(-80px);
		}
	}
	a {
		text-decoration: none !important;
		color: inherit !important;
	}
	a:hover{
		opacity: 0.9;
	}
</style>
