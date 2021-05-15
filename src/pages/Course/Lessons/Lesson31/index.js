import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson31 = () => (
  <div className={classes.root}>
    <h1> REKONSTRUKCIJA NISKE KAO HAMILTONOVA PUTANJA </h1>
    <p className={classes.ml8}>Posmatrajmo primer iz prethodnog dela:</p>
    <p className={classes.ml8}>PRIMER</p>
    <Image src="/assets/lesson31/pic1.svg" className={classes.ml18} />
    <p className={classes.ml18}>Predstavimo svaki 3-gram kao čvor grafa:</p>
    <Image src="/assets/lesson31/pic2.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Genom dobijamo na osnovu sledeće putanje koja prolazi kroz sve čvorove:
    </p>
    <Image src="/assets/lesson31/pic3.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Ono što nas zanima jeste da li možemo sastaviti dati genom samo pomoću njegove 3-gram
      kompozicije?
    </p>
    <p className={classes.ml28}>
      Možemo. Sve što treba da uradimo jeste da povežemo svaka dva 3-grama k1 i k2 za koja važi da
      je sufiks dužine 2 od k1 jednak prefiksu dužine 2 od k2.
    </p>
    <p className={classes.ml28}>
      Na primer, povezaćemo TAA sa AAT jer je sufiks2(TAA) = prefiks2(AAT) = AA.
    </p>
    <p className={classes.ml18}>
      Dakle, kako bismo dobili genom, povezaćemo svaka dva čvora koja se preklapaju za 2-gram:
    </p>
    <Image src="/assets/lesson31/pic4.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Međutim, ovde ćemo imati još čvorova koji se preklapaju za 2-gram, tj. imaćemo još veza (grana
      grafa):
    </p>
    <Image src="/assets/lesson31/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>Da li još uvek možemo da nađemo genom pomoću ovog grafa?</p>
    <p className={classes.ml28}>Možemo. To će biti ista putanja kao i malo pre:</p>
    <Image src="/assets/lesson31/pic6.svg" className={classes.ml38} />
    <p className={classes.ml8}>
      Primetimo da smo u ovom primeru malo varali. Postavili smo čvorove u redosledu koji odgovara
      njihovom redosledu u genomu. U realnosti, njihove pozicije, tj. njihov redosled, nije poznat.
      Stoga, ako reorganizujemo redosled čvorova, problem sastavljanja genoma, tj. pronalaska
      odgovarajuće putanje, je teži.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Na primer, neka su nam dati čvorovi poređani u leksikografskom redosledu:
    </p>
    <Image src="/assets/lesson31/pic7.svg" className={classes.ml18} />
    <p className={classes.ml18}>Povežimo sve one čvorove koji se preklapaju za 2-gram:</p>
    <Image src="/assets/lesson31/pic8.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Genom će biti konstruisan na osnovu putanje ovog grafa koja posećuje svaki čvor <b>tačno</b>{' '}
      jednom:
    </p>
    <p className={classes.ml28}>korak1</p>
    <p className={classes.ml38}>Krećemo od čvora TAA jer on nema nijednu ulaznu granu.</p>
    <Image src="/assets/lesson31/pic9.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak2</p>
    <Image src="/assets/lesson31/pic10.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak3</p>
    <Image src="/assets/lesson31/pic11.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak4</p>
    <Image src="/assets/lesson31/pic12.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak5</p>
    <Image src="/assets/lesson31/pic13.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak6</p>
    <Image src="/assets/lesson31/pic14.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak7</p>
    <Image src="/assets/lesson31/pic15.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak8</p>
    <Image src="/assets/lesson31/pic16.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak9</p>
    <Image src="/assets/lesson31/pic17.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak10</p>
    <Image src="/assets/lesson31/pic18.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak11</p>
    <Image src="/assets/lesson31/pic19.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak12</p>
    <Image src="/assets/lesson31/pic20.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak13</p>
    <Image src="/assets/lesson31/pic21.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak14</p>
    <Image src="/assets/lesson31/pic22.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak15</p>
    <Image src="/assets/lesson31/pic23.svg" className={classes.ml38} />
    <p className={classes.ml8}>
      <span className={classes.red}>Definicija.</span> <b>Hamiltonova putanja</b> grafa je putanja
      koja posećuje svaki čvor tog grafa tačno jednom.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Sada naš problem rekonstrukcije niske na osnovu njene kompozicije možemo definisati na sledeći
      način:
    </p>
    <p className={classes.ml8}>PROBLEM HAMILTONOVE PUTANJE</p>
    <p className={classes.ml18}>ulaz: graf Graf</p>
    <p className={classes.ml18}>
      izlaz: niska Putanja koji posećuje svaki čvor grafa Graf tačno jednom
    </p>
    <p className={classes.ml8}>PRIMER</p>
    <p className={classes.ml18}>Da li postoji Hamiltonova putanja u sledećem usmerenom grafu?</p>
    <Image src="/assets/lesson31/pic24.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Postoji, i ona je prikazana na sledećoj slici (žuti krug predstavlja početak putanje):
    </p>
    <Image src="/assets/lesson31/pic25.svg" className={classes.ml38} />
    <p className={classes.ml8}>
      Ovo je zapravo ikozijska igra koju je 1857. izumeo Villiam Rovan <b>Hamilton</b>. Cilj igre je
      pronalazak Hamiltonovog puta po ivicama dodekaedra tako da se svaki vrh poseti jednom, a
      krajnja tačka je jednaka početnoj.
    </p>
    <Image src="/assets/lesson31/pic26.svg" className={classes.ml18} />
    <p className={classes.ml8}>Hamiltonova putanja se može naći i na neusmerenom grafu: </p>
    <Image src="/assets/lesson31/pic27.svg" className={classes.ml18} />
  </div>
);

export default Lesson31;
