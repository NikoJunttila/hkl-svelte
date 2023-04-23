import { writable } from 'svelte/store';

const CartItemStore = writable([
        {
        categoria: "Hoidot Kaltsilassa",
        hinta: 65,
        tuote: "Rentouttava niskahieronta ja eheyttävä energiahoito 60 min.",
        kuva: "https://cdn.holvi.com/media/poolimage.image/2022/08/18/44fa693ca28665147c52d8a8a9717af2f0afa88c.jpg",
        kuvaus: "Ensin on 20 min. rentouttava kevyt niskan alueen hieronta sekä pään alueen hieronta eteerisellä öljyllä ja lopuksi 30 min. eheyttävä, hoitava ja tasapainottava energiahoito. Hoidon jälkeen varataan vielä 10 minuutin lepoaika / loppurentoutus. Hoitopakettiin kuuluu myös mukaan pieni erä hoidossa käytettävää öljyä. Tervetuloa rentouttavaan hoitoon vapauttamaan kehostressiä.",
        määrä: 999,
        url: "https://holvi.com/shop/hyvinvointikeskusluxus/product/43ee63311c018bee29746eea229b8bd0/",
        createdAt: "2023-01-24T11:11:46.739Z",
        updatedAt: "2023-01-24T11:11:46.739Z",
        id: "63cfbcf2e64ee43a326fc4e3"
        },
        {
        categoria: "Hoidot Kaltsilassa",
        hinta: 60,
        tuote: "Energiahieronta 60 min.",
        kuva: "https://cdn.holvi.com/media/poolimage.image/2022/08/31/094d760e77d3ed84847c0b4862058b11a492ed80.jpg",
        kuvaus: "Energiahieronta hoito tehdään hoitopöydällä vaatteiden päältä molemmin puolin kehon lihaksia sekä energiaratoja painelu - ja hierontaotteilla avaten. Energiahieronnassa vapautetaan kehomuistiin jääneet fyysistä kehoa kuormittavat henkiset traumat, negatiiviset uskomukset, ja tunnelukot.  Energiahieronta hoito sisältää: Kehon energiatilan katselmuksen * Traumojen, negatiivisten uskomusten ja tunnelukkojen vapautukset ja niiden vapauttaminen fyysiseltä keholta. Positiiviset lataukset, opetukset ja uudelleenohjelmointi alitajunnan kautta kehon toiminnoille * Pään ja niskan alueen 'stressipesu' Eneriahieronta otteet: Hieronta, paineluotteet ja energiahoito, alitajunnan ja kehon energian uudellleenohjelmointi.",
        määrä: 999,
        url: "https://holvi.com/shop/hyvinvointikeskusluxus/product/e6b21cee97cc819b0e07b9586bb2291e/",
        createdAt: "2023-01-24T11:13:36.589Z",
        updatedAt: "2023-01-24T11:13:36.589Z",
        id: "63cfbd60e64ee43a326fc4e5"
        }
]);

export default CartItemStore