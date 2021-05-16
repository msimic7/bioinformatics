import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson30 = () => (
  <div className={classes.root}>
    <h1> PROBLEM PREKLAPANJA OČITAVANJA (eng. de novo shotgun assembly problem)</h1>
    <p className={classes.ml8}>
      Da bi se sekvecionirali duži delovi DNK, u okviru Projekta ljudskog genoma razvijen je nov
      pristup nazvan „shotgun sekvencioniranje“ (sekvencioniranje sačmarom). Nazvan je tako zbog
      analogije sa brzo raspršujućim obrascem ispaljivanja municije iz sačmare. U ovoj metodi
      genomska DNK mehanički se cepa na manje fragmente koji se mogu pojedinačno sekvencionirati.
      Oni se zatim sastavljaju pomoću kompjuterskih programa koji pronalaze gde se fragmenti
      preklapaju.
    </p>
    <p className={classes.ml8}>Posmatrajmo primer u kome imamo sledeća očitavanja:</p>
    <Image src="/assets/lesson30/pic1.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Rekonstrukciju očitavanja, tj. određivanje gde se ona preklapaju radi konstrukcije genoma,
      radićemo pomoću algoritama koje ćemo prikazati u ovom delu. Ali pre nego što to uradimo moramo
      definisati problem koji rešavamo:
    </p>
    <p className={classes.ml8}>PROBLEM PREKLAPANJA OČITAVANJA</p>
    <p className={classes.ml18}>ulaz: kolekcija niski Ocitavanja</p>
    <p className={classes.ml18}>izlaz: niska Genom rekonstruisana na osnovu Ocitavanja</p>
    <p className={classes.ml8}>
      Ovaj problem nije dobro definisan, jer nismo definisali način na koji koristimo očitavanja pri
      rekonstrukciji genoma. Pre nego što definišemo korektan problem, potrebno je definisati k-gram
      kompoziciju niske:
    </p>
    <p className={classes.ml18}>
      <span className={classes.red}>Definicija.</span> K-gram kompozicija niske s predstavlja sve
      k-grame te niske.
    </p>
    <p className={classes.ml8}>PRIMER. Naći 3-gram kompoziciju niske TAATGCCATGGGATGTT.</p>
    <Image src="/assets/lesson30/pic2.svg" className={classes.ml18} />
    <p className={classes.ml8}>PROBLEM REKONSTRUKCIJE NISKE</p>
    <p className={classes.ml18}>ulaz: kolekcija k-grama (niske dužine k) Ocitavanja</p>
    <p className={classes.ml18}>
      izlaz: niska Genom za koju važi da je njena k-gram kompozicija ekvivalentna kolekciji
      Ocitavanja
    </p>
    <p className={classes.ml8}>
      Sada imamo korektno definisan problem. Želimo da steknemo intuiciju. Samim tim, prvo ćemo
      posmatrati najprirodniji način za njegovo rešavanje. Posmatrajmo prethodni primer i 3-grame
      koje smo dobili u njemu:
    </p>
    <Image src="/assets/lesson30/pic3.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Kako pri sekvencioniranju genoma nećemo znati sam genom, nego samo očitavanja, poređajmo ih
      prema leksikografskom redosledu:
    </p>
    <Image src="/assets/lesson30/pic4.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Želimo da na osnovu ovog niza očitavanja sastavimo genom za koga će važiti da je njegova
      3-gram kompozicija baš dati niz.
    </p>
    <p className={classes.ml18}>NAIVNI PRISTUP</p>
    <Image src="/assets/lesson30/pic5.svg" className={classes.ml18} />
    <p className={classes.ml18}>korak1</p>
    <Image src="/assets/lesson30/pic6.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak2</p>
    <Image src="/assets/lesson30/pic7.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak3</p>
    <Image src="/assets/lesson30/pic8.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak4</p>
    <Image src="/assets/lesson30/pic9.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak5</p>
    <Image src="/assets/lesson30/pic10.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak6</p>
    <Image src="/assets/lesson30/pic11.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      Ovo nas dovodi do zaključka da nam je potreban drugačiji pristup datom problemu. Pristup koji
      ćemo prikazati u sledećem delu.
    </p>
  </div>
);

export default Lesson30;
