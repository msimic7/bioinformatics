import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson23 = () => (
  <div className={classes.root}>
    <h1> PROBLEM PORAVNANJA OČITAVANJA U PRAKSI</h1>
    <p className={classes.ml8}>
      Ideja, koja se krije iza alata koje koristimo u praksi za problem poravnanja očitavanja, jeste
      kombinacija prethodno rađenih metoda i algoritama. Jedna od najčešće korišćenih kombinacija
      jeste kombinacija indeksiranja i dinamičkog programiranja.
    </p>
    <h2 className={classes.ml8}> KOMBINACIJA INDEKSIRANJA I DINAMIČKOG PROGRAMIRANJA </h2>
    <p className={classes.ml8}>
      Pomoću indeksa određujemo <b>potencijalne</b> pozicije na kojima se dešava približno
      podudaranje očitavanja sa genomom:
    </p>
    <Image src="/assets/lesson23/pic1.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Odnosno, indeks nam pomaže pri pronalasku pozicija u genomu na kojima se dešava podudaranje sa
      podniskom/podsekvencom očitavanja. Na ovaj način značajno smanjujemo oblast pretraživanja
      očitavanja u genomu jer umesto pretrage svih pozicija tog genoma, mi proveravmo samo
      potencijalne pozicije koje smo dobili indeksiranjem. Međutim, indeksiranje nije dobro u radu
      sa razlikama koje mogu nastati između očitavanja i genoma, pa za verifikaciju tih pozicija
      koristimo dinamičko programiranje:
    </p>
    <Image src="/assets/lesson23/pic2.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Odnosno formiramo matrice na isti način kao što smo to pokazali u prethodnim delovima, i na
      osnovu njih određujemo koje će pozicije rezultirati približnim podudaranjem očitavanja sa
      genomom. Dinamičko programiranje je odlično rešenje za korak verifikacije baš zbog toga što
      dobro radi sa razlikama (substitucijama i prazninama), kao i zbog mogućnosti da sami zadajemo
      kazne na osnovu specifičnog biološkog problema koji je pred nama.
    </p>
    <p className={classes.ml8}>
      Obe ove ideje odlično rade u kombinaciji jer svaka od njih pokriva nedostatke one druge. Sa
      jedne strane, indeks je veoma brz i dobar u sužavanju prostora pretrage, dok ne radi dobro sa
      nepodudaranjima, odnosno substitucijama i prazninama. Sa druge strane, dinamičko programiranje
      prirodno i lako rešava problem substitucija i praznina. Međutim, ako bi radili samo dinamičko
      programiranje, bez indeksiranja, zauzeće matrice u memoriji bi bilo veliko, stoga bi taj
      algoritam bio vrlo spor.
    </p>
  </div>
);

export default Lesson23;
