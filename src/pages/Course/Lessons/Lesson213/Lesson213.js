import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson213 = () => (
  <div className={classes.root}>
    <h1>INDEKSIRANJE I K-GRAM INDEKS</h1>
    <p className={classes.indent1x}>
      Posmatramo problem poravnanja očitavanja gde imamo datu ogromnu kolekciju sekvencioniranih
      očitavanja. Želeli bismo da nađemo njihove pozicije u dugačkom referentom genomu.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ono što smo već zaključili jeste da ćemo za dati problem koristiti offline algoritme jer se
      referentni genom (tekst T) ne menja od eksperimenta do eksperimneta, dok se sekvenciona
      očitavanja (šabloni) menjaju. Samim tim, radićemo preprocesiranje teksta T (koji može biti
      dugačak 3 milijarde karaktera, pa čak i više). Kako bismo taj proces bolje razumeli
      posmatraćemo sledeće analogne procese:
    </p>
    <p className={classes.indent1x}>ANALOGIJA1</p>
    <p className={classes.indent2x}>
      Neka nam je data knjiga i način na koji ćemo je preprocesirati jeste indeksiranje, kao što je
      prikazano na sledećoj slici:
    </p>
    <img alt="" src="/assets/lesson213/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Indeks je lista reči kojima je dodeljen broj stranica na kojima se ta reč nalazi. Ako bismo
      probali da nađemo više informacija o, na primer, American Revolution , to bismo mogli uraditi
      na stranicama 84, 98 i 166.
    </p>
    <p className={classes.indent2x} />
    <p className={classes.indent2x}>
      Ovaj način preprocesiranja knjige nam znatno olakšava pretragu reči jer umesto da pretražujemo
      celu knjigu, pomoću indeksa možemo naći stranice na kojima se ona nalazi i uštedeti dosta
      vremena.
    </p>
    <p className={classes.indent1x}>ANALOGIJA2</p>
    <p className={classes.indent2x}>
      Kada idete u prodavnicu da kupite mleko, nećete ga tražiti na svakoj polici te prodavnice,
      nego među onim policama koje sadrže mlečne proizvode. Prodavnice su organizovane po grupama
      povezanih namirnica (mlečni proizvodi, voće, hemija itd.) kako bi se kupci lakše snašli pri
      kupovini određene namirnice.
    </p>
    <img alt="" src="/assets/lesson213/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Prethodna dva primera nam ilustruju dva različita načina organizacije podataka koja nam
      olakšavaju pronalazak određenog podatka. Jedan od tih načina jeste uspostavljanje redosleda,
      kao uspostavljanje redosleda reči prema leksikografskom redosledu. Drugi način jeste
      grupisanje, kao grupisanje namirnica po određenim sličnostima.
    </p>
    <h2>INDEKS ZA DNK NISKU</h2>
    <p className={classes.indent1x}>
      Indeks koji ćemo graditi za DNK nisku će ličiti na indeks knjige jer ćemo koristiti ideju
      redosleda.
    </p>
    <p className={classes.indent1x}>
      Neka je dat sledeći tekst T i narandžasta kutija koja će predstavljati indeks tog teksta:
    </p>
    <img alt="" src="/assets/lesson213/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Za razliku od knjige, genom se ne sastoji od reči. Jedan od načina da ga podelimo na reči
      jeste da posmatramo sve njegove podniske iste dužine kao reči.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> Podnisku dužine k nazivamo k-gram.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      U datom primeru ćemo posmatrati sve 5-grame teksta T i ubaciti ih u indeks od T. Kao i kod
      indeksa knjige, u indeksu od T ćemo 5-gramima iz teksta da pridružimo pozicije njihovog
      početka. Krećemo od 5-grama koji počinje na poziciji 0 i idemo sve dok ne dođemo do
      poslednjeg:
    </p>
    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson213/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak2</p>
    <img alt="" src="/assets/lesson213/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak3</p>
    <img alt="" src="/assets/lesson213/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak4</p>
    <img alt="" src="/assets/lesson213/pic7.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak5</p>
    <img alt="" src="/assets/lesson213/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak6</p>
    <img alt="" src="/assets/lesson213/pic9.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak7</p>
    <img alt="" src="/assets/lesson213/pic10.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Dakle, indeks teksta T u kojem smo sve njegove 5-grame posmatrali kao reči i kojima smo
      dodeljivali pozicije njihovog početka u tom tekstu nazivamo 5-gram indeks:
    </p>
    <img alt="" src="/assets/lesson213/pic11.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Kako bismo pojasnili kako tačno koristimo dati indeks, posmatrajmo sledeći primer:
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson213/pic12.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>Pretragu šablona P u tekstu T radimo pomoću dva koraka:</p>
    <p className={classes.indent3x}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju prvog 5-grama šablona P u tekstu T. Ako
      ta potraga rezultira uspehom onda ćemo to zvati <b>pogodak indeksa</b>.
    </p>
    <img alt="" src="/assets/lesson213/pic13.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      <b>KORAK2.</b> <b>Verifikacija</b>, odnosno provera da li se ostatak šablona P poklapa sa
      odgovarajućim delom teksta T.
    </p>
    <img alt="" src="/assets/lesson213/pic14.svg" className={classes.indent4x} />
    <p className={classes.indent4x}>
      Kako se i ostatak šablona (u ovom slučaju samo karakter C) podudara sa odgovarajućim delom
      teksta, dobijamo podudaranje šablona P sa tekstom T na poziciji 3.
    </p>
    <p className={classes.indent2x}>
      Šta bismo dobili kada bismo umesto prvog 5-grama šablona P, posmatrali njegov drugi 5-gram?
    </p>
    <p className={classes.indent2x}>
      Promena 5-grama šablona neće imati uticaja jer 5-gram indeks sadrži svaki 5-gram teksta T:
    </p>
    <p className={classes.indent3x}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju drugog 5-grama šablona P u tekstu T:
    </p>
    <img alt="" src="/assets/lesson213/pic15.svg" className={classes.indent4x} />
    <p className={classes.indent4x}>
      U ovom slučaju imamo podudaranje drugog 5-grama šablona sa dva 5-grama teksta koji počinju na
      pozicijama 0 i 4, stoga ćemo imati dve verifikacije.
    </p>
    <p className={classes.indent3x}>
      <b>KORAK2.</b> Verifikacije:
    </p>
    <p className={classes.indent4x}>Verifikacija za poziciju 0:</p>
    <img alt="" src="/assets/lesson213/pic16.svg" className={classes.indent5x} />
    <p className={classes.indent5x}>
      Ovo poređenje ne uspeva kako u tekstu nemamo poziciju levo od pozicije nula.
    </p>
    <p className={classes.indent4x}>Verifikacija za poziciju 4:</p>
    <img alt="" src="/assets/lesson213/pic17.svg" className={classes.indent5x} />
    <p className={classes.indent5x}>
      Kako se i ostatak šablona (u ovom slučaju samo karakter G) podudara sa odgovarajućim delom
      teksta, dobijamo podudaranje šablona P sa tekstom T na poziciji 3, kao i u prvom slučaju.
    </p>
    <p className={classes.indent1x}>
      Sledeći primer će nam biti isti kao prethodni, osim što je šablon modifikovan (umesto
      poslednjeg karaktera stavljen je karakter A):
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson213/pic18.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju prvog 5-grama šablona P u tekstu T:
    </p>
    <img alt="" src="/assets/lesson213/pic19.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      <b>KORAK2.</b> Verifikacija.
    </p>
    <img alt="" src="/assets/lesson213/pic20.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Kako se ostatak šablona (u ovom slučaju samo karakter A) ne podudara sa odgovarajućim delom
      teksta (karakterom C) dati šablon P nema podudaranje sa tekstom ni na jednoj poziciji.
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson213/pic21.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju prvog 5-grama šablona P u tekstu T:
    </p>
    <img alt="" src="/assets/lesson213/pic22.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      U ovom primeru prvi 5-gram šablona P se uopšte ne nalazi u tekstu T, pa se samim tim ni sam
      šablon ne nalazi u njemu.
    </p>
  </div>
);

export default Lesson213;
