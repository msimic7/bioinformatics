import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson35 = () => (
  <div className={classes.root}>
    <h1>PAROVI OČITAVANJA</h1>
    <p className={classes.indent1x}>
      U prethodnim delovima, videli smo kako na osnovu očitavanja konstruišemo De Brujinov graf:
    </p>
    <img alt="" src="/assets/lesson35/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Kao i to da genom dobijamo na osnovu Ojlerove putanje De Brujinovog grafa:
    </p>
    <img alt="" src="/assets/lesson35/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Ono što smo izostavili jeste da dati graf može imati više od jedne Ojlerove putanje. U datom
      primeru postoji još jedna Ojlerova putanja (kada prvi put dođemo do čvora TG, ići ćemo ka GG
      čvoru, a ne ka GC, kao što smo to radili pri kreiranju prve Ojlerove putanje). Na osnovu nje
      dobijamo sledeći genom:
    </p>
    <img alt="" src="/assets/lesson35/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Kao što možemo videti, dve različite Ojlerove putanje će dati dva različita genoma. Sve te
      putanje dele isti skup podgrafova koji se ne granaju (svi njihovi čvorovi imaju najviše jednu
      ulaznu i jednu izlaznu granu):
    </p>
    <img alt="" src="/assets/lesson35/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Svakom podgrafu odgovara podniska koja se nalazi na nekoj poziciji u genomu:
    </p>
    <img alt="" src="/assets/lesson35/pic5.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Idealna situacija bi bila kada bismo imali samo jednu takvu podnisku (koja bi zapravo
      predstavljala ceo genom). Kako nije uvek moguće da nemamo grananja u grafu, ono što možemo
      uraditi jeste da smanjimo broj grananja, odnosno da smanjimo broj ovih podniski radi dobijanja
      jedinstvenog genoma. To postižemo korišćenjem <b>parova očitavanja</b>:
    </p>
    <img alt="" src="/assets/lesson35/pic6.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> <b>Upareni k-grami</b> predstavljaju par
      k-grama koji se nalaze na fiksiranom rastojanju <b>d</b> u genomu.
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson35/pic7.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> <b>Uparena k-gram kompozicija</b> niske
      predstavlja sve uparene k-grame koje sadrži ta niska.
    </p>
    <p className={classes.indent1x}>
      PRIMER. Naći uparenu 3-gram kompoziciju niske TAATGCCATGGGATGTT.
    </p>
    <img alt="" src="/assets/lesson35/pic8.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Nakon uvođenja prethodnih pojmova, modifikujemo problem rekonstrukcije niske:
    </p>
    <p className={classes.indent1x}>PROBLEM REKONSTRUKCIJE NISKE NA OSNOVU PAROVA OČITAVANJA</p>
    <p className={classes.indent2x}>ulaz: kolekcija uparenih k-grama Ocitavanja</p>
    <p className={classes.indent2x}>
      izlaz: niska Genom za koju važi da je njena uparena k-gram kompozicija ekvivalentna kolekciji
      Ocitavanja
    </p>
    <p className={classes.indent1x}>
      Posmatrajmo prethodni primer i uparene 3-grame koje smo dobili u njemu:
    </p>
    <img alt="" src="/assets/lesson35/pic9.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Kako pri sekvencioniranju genoma nećemo znati sam genom, pa samim tim ni pozicije očitavanja,
      poređajmo ih prema leksikografskom redosledu:
    </p>
    <img alt="" src="/assets/lesson35/pic10.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Želimo da na osnovu očitavanja sastavimo genom za koga će važiti da je njegova uparena 3-gram
      kompozicija baš dati niz očitavanja. To radimo pomoću uparenog De Brujinovog grafa, koji
      formiramo na sličan način kao i De Brujinov graf (kod dela o De Brujinovom grafu smo prikazali
      jedan način njegovog formiranja, ovde ćemo drugi):
    </p>
    <p className={classes.indent2x}>
      1. Od svakog uparenog 3-grama pravimo dva čvora koja predstavljaju njegov prefiks i sufiks
      dužine 2:
    </p>
    <img alt="" src="/assets/lesson35/pic11.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Zatim izbacujemo duplikate čvorova (pravimo skup od datih čvorova):
    </p>
    <img alt="" src="/assets/lesson35/pic12.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      2. Na osnovu uparenih 3-grama (koji predstavljaju grane) povezujemo čvorove, odnosno formiramo
      graf:
    </p>
    <p className={classes.indent2x}>korak1 </p>
    <img alt="" src="/assets/lesson35/pic13.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak2 </p>
    <img alt="" src="/assets/lesson35/pic14.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak3 </p>
    <img alt="" src="/assets/lesson35/pic15.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak4 </p>
    <img alt="" src="/assets/lesson35/pic16.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak5 </p>
    <img alt="" src="/assets/lesson35/pic17.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak6 </p>
    <img alt="" src="/assets/lesson35/pic18.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak7 </p>
    <img alt="" src="/assets/lesson35/pic20.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak8 </p>
    <img alt="" src="/assets/lesson35/pic21.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak9 </p>
    <img alt="" src="/assets/lesson35/pic22.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak10 </p>
    <img alt="" src="/assets/lesson35/pic23.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak11 </p>
    <img alt="" src="/assets/lesson35/pic24.svg" className={classes.indent3x} />
    <p className={classes.indent2x} />
    <p className={classes.indent2x}>Na kraju dobijamo upareni De Brujinov graf:</p>
    <img alt="" src="/assets/lesson35/pic25.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Ova graf ima jednu Ojlerovu putanju na osnovu koj dobijamo <b>jedinstveni genom</b>:
    </p>
    <img alt="" src="/assets/lesson35/pic26.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Upareni De Brujinov graf se formira na sličan način kao i De Brujinov graf, osim što je za
      njegovo formiranje potrebno manje spajanja. On je jednostavniji za rad i njegova glavna
      prednost, kao što smo i pokazali na prethodnom primeru, je ta što će on imati manje podgrafova
      (koji nemaju grananja) od De Brujinovog grafa, pa će samim tim pre dati jedinstveni genom.
    </p>
  </div>
);

export default Lesson35;
