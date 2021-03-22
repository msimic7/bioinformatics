import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson216 = () => (
  <div className={classes.root}>
    <h1> INDEKSI GENOMA KOJI SE KORISTE U PRAKSI </h1>
    <p className={classes.indent1x}>
      Indeks genoma treba da bude što manji kako bi mogao da stane u memoriju, ali i kako bi mogao
      brzo da se pretraži. U ovom delu ćemo prikazati one indekse genoma koji se koriste u praksi i
      koji pokušavaju da zadovolje prethodne uslove.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Prvi indeks koji posmatramo je jako sličan indeksu koji je građen od podniski. Imamo genom
      (tekst T) i posmatramo sve njegove sufikse:
    </p>
    <img alt="" src="/assets/lesson216/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Želeli bismo da sačuvamo sve ove sufikse u određenoj strukturi podataka i da vršimo njihovu
      pretragu na sličan način kao što smo to radili sa podniskama. Jednostavna ideja je da ubacimo
      sve sufikse genoma u listu i sortiramo ih prema leksikografskom redosledu. Pokažimo to na
      primeru u kojem je genom sledeći tekst T:
    </p>
    <img alt="" src="/assets/lesson216/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>Ako je genom dužine n, tada će veličina naše liste biti:</p>
    <img alt="" src="/assets/lesson216/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Ovo predstavlja veliko zauzeće memorije. Na primer, za ljudski genom, koji ima i do 3
      milijarde karaktera, ova lista bi sadržala broj karaktera koji je približno jednak kvadratu od
      3 milijarde, što je ogromno zauzeće memorije.
    </p>
    <p className={classes.indent1x}>
      Jedno od rešenja ovog problema jeste da umesto sufiksa pamtimo njihove pozicije početka u
      genomu. Prikažimo to na prethodnom primeru:
    </p>
    <img alt="" src="/assets/lesson216/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Kako redosled ovih pozicija odgovara leksikografskom redosledu sufiksa, potrebno je da imamo
      sačuvan ceo genom kako bismo na osnovu pozicija mogli odrediti koji su sufiksi u pitanju.
      Stoga, pored skladištenja čitavog genoma, potrebno je i da skladištimo niz njegovih sufiksa.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Niz sufiksa je samo jedna primer iz familije sufiksnih indeksa. Još neki od primeri su:
    </p>
    <p className={classes.indent2x}>- Drvo sufiksa</p>
    <p className={classes.indent2x}>- FM indeks</p>
    <img alt="" src="/assets/lesson216/pic5.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Drvo sufiksa je kao niz sufiksa, organizuje sve sufikse genoma na određeni način. Međutim, za
      razliku od niza sufiksa, koji organizuje sufikse prema redosledu, drvo sufiksa ih organizuje
      grupisanjem.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      FM indeks je baziran na Burov-Vilerovoj transformaciji (eng. Burrows–Wheeler transform). Ova
      transformacija je prvobitno bila napravljena za kompresiju podataka, ali se koristi i za
      pravljenje FM indeksa, koji je jako kompaktan. Vise o Burov-Vilerovoj transformaciji mozete
      naci{' '}
      <a
        href="https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform"
        target="_blank"
        rel="noreferrer"
        className={classes.materialLink}
      >
        ovde
      </a>
      .
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ako bismo koristili ove indekse za čitav ljudski genom, zauzeća memorije na računaru strukture
      podataka koju koristimo za izgradnju tih indeksa bi bila sledeća:
    </p>
    <img alt="" src="/assets/lesson216/pic6.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Možemo zapaziti da veličina varira od strukture do strukture. Drvo sufiksa zauzima poprilično
      veliku memoriju na računaru. Ova procena koja je data ovde je prilično optimistična, zauzeće
      može biti i veće, u zavisnosti od toga kako je drvo sufiksa implementirano. Mada, čak i to
      zauzeće neće biti strašno jer će moći da stane, na primer, u memoriju nekog većeg servera. Niz
      sufiksa je dosta manji od njega, dok je FM indeks jako kompaktan baš zbog toga što se sastoji
      od Burov-Vilerove transformacije genoma i jednak je dužini genoma (iz prethodnog primera to bi
      bila prva i poslednja kolona). S obzirom na to da je zauzeće za FM indeks jako malo, on može
      stati u memoriju prosečnog računara. Stoga, FM indeks se često koristi i predstavlja osnovni
      deo za neke jako popularne alate za problem poravnanja očitavanja.
    </p>
  </div>
);

export default Lesson216;
