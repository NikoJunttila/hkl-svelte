import { writable } from 'svelte/store';

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

const CartItemStore : StoreItem[] = writable([
     
]);

export default CartItemStore