import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson213 = () => (
  <div className={classes.root}>
    <h1>INDEKSIRANJE I K-GRAM INDEKS</h1>
    <p className={classes.ml8}>
      Posmatramo problem poravnanja očitavanja gde imamo datu ogromnu kolekciju sekvencioniranih
      očitavanja. Želeli bismo da nađemo njihove pozicije u dugačkom referentom genomu.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Ono što smo već zaključili jeste da ćemo za dati problem koristiti offline algoritme jer se
      referentni genom (tekst T) ne menja od eksperimenta do eksperimenta, dok se sekvenciona
      očitavanja (šabloni) menjaju. Samim tim, radićemo preprocesiranje teksta T (koji može biti
      dugačak 3 milijarde karaktera, pa čak i više). Kako bismo taj proces bolje razumeli
      posmatraćemo sledeće analogne procese:
    </p>
    <p className={classes.ml8}>ANALOGIJA1</p>
    <p className={classes.ml18}>
      Neka nam je data knjiga i način na koji ćemo je preprocesirati jeste indeksiranje, kao što je
      prikazano na sledećoj slici:
    </p>
    <Image src="/assets/lesson213/pic1.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Indeks je lista reči kojima je dodeljen broj stranica na kojima se ta reč nalazi. Ako bismo
      probali da nađemo više informacija o, na primer, American Revolution , to bismo mogli uraditi
      na stranicama 84, 98 i 166.
    </p>
    <p className={classes.ml18} />
    <p className={classes.ml18}>
      Ovaj način preprocesiranja knjige nam znatno olakšava pretragu reči jer umesto da pretražujemo
      celu knjigu, pomoću indeksa možemo naći stranice na kojima se ona nalazi i uštedeti dosta
      vremena.
    </p>
    <p className={classes.ml8}>ANALOGIJA2</p>
    <p className={classes.ml18}>
      Kada idete u prodavnicu da kupite mleko, nećete ga tražiti na svakoj polici te prodavnice,
      nego među onim policama koje sadrže mlečne proizvode. Prodavnice su organizovane po grupama
      povezanih namirnica (mlečni proizvodi, voće, hemija itd.) kako bi se kupci lakše snašli pri
      kupovini određene namirnice.
    </p>
    <Image src="/assets/lesson213/pic2.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      Prethodna dva primera nam ilustruju dva različita načina organizacije podataka koja nam
      olakšavaju pronalazak određenog podatka. Jedan od tih načina jeste uspostavljanje redosleda,
      kao uspostavljanje redosleda reči prema leksikografskom redosledu. Drugi način jeste
      grupisanje, kao grupisanje namirnica po određenim sličnostima.
    </p>
    <h2>INDEKS ZA DNK NISKU</h2>
    <p className={classes.ml8}>
      Indeks koji ćemo graditi za DNK nisku će ličiti na indeks knjige jer ćemo koristiti ideju
      redosleda.
    </p>
    <p className={classes.ml8}>
      Neka je dat sledeći tekst T i narandžasta kutija koja će predstavljati indeks tog teksta:
    </p>
    <Image src="/assets/lesson213/pic3.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Za razliku od knjige, genom se ne sastoji od reči. Jedan od načina da ga podelimo na reči
      jeste da posmatramo sve njegove podniske iste dužine kao reči.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      <span className={classes.red}>Definicija.</span> Podnisku dužine k nazivamo k-gram.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      U datom primeru ćemo posmatrati sve 5-grame teksta T i ubaciti ih u indeks od T. Kao i kod
      indeksa knjige, u indeksu od T ćemo 5-gramima iz teksta da pridružimo pozicije njihovog
      početka. Krećemo od 5-grama koji počinje na poziciji 0 i idemo sve dok ne dođemo do
      poslednjeg:
    </p>
    <p className={classes.ml18}>korak1</p>
    <Image src="/assets/lesson213/pic4.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak2</p>
    <Image src="/assets/lesson213/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak3</p>
    <Image src="/assets/lesson213/pic6.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak4</p>
    <Image src="/assets/lesson213/pic7.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak5</p>
    <Image src="/assets/lesson213/pic8.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak6</p>
    <Image src="/assets/lesson213/pic9.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak7</p>
    <Image src="/assets/lesson213/pic10.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      Dakle, indeks teksta T u kojem smo sve njegove 5-grame posmatrali kao reči i kojima smo
      dodeljivali pozicije njihovog početka u tom tekstu nazivamo 5-gram indeks:
    </p>
    <Image src="/assets/lesson213/pic11.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Kako bismo pojasnili kako tačno koristimo dati indeks, posmatrajmo sledeći primer:
    </p>
    <p className={classes.ml8}>PRIMER</p>
    <Image src="/assets/lesson213/pic12.svg" className={classes.ml18} />
    <p className={classes.ml18}>Pretragu šablona P u tekstu T radimo pomoću dva koraka:</p>
    <p className={classes.ml28}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju prvog 5-grama šablona P u tekstu T. Ako
      ta potraga rezultira uspehom onda ćemo to zvati <b>pogodak indeksa</b>.
    </p>
    <Image src="/assets/lesson213/pic13.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      <b>KORAK2.</b> <b>Verifikacija</b>, odnosno provera da li se ostatak šablona P poklapa sa
      odgovarajućim delom teksta T.
    </p>
    <Image src="/assets/lesson213/pic14.svg" className={classes.ml38} />
    <p className={classes.ml38}>
      Kako se i ostatak šablona (u ovom slučaju samo karakter C) podudara sa odgovarajućim delom
      teksta, dobijamo podudaranje šablona P sa tekstom T na poziciji 3.
    </p>
    <p className={classes.ml18}>
      Šta bismo dobili kada bismo umesto prvog 5-grama šablona P, posmatrali njegov drugi 5-gram?
    </p>
    <p className={classes.ml18}>
      Promena 5-grama šablona neće imati uticaja jer 5-gram indeks sadrži svaki 5-gram teksta T:
    </p>
    <p className={classes.ml28}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju drugog 5-grama šablona P u tekstu T:
    </p>
    <Image src="/assets/lesson213/pic15.svg" className={classes.ml38} />
    <p className={classes.ml38}>
      U ovom slučaju imamo podudaranje drugog 5-grama šablona sa dva 5-grama teksta koji počinju na
      pozicijama 0 i 4, stoga ćemo imati dve verifikacije.
    </p>
    <p className={classes.ml28}>
      <b>KORAK2.</b> Verifikacije:
    </p>
    <p className={classes.ml38}>Verifikacija za poziciju 0:</p>
    <Image src="/assets/lesson213/pic16.svg" className={classes.ml48} />
    <p className={classes.ml48}>
      Ovo poređenje ne uspeva kako u tekstu nemamo poziciju levo od pozicije nula.
    </p>
    <p className={classes.ml38}>Verifikacija za poziciju 4:</p>
    <Image src="/assets/lesson213/pic17.svg" className={classes.ml48} />
    <p className={classes.ml48}>
      Kako se i ostatak šablona (u ovom slučaju samo karakter G) podudara sa odgovarajućim delom
      teksta, dobijamo podudaranje šablona P sa tekstom T na poziciji 3, kao i u prvom slučaju.
    </p>
    <p className={classes.ml8}>
      Sledeći primer će nam biti isti kao prethodni, osim što je šablon modifikovan (umesto
      poslednjeg karaktera stavljen je karakter A):
    </p>
    <p className={classes.ml8}>PRIMER</p>
    <Image src="/assets/lesson213/pic18.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju prvog 5-grama šablona P u tekstu T:
    </p>
    <Image src="/assets/lesson213/pic19.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      <b>KORAK2.</b> Verifikacija.
    </p>
    <Image src="/assets/lesson213/pic20.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Kako se ostatak šablona (u ovom slučaju samo karakter A) ne podudara sa odgovarajućim delom
      teksta (karakterom C) dati šablon P nema podudaranje sa tekstom ni na jednoj poziciji.
    </p>
    <p className={classes.ml8}>PRIMER</p>
    <Image src="/assets/lesson213/pic21.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      <b>KORAK1.</b> Pomoću 5-gram indeksa nalazimo poziciju prvog 5-grama šablona P u tekstu T:
    </p>
    <Image src="/assets/lesson213/pic22.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      U ovom primeru prvi 5-gram šablona P se uopšte ne nalazi u tekstu T, pa se samim tim ni sam
      šablon ne nalazi u njemu.
    </p>
  </div>
);

export default Lesson213;
