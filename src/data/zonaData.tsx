import zonaMap from '../assets/map/zona-zilina.webp';

export const zonaData = {
  title: 'zØna',
  hightText: 'služby a spolupráca',
  servicesData: [
    {
      serviceHight: 'online koučing',
      servicesCategory: [
        {
          categoryTitle: 'súťažný koučing',
          list: [
            'komplexné vedenie klienta počas celej prípravy',
            'úvodná konzultácia, komplexná diagnostika (osobné stretnutie)',
            'vyplnenie dotazníka',
            'spolupráca fyzio-tréner (v prípade potreby)',
            'podľa toho vypracovaný detailný plán prispôsobený podľa cieľa',
            'pravidelné vypracovanie tréningového plánu + osobná konzultácia v rámci tréningového cyklu',
            'komplexné poradenstvo v oblasti výživy podľa cieľa a suplementácie',
            'pravidelńe týždenné reporty a poradentvo online formou',
            '1x osobný tréning',
            'v službe sú aj zahrnuté lekcie pózingu a moje know-how',
          ],
          price: '150EUR/mesiac',
          sale: 'Po 3 mesiacoch spolupráce ZĽAVA 20%',
        },
        {
          categoryTitle: 'lifestyle - tréning + výživa',
          list: [
            'komplexné vedenie klienta počas celej úvodná konzultácia, komplexná diagnostika (osobné stretnutie)',
            'vyplnenie dotazníka',
            'spolupráca fyzio-tréner v prípade potreby',
            'podľa toho vypracovaný detailný plán prispôsobený vášmu cieľu',
            'pravidelné vypracovanie tréningového plánu ( do fitka/ na doma) + osobná konzultácia v rámci tréningového cyklu',
            'komplexné poradenstvo v oblasti výživy podľa cieľa a suplementácie',
            'informácie, ktoré využijete aj po skončení spolupráce',
            'pravidelné týždenne reporty, poradenstvo (online)',
            '1x osobný tréning za týždeň',
            'táto služba je vhodná min. pre mierne pokročilých',
            'minimála doba spolupráce sú 3 mesiace.',
          ],
          price: '120EUR/mesiac',
          sale: 'Po 3 mesiacoch spolupráce ZĽAVA 20%',
        },
      ],
    },
    {
      serviceHight: 'Osobný tréning',
      servicesCategory: [
        {
          categoryTitle: 'Dlhodobá spolupráca',
          list: [
            'vyplnenie dotazníka, anamnéza',
            'vstupná diagnostika (osobné stretnutie)',
            'počas tréningu sú klientovi vysvetlené všetky cviky, technika, prevedenie, správne dýchanie, príp. nejasnosti/otázky',
            'čas a deň tréningov: podľa dohody a možnosti klienta',
            'trvanie : cca 60 min. (v závislosti od skladby plánu)',
            'min. doba spolupráce je 1 mesiac',
          ],
          price: '10x osobný tréning : CENA 180EUR / 2x týždenne',
          sale: '15x osobný tréning : CENA 250EUR / 3x týždenne',
          alertInfo:
            'Za vopred neohlásený dôvod a časté rušenie termínov, hradí klient dohodnutú hodinu v plnej výške',
          alertInfoSecond:
            'V neovplyvniteľných situáciách (choroba), je samozrejme možný náhradný termín.',
        },
      ],
    },
  ],
  location: [
    {
      title: 'Žilina',
      link: 'https://maps.app.goo.gl/83c9UMwF7PGQJkVP7',
      img: zonaMap,
    },
  ],
};
