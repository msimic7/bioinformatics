import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson32 = () => (
  <div className={classes.root}>
    <h1> REKONSTRUKCIJA NISKE KAO OJLEROVA PUTANJA </h1>
    <p className={classes.indent1x}>
      U prethodnom delu smo problem rekonstrukcije niske na osnovu njene kompozicije rešavali pomoću
      Hamiltonove putanje u grafu koji smo formirali na osnovu njene kompozicije. Ono što nismo
      pomenuli jeste da možemo imati više takvih putanja:
    </p>
    <p className={classes.indent2x}>Putanja koju smo dobili u prethodnom delu:</p>
    <img alt="" src="/assets/lesson32/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Još jedna Hamiltonova putanja istog grafa:</p>
    <img alt="" src="/assets/lesson32/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Imamo dve Hamiltonove putanje. Ali to nije jedini problem ovog pristupa. Pored toga, nemamo ni
      odgovarajući algoritam pomoću kojeg ćemo odrediti te putanje. Zato menjamo pristup, i umesto
      da posmatramo očitavanja kao čvorove, posmatraćemo ih kao grane grafa:
    </p>
    <img alt="" src="/assets/lesson32/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Dok ćemo čvorove između kojih se nalazi grana obeležiti na sledeći način:
    </p>
    <img alt="" src="/assets/lesson32/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Tj, dobićemo sledeću putanju:</p>
    <img alt="" src="/assets/lesson32/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Kako bismo kreirali graf od ovih čvorova i grana, spojićemo sve one čvorove koji su identični:
    </p>

    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson32/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Imamo tri AT čvora. Prvo ih približavamo tako da budu jedan ispod drugog:
    </p>
    <img alt="" src="/assets/lesson32/pic7.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>Zatim ih spajajmo u jedan čvor:</p>
    <img alt="" src="/assets/lesson32/pic8.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak2</p>
    <p className={classes.indent3x}>Imamo tri identična čvora TG:</p>
    <img alt="" src="/assets/lesson32/pic9.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>Spajamo ih u jedan čvor:</p>
    <img alt="" src="/assets/lesson32/pic10.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak3</p>
    <p className={classes.indent3x}>
      Na kraju nam ostaju samo još dva identična čvora, čvorovi GG:
    </p>
    <img alt="" src="/assets/lesson32/pic11.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>Spajamo ih:</p>
    <img alt="" src="/assets/lesson32/pic12.svg" className={classes.indent4x} />

    <p className={classes.indent2x}>
      Kao rezultat dobijamo graf kojim ćemo se baviti u ovom delu, takozvani <b>De Brujinov graf</b>
      :
    </p>
    <img alt="" src="/assets/lesson32/pic13.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Genom na osnovu De Bruijinovog grafa će biti konstruisan kao putanja tog grafa koja posećuje
      svaku njegovu granu <b>tačno</b> jednom:
    </p>

    <p className={classes.indent3x}>korak1</p>
    <p className={classes.indent3x}>Počinjemo od čvora TA i krećemo se po putanji.</p>
    <img alt="" src="/assets/lesson32/pic14.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak2</p>
    <img alt="" src="/assets/lesson32/pic15.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak3</p>
    <p className={classes.indent3x}>
      Imamo 3 mogućnosti. Svejedno je koju ćemo izabrati jer sve vode ka istom čvoru.
    </p>
    <img alt="" src="/assets/lesson32/pic16.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak4</p>
    <img alt="" src="/assets/lesson32/pic17.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak5</p>
    <img alt="" src="/assets/lesson32/pic18.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak6</p>
    <img alt="" src="/assets/lesson32/pic19.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak7</p>
    <img alt="" src="/assets/lesson32/pic20.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak8</p>
    <img alt="" src="/assets/lesson32/pic21.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak9</p>
    <img alt="" src="/assets/lesson32/pic22.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak10</p>
    <img alt="" src="/assets/lesson32/pic23.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak11</p>
    <img alt="" src="/assets/lesson32/pic24.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak12</p>
    <img alt="" src="/assets/lesson32/pic25.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak13</p>
    <img alt="" src="/assets/lesson32/pic26.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak14</p>
    <img alt="" src="/assets/lesson32/pic27.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak15</p>
    <img alt="" src="/assets/lesson32/pic28.svg" className={classes.indent4x} />

    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> <b>Ojlerova putanja</b> grafa je putanja koja
      posećuje svaku granu tog grafa tačno jednom.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Sada naš problem rekonstrukcije niske na osnovu njene kompozicije možemo definisati na sledeći
      način:
    </p>
    <p className={classes.indent1x}>PROBLEM OJLEROVE PUTANJE</p>
    <p className={classes.indent2x}>ulaz: graf Graf</p>
    <p className={classes.indent2x}>
      izlaz: niska Putanja koji posećuje svaku granu grafa Graf tačno jednom
    </p>
    <p className={classes.indent1x}>
      Ojler je rešio ovaj problem rešavajući <b>Problem kenigsberških mostova</b>:
    </p>
    <p className={classes.indent1x}>PROBLEM KENIGSBERŠKIH MOSTOVA</p>
    <p className={classes.indent2x}>
      Preko reke Pregel koja protiče kroz Kenigsberg (nekada u Pruskoj, danas pod imenom
      Kalinjingrad u Rusiji) i koju dva ostrva dele na dva rukavca, postoji sedam mostova koji
      povezuju ostrva i obale reke, kao što je prikazano na slici ispod. Stanovnici grada su dugo
      bili okpirani sledećim pitanjem: Da li je moguće preći sve mostove ne prelazeći ni preko
      jednog mosta dva ili više puta?
    </p>
    <img alt="" src="/assets/lesson32/pic29.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      On je na osnovu date slike konstruisao graf u kome su odgovarajući čvorovi predstavljali
      okruge, a grane mostove koji povezuju te okruge:
    </p>
    <img alt="" src="/assets/lesson32/pic30.svg" className={classes.indent2x} />

    <p className={classes.indent1x}>
      Ojler je rešio ovaj problem 1736. godine. Njegov dokaz o nepostojanju željenog puta preko
      kenigsberških mostova se obično uzima kao početak jedne nove matematičke discipline - Teorija
      grafova.
    </p>
    <p className={classes.indent1x}>
      Prikazani graf za kenigsberške mostove je neusmereni graf. Mi smo u ovom delu radili sa
      usmerenim grafovima, ali to nema značajnog uticaja jer su razlike između usmerenih i
      neusmerenih grafova male. Na dalje, radićemo sa usmerenim grafovima jer oni odgovaraju
      problemu koji rešavamo.
    </p>
    <p className={classes.indent1x}>
      Nakon prikaza ovog problema imamo dva veoma slična problema koja su ekvivalentna problemu
      rekonstrukcije niske:
    </p>

    <p className={classes.indent1x}>PROBLEM HAMILTONOVE PUTANJE</p>
    <p className={classes.indent2x}>ulaz: graf Graf</p>
    <p className={classes.indent2x}>
      izlaz: niska Putanja koji posećuje svaki <b>čvor</b> grafa Graf tačno jednom
    </p>

    <p className={classes.indent1x}>PROBLEM OJLEROVE PUTANJE</p>
    <p className={classes.indent2x}>ulaz: graf Graf</p>
    <p className={classes.indent2x}>
      izlaz: niska Putanja koji posećuje svaku <b>granu</b> grafa Graf tačno jednom
    </p>

    <p className={classes.indent1x}>
      Međutim, ispostavlja se da ova dva problema imaju različitu algoritamsku sudbinu. Za problem
      Hamiltonove putanje (koji je NP-kompletan problem) ne postoji efikasan algoritam koji ga
      rešava, dok za problem Ojlerove putanje to nije slučaj (Ojler je našao efikasan algoritam za
      taj problem). Samim tim, u nastavku ćemo se fokusirati na Ojlerov problem i prikazati ga
      detaljnije.
    </p>
  </div>
);

export default Lesson32;
