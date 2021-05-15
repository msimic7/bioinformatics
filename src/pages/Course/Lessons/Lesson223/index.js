import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson223 = () => (
  <div className={classes.root}>
    <h1> NOVO REŠENJE ZA PROBLEM PRIBLIŽNOG PODUDARANJA </h1>
    <p className={classes.ml8}>
      Radili smo algoritam dinamičkog programiranja koji nam omogućava da nađemo edit rastojanje
      između dve niske. Sada ćemo videti njegovu primenu na problem traženja približnog podudaranja
      šablona P sa tekstom T.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Matrica za dve niske X i Y je u prethodnom delu izgledala na sledeći način:
    </p>
    <Image src="/assets/lesson223/pic1.svg" className={classes.ml18} />
    <p className={classes.ml8}>Sada ćemo, umesto niski X i Y, imati šablon P i tekst T:</p>
    <Image src="/assets/lesson223/pic2.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Ovde, za razliku od prethodnog, inicijalizujemo prvu vrstu na sve nule. To radimo jer ne znamo
      na početku na kojoj poziciji će se naš šablon pojaviti, stoga je svaka pozicija jednako
      verovatna, odnosno ne dajemo prednost ni jednoj poziciji u tekstu T. Prva kolona se
      inicijalizuje na isiti način kao što smo to i radili za niske X i Y:
    </p>
    <Image src="/assets/lesson223/pic3.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Posle inicijalizacije možemo popuniti datu matricu na isti način kao što smo to radili i za
      niske X i Y:
    </p>
    <Image src="/assets/lesson223/pic4.svg" className={classes.ml28} />
    <p className={classes.ml18}>Tražimo minimum u poslednjoj vrsti:</p>
    <Image src="/assets/lesson223/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Minimum, koji je ovde 2, predstavlja najbliže podudaranje šablona P sa tekstom T (između njih
      ima samo 2 razlike). Sada znamo edit rastojanje između šablona i teksta, ali ne znamo na kojoj
      poziciji se to približno podudaranje desilo. Prvo što treba da uradimo jeste da vidimo kako
      smo došli do polja gde nam se nalazi 2. To ćemo uraditi primenom inverznog postupka računanja
      edit rastojanja:
    </p>
    <p className={classes.ml18}>korak1</p>
    <Image src="/assets/lesson223/pic6.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak2</p>
    <Image src="/assets/lesson223/pic7.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak3</p>
    <Image src="/assets/lesson223/pic8.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak4</p>
    <Image src="/assets/lesson223/pic9.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak5</p>
    <Image src="/assets/lesson223/pic10.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak6</p>
    <Image src="/assets/lesson223/pic11.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak7</p>
    <Image src="/assets/lesson223/pic12.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak8</p>
    <Image src="/assets/lesson223/pic13.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak9</p>
    <Image src="/assets/lesson223/pic14.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Dobili smo da se približno podudaranje sa 2 razlike između šablona P i teksta T događa na
      poziciji 5 jer je to pozicija polja koje se nalazi u vrsti gde je početak šablona, a na koje
      smo prvo naišli u inverznom postupku.
    </p>
    <p className={classes.ml18}>
      Putanju koja se sastoji od narandžastih kvadrata zovemo <b>putanja povratka</b> i ona govori o
      promenama do kojih je došlo između šablona P i teksta T. Jedino vertikalno pomeranje (sva
      ostala su dijagonalna) nam označava da se desilo umetanje. Samim tim, osim što možemo odrediti
      poziciju gde se desilo približno podudaranje, možemo odrediti i koje su se to promene
      (razlike) desile između šablona i teksta.
    </p>
    <Image src="/assets/lesson223/pic15.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      Ovaj metod predstavlja <b>veliko memorijsko zauzeće</b> O(mn), gde je m dužina šablona, a n
      dužina teksta, a kao što smo videli tekst (genom) može biti dugačak i 3 milijarde (kod
      čoveka). Samim tim, ovo se ne može koristiti bez pomoćnih algoritama za rešavanje problema
      poravnanja očitavanja. Jedan od pomoćnih algoritama koji koristimo u kombinaciji sa dinamičkim
      programiranjem jeste indeksiranje. Na koji to način radimo videćemo u poslednjem delu koji je
      posvećen ovom problemu.
    </p>
  </div>
);

export default Lesson223;
