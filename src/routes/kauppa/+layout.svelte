
<script lang="ts">
    import CartItemStore from "../../stores/store";
    export let data : any;

</script>
    <div class="w-screen fixed pointer-events-none  flex">

        <div class="relative ml-auto mr-6 py-2">
    <a class="pointer-events-auto" href="/kauppa/ostokset"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"/></svg>
    </a>
        <span class="absolute rounded-full top-0 px-1 bg-white text-black translate-x-2 right-0">{$CartItemStore.length}</span>
    </div>
    </div>
    {#if data.text.length > 2}
    <div class="text-center py-3 bg-primary-300 dark:bg-primary-900">
        {data.text}
    </div>
    {/if}
    <slot />
