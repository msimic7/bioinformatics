import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';

const Lesson214 = () => (
  <div className={classes.root}>
    <h1>IMPLEMENTACIJA INDEKSA ZA TEKST T</h1>
    <img alt="" src="/assets/lesson214/pic1.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      <b>k-gram indeks od T</b> predstavlja multimapu:
    </p>
    <p className={classes.indent2x}>
      * mapu, jer povezuje ključeve (k-grame datog teksta T) sa vrednostima (njihovim pozicijama u
      tom tekstu)
    </p>
    <p className={classes.indent2x}>
      * multimapu, jer jednom k-gramu može odgovarati više pozicija u tekstu T
    </p>
    <p className={classes.indent1x}>
      Za implementaciju multimape možemo koristiti dve strukture podataka. Jedna od njih se bazira
      na redosledu, kao što smo imali kod indeksa knjige, dok se druga bazira na grupisanju
      podataka, kao što smo imali kod grupisanja namirnica u prodavnici.
    </p>
    <p className={classes.indent1x}>
      <b>1. Lista</b>
    </p>
    <p className={classes.indent2x}>
      Prva struktura koju ćemo raditi bazira se na redosledu podataka.
    </p>
    <p className={classes.indent2x} />
    <p className={classes.indent2x}>Neka nam je dat sledeći tekst T:</p>
    <img alt="" src="/assets/lesson214/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Formiramo 3-gram indeks od T kao listu parova (ključ, vrednost), gde je ključ 3-gram teksta T,
      a vrednost njegova pozicija u tom tekstu. Za prvi 3-gram datog teksta to bi izgledalo na
      sledeći način:
    </p>
    <img alt="" src="/assets/lesson214/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Uradimo isti postupak za svaki 3-gram datog teksta:</p>
    <img alt="" src="/assets/lesson214/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Zatim sortiramo ključeve (3-grame) na osnovu leksikografskog redosleda i dobijamo listu:
    </p>
    <img alt="" src="/assets/lesson214/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Na sledećem primeru ćemo pokazati kako je koristimo.</p>
    <p className={classes.indent2x}>PRIMER</p>
    <img alt="" src="/assets/lesson214/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Pretpostavimo da smo uzeli poslednji 3-gram šablona P. Želimo da nađemo njegovu poziciju u
      tekstu T pomoću liste koja predstavlja 3-gram indeks tog teksta:
    </p>
    <img alt="" src="/assets/lesson214/pic7.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      To radimo koristeći <b>binarnu pretragu</b>:
    </p>
    <p className={classes.indent3x}>korak1</p>
    <img alt="" src="/assets/lesson214/pic8.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak2</p>
    <img alt="" src="/assets/lesson214/pic9.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak3</p>
    <img alt="" src="/assets/lesson214/pic10.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>
      U Pythonu-u već postoji ugrađena funkcija za binarnu pretragu koju ćemo mi koristiti:
    </p>
    <p className={classes.indent3x}>
      <b>bisect.bisect_left(a, x)</b> - najlevlja pozicija gde x može biti ubačen u a, tako da se
      održi redosled elemenata od a.
    </p>
    <p className={classes.indent3x}>* za primenu ove funkcije niz a mora biti sortiran rastuće</p>
    <img alt="" src="/assets/lesson214/pic11.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      Pokazaćemo primenu date funkcije na prethodnom primeru, samo što ćemo ovog puta posmatrati
      3-gram GTG šablona P:
    </p>
    <img alt="" src="/assets/lesson214/pic12.svg" className={classes.indent4x} />

    <p className={classes.indent1x}>
      <b>2. Heš tabela</b>
    </p>
    <p className={classes.indent2x}>
      Druga struktura jeste heš tabela koja se bazira na grupisanju podataka pomoću heš funkcije.
    </p>
    <p className={classes.indent2x} />
    <p className={classes.indent2x}>
      Formiraćemo heš tabelu za isti tekst T kao i u prethodnom primeru:
    </p>
    <img alt="" src="/assets/lesson214/pic13.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Počinjemo sa heš tabelom koja se sastoji od niza praznih polja (polja su povezane liste, koje
      su na početku null):
    </p>
    <img alt="" src="/assets/lesson214/pic14.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Dodavanje elemenata (3-grama iz teksta i njihovih pozicija) će se vršiti na sledeći način:
    </p>
    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson214/pic15.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak2</p>
    <img alt="" src="/assets/lesson214/pic16.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak3</p>
    <img alt="" src="/assets/lesson214/pic17.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak4</p>
    <img alt="" src="/assets/lesson214/pic18.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak5</p>
    <img alt="" src="/assets/lesson214/pic19.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak6</p>
    <img alt="" src="/assets/lesson214/pic20.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak7</p>
    <img alt="" src="/assets/lesson214/pic21.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak8</p>
    <img alt="" src="/assets/lesson214/pic22.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak9</p>
    <img alt="" src="/assets/lesson214/pic23.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak10</p>
    <img alt="" src="/assets/lesson214/pic24.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak11</p>
    <img alt="" src="/assets/lesson214/pic25.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Na sledećem primeru ćemo pokazati kako koristimo ovu heš tabelu:
    </p>
    <p className={classes.indent2x}>PRIMER</p>
    <img alt="" src="/assets/lesson214/pic26.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Pretpostavimo da smo uzeli poslednji 3-gram šablona P i želimo da nađemo njegovu poziciju u
      tekstu T pomoću heš tabele koja predstavlja 3-gram indeks tog teksta:
    </p>
    <img alt="" src="/assets/lesson214/pic27.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      Pomoću heš funkcije određujemo kojem polju taj 3-gram pripada:
    </p>
    <img alt="" src="/assets/lesson214/pic28.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      Zatim pretražujemo to polje, tj povezanu listu sve dok ne pronađemo sve 3-grame koji se
      podudaraju sa njim:
    </p>
    <p className={classes.indent3x}>korak1</p>
    <img alt="" src="/assets/lesson214/pic29.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak2</p>
    <img alt="" src="/assets/lesson214/pic30.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak3</p>
    <img alt="" src="/assets/lesson214/pic31.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>korak4</p>
    <img alt="" src="/assets/lesson214/pic32.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      Dolazimo do kraja liste, pa samim tim prestajemo sa daljom pretragom i vraćamo 3 indeksna
      pogotka 8, 9 i 10.
    </p>
    <p className={classes.indent2x}>
      U Python-u koristimo rečnik jer on predstavlja implementaciju heš tabele. Rečnik se koristi na
      sledeći način:
    </p>
    <CodeEditor customClass={classes.indent3x} />
    <CodeEditor
      code={`
      >>> t = ‘GTGCGTGTGGGGG’
      >>> indeks = {‘GTG’: [0, 4, 6],‘TGC’: [1], ‘GCG’: [2],
                            ‘CGT’: [3], ‘TGT’: [5], ‘TGG’: [7], 
                            ‘GGG’: [8, 9, 10] }
      >>> indeks[‘GGG’]
      [8, 9, 10]
      >>> indeks[‘CGT’]
      [3] 
    `}
      className={classes.indent3x}
    />
    <p className={classes.indent2x}>
      U ovoj implementaciji detalji su sakriveni od nas, ne znamo koja se heš funkcija koristi, kao
      ni koliko polja ima ta heš tabela. O svemu tome brine Python, ono što je nama bitno jeste da
      kada korsitimo rečnik zapravo koristimo heš tabelu koju smo malo pre prikazali.
    </p>
    <h2>Implemetacija indeksa pomoću liste</h2>
  </div>
);

export default Lesson214;
