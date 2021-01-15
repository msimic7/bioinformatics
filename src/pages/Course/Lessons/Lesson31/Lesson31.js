import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson31 = () => (
  <div className={classes.root}>
    <h1> REKONSTRUKCIJA NISKE KAO HAMILTONOVA PUTANJA </h1>
    <p className={classes.indent1x}>Posmatrajmo primer iz prethodnog dela:</p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson31/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>Predstavimo svaki 3-gram kao čvor grafa:</p>
    <img alt="" src="/assets/lesson31/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Genom dobijamo na osnovu sledeće putanje koja prolazi kroz sve čvorove:
    </p>
    <img alt="" src="/assets/lesson31/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ono što nas zanima jeste da li možemo sastaviti dati genom samo pomoću njegove 3-gram
      kompozicije?
    </p>
    <p className={classes.indent3x}>
      Možemo. Sve što treba da uradimo jeste da povežemo svaka dva 3-grama k1 i k2 za koja važi da
      je sufiks dužine 2 od k1 jednak prefiksu dužine 2 od k2.
    </p>
    <p className={classes.indent3x}>
      Na primer, povezaćemo TAA sa AAT jer je sufiks2(TAA) = prefiks2(AAT) = AA.
    </p>
    <p className={classes.indent2x}>
      Dakle, kako bismo dobili genom, povežaćemo svaka dva ćvora koja se preklapaju za 2-gram:
    </p>
    <img alt="" src="/assets/lesson31/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Međutim, ovde ćemo imati još čvorova koji se preklapaju za 2-gram, tj. imaćemo još veza:
    </p>
    <img alt="" src="/assets/lesson31/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Da li još uvek možemo da nađemo genom pomoću ovog grafa?</p>
    <p className={classes.indent3x}>Možemo. To će biti ista putanja kao malo pre:</p>
    <img alt="" src="/assets/lesson31/pic6.svg" className={classes.indent4x} />

    <p className={classes.indent1x} />
    <p className={classes.indent1x} />
    <p className={classes.indent1x} />
    <img alt="" src="/assets/lesson31/pic7.svg" className={classes.indent2x} />
    <p className={classes.indent2x} />
    <img alt="" src="/assets/lesson31/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent3x} />

    <p className={classes.indent3x}>korak1</p>
    <img alt="" src="/assets/lesson31/pic9.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak2</p>
    <img alt="" src="/assets/lesson31/pic10.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak3</p>
    <img alt="" src="/assets/lesson31/pic11.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak4</p>
    <img alt="" src="/assets/lesson31/pic12.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak5</p>
    <img alt="" src="/assets/lesson31/pic13.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak6</p>
    <img alt="" src="/assets/lesson31/pic14.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak7</p>
    <img alt="" src="/assets/lesson31/pic15.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak8</p>
    <img alt="" src="/assets/lesson31/pic16.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak9</p>
    <img alt="" src="/assets/lesson31/pic17.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak10</p>
    <img alt="" src="/assets/lesson31/pic18.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak11</p>
    <img alt="" src="/assets/lesson31/pic19.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak12</p>
    <img alt="" src="/assets/lesson31/pic20.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak13</p>
    <img alt="" src="/assets/lesson31/pic21.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak14</p>
    <img alt="" src="/assets/lesson31/pic22.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak15</p>
    <img alt="" src="/assets/lesson31/pic23.svg" className={classes.indent4x} />

    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> <b>Hamiltonova putanja</b> grafa je putanja
      koja posećuje svaki čvor tog grafa tačno jednom.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Sada naš problem rekonstrukcije niske na osnovu njene kolekcije možemo definisati na sledeći
      način:
    </p>
    <p className={classes.indent1x}>PROBLEM HAMILTONOVE PUTANJE</p>
    <p className={classes.indent2x}>ulaz: graf Graf</p>
    <p className={classes.indent2x}>
      izlaz: niska Putanja koji posećuje svaki čvor grafa Graf tačno jednom
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <p className={classes.indent2x}>
      Da li postoji Hamiltonova putanja u sledećem usmerenom grafu?
    </p>
    <img alt="" src="/assets/lesson31/pic24.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Postoji, i ona je prikazana na sledećoj slici (žuti krug predstavlja početak putanje):
    </p>
    <img alt="" src="/assets/lesson31/pic25.svg" className={classes.indent4x} />
    <p className={classes.indent1x}>
      Ovo je zapravo ikozijska igra koju je 1857. izumeo Villiam Rovan <b>Hamilton</b>. Cilj igre je
      pronalazak Hamiltonovog puta po ivicama dodekaedra tako da se svaki vrh poseti jednom, a
      krajnja tačka je jednaka početnoj.
    </p>
    <img alt="" src="/assets/lesson31/pic26.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>Hamiltonova putanja se može naći i na neusmerenom grafu: </p>
    <img alt="" src="/assets/lesson31/pic27.svg" className={classes.indent2x} />
  </div>
);

export default Lesson31;
