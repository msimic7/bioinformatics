import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson224 = () => (
  <div className={classes.root}>
    <h1>GLOBALNO I LOKALNO PORAVNANJE</h1>
    <p className={classes.indent1x}>
      Radili smo algoritme dinamičkog programiranja za nalaženje edit rastojanja između dve niske,
      kao i nalaženje pozicije približnog podudaranja jedne niske sa drugom. U ovom delu ćemo
      posmatrati varijacije toga i rešavati probleme zvane lokalno i globalno poravnanje. Ova su dva
      česta problema sa kojima se susrećemo u biosekvencijalnim analitičkim alatima i oba su bitna
      za problem poravnanja očitavanja.
    </p>
    <h2> GLOBALNO PORAVNANJE</h2>
    <p className={classes.indent1x}>
      Vrednosti koje smo dodeljivali razlikama (substitucije, umetanja i birsanja) možemo posmatrati
      kao kazne, jer što je veća vrednost, to je manja šansa da uzmemo baš tu razliku za dobijanje
      jedne niske od druge jer tražimo najmanje rastojanje među njima. Pri računanju edit
      rastojanja, svim razlikama (substitucije, umetanje i birsanje) smo dodeljivali istu vrednost
      (kaznu), odnosno 1. Tačnije, nismo pravili razliku ako dolazi do substitucije između dve baze
      i ako dolazi do umetanja/brisanja određene baze.{' '}
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      U praksi tako nešto nije realno jer se mogu desiti sledeće situacije:
    </p>
    <p className={classes.indent1x}>
      1. Substitucije određenih baza se češće pojavljuju od drugih substitucija, samim tim bi imalo
      smisla da njima dodeljujemo manju kaznu nego drugim substitucijama;
    </p>
    <p className={classes.indent1x}>
      2. Umetanja/brisanja su mnogo ređa nego substitucije, tako da ćemo njima dodeljivati veće
      vrednosti, odnosno veću kaznu nego subtitucijama.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      <b>1.</b>
    </p>
    <p className={classes.indent2x}>
      Sve moguće DNK substitucije možemo podeliti u dve kategorije:
    </p>
    <p className={classes.indent2x}>- tranzicije</p>
    <p className={classes.indent2x}>- transverzije</p>
    <p className={classes.indent2x}>
      Tranzicija predstavljaju substituciju koja menja jednu purinsku bazu (A ili G) u drugu
      purinsku bazu, dok transverzija predstavljaju sve ostale substitiucije. Kako što možemo videti
      sa slike koja se nalazi ispod, imamo 4 puta više transverzija nego tranzicija. Međutim, u
      praksi se ispostavlja drugačije. Ako uporedimo genome dva čoveka, koja nisu u srodstvu,
      dobićemo da se tranzicije duplo više pojavljaju nego transverzije. Samim tim, kazna za
      tranzicije će biti manja nego kazna za transverzije kako bismo pri traženju minimuma pre
      izabrali njih jer su one češće.
    </p>
    <img alt="" src="/assets/lesson224/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      <b>2.</b>
    </p>
    <p className={classes.indent2x}>
      Ako posmatramo genome dva čoveka koji nisu u srodstvu i upoređujemo vreovatnoće da se desila
      substitucija i umetanje/brisanje karaktera dobijamo sledeće podatke:
    </p>
    <img alt="" src="/assets/lesson224/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Kao što možemo videti prema navedenim podacima, praznine su ređa pojava od substitucija .
      Samim tim, njima ćemo dodeljivati veću kaznu kako bismo ih imali manje jer pri traženju edit
      rastojanja između šablona i teksta uzimamo ono koje je minimalno.
    </p>
    <p className={classes.indent1x}>
      Želimo da edit rastojanje između teksta i šablona prilagodima realnim uslovima, odnosno da
      razlikama (substitucije i praznine) dajemo kaznu na osnovu njihove učestalosti. Na primer,
      možemo napraviti ovakvu matricu kazni:
    </p>
    <img alt="" src="/assets/lesson224/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Matrica kazni može biti i drugačija, ono što je bitno jeste da ako radimo sa ljudskim genomom
      poštujemo dva pravila o učestalosti pojavljivanja razlika koja smo prethodno naveli. Na osnovu
      matrice p, formula za edit rastojanje (distancu), koju sad zovemo globalno poravnanje, se
      menja na sledeći način:
    </p>
    <img alt="" src="/assets/lesson224/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Na sličan način kao što smo to radili u pethodnom delu popunjavamo matricu E, samo sada to
      radimo uz pomoć matrice kazni, odnosno uz pomoć globalnog poravnanja:
    </p>
    <img alt="" src="/assets/lesson224/pic5.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Putanja povratka, koju dobijamo na isti način kao što smo to prikazali u prethodnom delu:
    </p>
    <img alt="" src="/assets/lesson224/pic6.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Globalno poravnanje je jako korisno, u smislu da dozvoljava korisniku da postavlja različite
      kazne u skladu sa biološkim problemom koji posmatra.
    </p>
    <p className={classes.indent1x}>
      <b> Implementacija globalnog poravnanja</b>
    </p>

    <h2> LOKALNO PORAVNANJE</h2>

    <p className={classes.indent1x}>
      Lokalno poravnanje predstavlja nalaženje najsličnijih parova podniski za dve niske X i Y:
    </p>
    <img alt="" src="/assets/lesson224/pic7.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson224/pic8.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Iako ovaj problem deluje mnogo komplikovanije od prethodnog, rešavamo ga korišćenjem sličnog
      metoda kao i za globalno poravnanje, samo što ovog puta nemamo matricu kazni, već matricu
      skorova s:
    </p>
    <img alt="" src="/assets/lesson224/pic9.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>U skladu sa tim, rastojanje za lokalno poravnanje će biti:</p>
    <img alt="" src="/assets/lesson224/pic10.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson224/pic11.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>Najsličniji podniske ove dve niske ćemo naći tako što:</p>
    <p className={classes.indent3x}>* Nađemo najveći element u celoj matrici:</p>
    <img alt="" src="/assets/lesson224/pic12.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      * Zatim odredimo putanju povratka, na isti način kao što smo to već radili, ali uz jednu
      izmenu: kada naiđemo na prvu nulu, treba stati jer će ona predstavljati početak približnog
      podudaranja.
    </p>
    <img alt="" src="/assets/lesson224/pic13.svg" className={classes.indent4x} />
    <p className={classes.indent4x}>
      Na osnovu ove putanje dobijamo da su najsličnije podniske od X i Y:
    </p>
    <img alt="" src="/assets/lesson224/pic14.svg" className={classes.indent5x} />
  </div>
);

export default Lesson224;
