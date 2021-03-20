import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson20 = () => (
  <div className={classes.root}>
    <h1>ZAŠTO JE PROBLEM PORAVNANJA OČITAVANJA TEŽAK?</h1>
    <p className={classes.indent1x}>
      Imamo dobijena sekvenciona očitavanja, koja su nam kao delovi novina koji su ostali sačuvani
      nakon eksplozije, i želeli bismo da ih sastavimo uz pomoć referentog genoma, koji nam je kao
      kopija tih novina. Kako bismo to uradili, koristićemo činjenicu da različite jedinke iste
      vrste, kao na primer dva čoveka koja nisu u srodstvu, imaju jako slične genome.
    </p>
    <p className={classes.indent1x}>
      Neka su nam data očitavanja i ljudski referentni genom (ovde smo prikazali oko 1000 nukleotida
      tog genoma). Posmatrajmo jedno očitavanje:
    </p>

    <img alt="" src="/assets/lesson20/pic1.svg" className={classes.indent2x} />

    <p className={classes.indent1x}>
      Tražimo sekvencu u referentnom genomu koja se najviše poklapa sa datim očitavanjem i to je
      njegova pozicija u genomu. Kako to ponavljamo za svako očitavanje, a očitavanja ima oko milion
      (ili čak i milijardu), to bi značilo da bismo ovaj proces ponavljali milion puta. Odnosno
      milion puta bismo tražili najbolje poklapanje svakog očitavanja sa referentim genomom koji je
      oko milion puta duži od dela koji nam je ovde prikazan (ljudski genom je dugačak oko 3
      milijarde nukleotida). Da bismo bolje prikazali koliko je ljudski genom zapravo dugačak,
      pogledajmo sledeću sliku:
    </p>
    <img alt="" src="/assets/lesson20/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Stoga, pretraga sekvence u referentom genomu koja se skoro poklapa sa našim očitavanjem je kao
      traženje igle u plastu sena. Osim što u našem slučaju imamo milion igli koje tražimo u jako
      velikom plastu sena. Dobra strana jeste to što očitavanja i referentni genom možemo
      predstaviti kao niske, a za rad sa njima imamo veliki broj algoritama koji nam mogu pomoći pri
      efikasnom rešavanju ovog problema.
    </p>
  </div>
);

export default Lesson20;
