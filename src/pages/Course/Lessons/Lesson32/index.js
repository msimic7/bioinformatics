import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson32 = () => (
  <div className={classes.root}>
    <h1> REKONSTRUKCIJA NISKE KAO OJLEROVA PUTANJA </h1>
    <p className={classes.ml8}>
      U prethodnom delu smo problem rekonstrukcije niske na osnovu njene kompozicije rešavali pomoću
      Hamiltonove putanje u grafu koji smo formirali na osnovu njene kompozicije. Ono što nismo
      pomenuli jeste da možemo imati više takvih putanja:
    </p>
    <p className={classes.ml18}>Putanja koju smo dobili u prethodnom delu:</p>
    <Image src="/assets/lesson32/pic1.svg" className={classes.ml28} />
    <p className={classes.ml18}>Još jedna Hamiltonova putanja istog grafa:</p>
    <Image src="/assets/lesson32/pic2.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Imamo dve Hamiltonove putanje. Ali to nije jedini problem ovog pristupa. Pored toga, nemamo ni
      odgovarajući algoritam pomoću kojeg ćemo odrediti te putanje. Zato menjamo pristup, i umesto
      da posmatramo očitavanja kao čvorove, posmatraćemo ih kao grane grafa:
    </p>
    <Image src="/assets/lesson32/pic3.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Dok ćemo čvorove između kojih se nalazi grana obeležiti na sledeći način:
    </p>
    <Image src="/assets/lesson32/pic4.svg" className={classes.ml28} />
    <p className={classes.ml18}>Tj, dobićemo sledeću putanju:</p>
    <Image src="/assets/lesson32/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Kako bismo kreirali graf od ovih čvorova i grana, spojićemo sve one čvorove koji su identični:
    </p>

    <p className={classes.ml18}>korak1</p>
    <Image src="/assets/lesson32/pic6.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Imamo tri AT čvora. Prvo ih približavamo tako da budu jedan ispod drugog:
    </p>
    <Image src="/assets/lesson32/pic7.svg" className={classes.ml38} />
    <p className={classes.ml28}>Zatim ih spajajmo u jedan čvor:</p>
    <Image src="/assets/lesson32/pic8.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak2</p>
    <p className={classes.ml28}>Imamo tri identična čvora TG:</p>
    <Image src="/assets/lesson32/pic9.svg" className={classes.ml38} />
    <p className={classes.ml28}>Spajamo ih u jedan čvor:</p>
    <Image src="/assets/lesson32/pic10.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak3</p>
    <p className={classes.ml28}>Na kraju nam ostaju samo još dva identična čvora, čvorovi GG:</p>
    <Image src="/assets/lesson32/pic11.svg" className={classes.ml38} />
    <p className={classes.ml28}>Spajamo ih:</p>
    <Image src="/assets/lesson32/pic12.svg" className={classes.ml38} />

    <p className={classes.ml18}>
      Kao rezultat dobijamo graf kojim ćemo se baviti u ovom delu, takozvani <b>De Brujinov graf</b>
      :
    </p>
    <Image src="/assets/lesson32/pic13.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Genom na osnovu De Bruijinovog grafa će biti konstruisan kao putanja tog grafa koja posećuje
      svaku njegovu granu <b>tačno</b> jednom:
    </p>

    <p className={classes.ml28}>korak1</p>
    <p className={classes.ml28}>Počinjemo od čvora TA i krećemo se po putanji.</p>
    <Image src="/assets/lesson32/pic14.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak2</p>
    <Image src="/assets/lesson32/pic15.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak3</p>
    <p className={classes.ml28}>
      Imamo 3 mogućnosti. Svejedno je koju ćemo izabrati jer sve vode ka istom čvoru.
    </p>
    <Image src="/assets/lesson32/pic16.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak4</p>
    <Image src="/assets/lesson32/pic17.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak5</p>
    <Image src="/assets/lesson32/pic18.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak6</p>
    <Image src="/assets/lesson32/pic19.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak7</p>
    <Image src="/assets/lesson32/pic20.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak8</p>
    <Image src="/assets/lesson32/pic21.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak9</p>
    <Image src="/assets/lesson32/pic22.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak10</p>
    <Image src="/assets/lesson32/pic23.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak11</p>
    <Image src="/assets/lesson32/pic24.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak12</p>
    <Image src="/assets/lesson32/pic25.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak13</p>
    <Image src="/assets/lesson32/pic26.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak14</p>
    <Image src="/assets/lesson32/pic27.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak15</p>
    <Image src="/assets/lesson32/pic28.svg" className={classes.ml38} />
    <p className={classes.ml8}>
      <span className={classes.red}>Definicija.</span> <b>Ojlerova putanja</b> grafa je putanja koja
      posećuje svaku granu tog grafa tačno jednom.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Sada naš problem rekonstrukcije niske na osnovu njene kompozicije možemo definisati na sledeći
      način:
    </p>
    <p className={classes.ml8}>PROBLEM OJLEROVE PUTANJE</p>
    <p className={classes.ml18}>ulaz: graf Graf</p>
    <p className={classes.ml18}>
      izlaz: niska Putanja koji posećuje svaku granu grafa Graf tačno jednom
    </p>
    <p className={classes.ml8}>
      Ojler je rešio ovaj problem rešavajući <b>Problem kenigsberških mostova</b>:
    </p>
    <p className={classes.ml8}>PROBLEM KENIGSBERŠKIH MOSTOVA</p>
    <p className={classes.ml18}>
      Preko reke Pregel koja protiče kroz Kenigsberg (nekada u Pruskoj, danas pod imenom
      Kalinjingrad u Rusiji) i koju dva ostrva dele na dva rukavca, postoji sedam mostova koji
      povezuju ostrva i obale reke, kao što je prikazano na slici ispod. Stanovnici grada su dugo
      bili okpirani sledećim pitanjem: Da li je moguće preći sve mostove ne prelazeći ni preko
      jednog mosta dva ili više puta?
    </p>
    <Image src="/assets/lesson32/pic29.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      On je na osnovu date slike konstruisao graf u kome su odgovarajući čvorovi predstavljali
      okruge, a grane mostove koji povezuju te okruge:
    </p>
    <Image src="/assets/lesson32/pic30.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Ojler je rešio ovaj problem 1736. godine. Njegov dokaz o nepostojanju željenog puta preko
      kenigsberških mostova se obično uzima kao početak jedne nove matematičke discipline - Teorija
      grafova.
    </p>
    <p className={classes.ml8}>
      Prikazani graf za kenigsberške mostove je neusmereni graf. Mi smo u ovom delu radili sa
      usmerenim grafovima, ali to nema značajnog uticaja jer su razlike između usmerenih i
      neusmerenih grafova male. Na dalje, radićemo sa usmerenim grafovima jer oni odgovaraju
      problemu koji rešavamo.
    </p>
    <p className={classes.ml8}>
      Nakon prikaza ovog problema imamo dva veoma slična problema koja su ekvivalentna problemu
      rekonstrukcije niske:
    </p>
    <p className={classes.ml8}>PROBLEM HAMILTONOVE PUTANJE</p>
    <p className={classes.ml18}>ulaz: graf Graf</p>
    <p className={classes.ml18}>
      izlaz: niska Putanja koji posećuje svaki <b>čvor</b> grafa Graf tačno jednom
    </p>
    <p className={classes.ml8}>PROBLEM OJLEROVE PUTANJE</p>
    <p className={classes.ml18}>ulaz: graf Graf</p>
    <p className={classes.ml18}>
      izlaz: niska Putanja koji posećuje svaku <b>granu</b> grafa Graf tačno jednom
    </p>
    <p className={classes.ml8}>
      Međutim, ispostavlja se da ova dva problema imaju različitu algoritamsku sudbinu. Za problem
      Hamiltonove putanje (koji je NP-kompletan problem) ne postoji efikasan algoritam koji ga
      rešava, dok za problem Ojlerove putanje to nije slučaj (Ojler je našao efikasan algoritam za
      taj problem). Samim tim, u nastavku ćemo se fokusirati na Ojlerov problem i prikazati ga
      detaljnije.
    </p>
  </div>
);

export default Lesson32;
