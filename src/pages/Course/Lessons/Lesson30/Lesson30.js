import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson30 = () => (
  <div className={classes.root}>
    <h1> PROBLEM PREKLAPANJA OČITAVANJA (eng. de novo shotgun assembly problem)</h1>
    <p className={classes.indent1x}>
      Da bi se sekvecionirali duži delovi DNK, u okviru Projekta ljudskog genoma razvijen je nov
      pristup nazvan „shotgun sekvencioniranje“ (sekvencioniranje sačmarom). Nazvan je tako zbog
      analogije sa brzo raspršujućim obrascem ispaljivanja municije iz sačmare. U ovoj metodi
      genomska DNK mehanički se cepa na manje fragmente koji se mogu pojedinačno sekvencionirati.
      Oni se zatim sastavljaju pomoću kompjuterskih programa koji pronalaze gde se fragmenti
      preklapaju.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>Posmatrajmo primer u kome imamo sledeća očitavanja:</p>
    <img alt="" src="/assets/lesson30/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Rekonstrukciju očitavanja, tj. određivanje gde se ona preklapaju radi konstrukcije genoma,
      radićemo pomoću algoritama koje ćemo prikazati u ovom delu. Ali pre nego što to uradimo moramo
      definisati problem koji rešavamo:
    </p>
    <p className={classes.indent1x}>PROBLEM PREKLAPANJA OČITAVANJA</p>
    <p className={classes.indent2x}>ulaz: kolekcija niski Ocitavanja</p>
    <p className={classes.indent2x}>izlaz: niska Genom rekonstruisana na osnovu Ocitavanja</p>
    <p className={classes.indent1x}>
      Ovaj problem nije dobro definisan, jer nismo definisali način na koji koristimo očitavanja pri
      rekonstrukciji genoma. Stoga, pre nego što definišemo korektan problem, moramo definisati
      k-gram kompoziciju niske:
    </p>
    <img alt="" src="/assets/lesson30/pic0.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER. Naći 3-gram kompoziciju niske TAATGCCATGGGATGTT.</p>
    <img alt="" src="/assets/lesson30/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PROBLEM REKONSTRUKCIJE NISKE</p>
    <p className={classes.indent2x}>ulaz: kolekcija k-grama (niske dužine k) Ocitavanja</p>
    <p className={classes.indent2x}>
      izlaz: niska Genom za koju važi da je njena k-gram kompozicija ekvivalentna kolekciji
      Ocitavanja
    </p>
    <p className={classes.indent1x}>
      Sada imamo korektno definisan problem. Želimo da steknemo intucijiu, stoga ćemo prvo
      posmatrati najprirodniji način za njegovo rešavanje. Posmatrajmo prethodni primer i 3-grame
      koje smo dobili u njemu:
    </p>
    <img alt="" src="/assets/lesson30/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Kako pri sekvencioniranju genoma nećemo znati sam genom, nego samo očitavanja, poređajmo ih
      prema leksikografskom redosledu:
    </p>
    <img alt="" src="/assets/lesson30/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Želimo da na osnovu ovog niza očitavanja sastavimo genom za koga će važiti da je njegova
      3-gram kompozicija baš dati niz.
    </p>
    <p className={classes.indent2x}>NAIVNI PRISTUP</p>
    <img alt="" src="/assets/lesson30/pic5.svg" className={classes.indent2x} />

    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson30/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak2</p>
    <img alt="" src="/assets/lesson30/pic7.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak3</p>
    <img alt="" src="/assets/lesson30/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak4</p>
    <img alt="" src="/assets/lesson30/pic9.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak5</p>
    <img alt="" src="/assets/lesson30/pic10.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak6</p>
    <img alt="" src="/assets/lesson30/pic11.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Ovo nas dovodi do zaključka da nam je potreban drugačiji pristup datom problemu. Pristup koji
      ćemo prikazati u sledećem delu.
    </p>
  </div>
);

export default Lesson30;
