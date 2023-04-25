import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type StoreItem = {
        categoria:string;
        hinta: number;
        tuote: string;
        kuva: string;
        kuvaus: string;
        määrä: number;
        url: string;
        createdAt: string;
        updatedAt: string;
        id: string;
}

export const CartItemStore : Writable<StoreItem[]> = writable([]);

export default CartItemStore