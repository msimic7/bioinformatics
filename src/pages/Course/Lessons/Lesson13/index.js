import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson13 = () => (
  <div className={classes.root}>
    <h1>KAKO MAŠINE RADE DNK SEKVENCIONIRANJE</h1>
    <h2>Predstavljanje genoma pomoću lego kockica</h2>
    <p className={classes.ml8}>
      Nukleotide ćemo poistovetiti sa njihovim azotnim bazama i predstaviti ih kao lego kockice:
    </p>
    <div>
      <Image src="/assets/lesson13/pic1.svg" className={classes.ml18} />
    </div>
    <p className={classes.ml8}>
      Na osnovu ovakvog predstavljanja nukleotida, deo DNK prikazan na slici ispod će izgledati na
      sledeći način:
    </p>
    <Image src="/assets/lesson13/pic2.svg" className={classes.ml18} />
    <h2>DNK replikacija u logo svetu</h2>
    <Image src="/assets/lesson13/pic3.svg" className={classes.ml8} />
    <h2>Način na koji radi druga generacija sekvencionih mašina</h2>
    <p className={classes.ml8}>
      U prvom delu smo videli kako se DNK replicira. Sada ćemo pokazati kako sekvenciona mašina
      nadgleda ovaj proces kako bi sekvencionirala mnogo šablona (delova genoma) istovremeno.
    </p>
    <p className={classes.ml8}>Na primer, sekvencioniramo Vaš genom.</p>
    <Image src="/assets/lesson13/pic4.svg" className={classes.ml18} />
    <p className={classes.ml18}>U laboratoriji „izvlačimo” Vaš genom iz svake ćelije.</p>
    <p className={classes.ml18}>
      Radi jednostavnosti, pretpostavimo da je izvučeni genom sledeća niska:
    </p>
    <Image src="/assets/lesson13/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>Zatim ga delimo na manje fragmente (šablone):</p>
    <Image src="/assets/lesson13/pic6.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Svaki šablon postavljamo na ravnu ploču, kao što je prikazano na slici za šablon GATCA.
    </p>
    <Image src="/assets/lesson13/pic7.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Na datoj ravnoj ploči nasumično će biti postavljeni svi jednolančani fragmenti (oko milion ili
      milijardu njih). Ovi fragmenti su zapravo DNK molekuli koje želimo da sekvencioniramo. Za
      svaki fragment sa date ploče ćemo imati jedno očitavanje (komplementarni lanac fragmenta).
    </p>
    <p className={classes.ml18}>
      Radi jednostavnosti, posmatrajmo lego verziju date ploče sa tri fragmenta koja su postavljena
      na nju.
    </p>
    <Image src="/assets/lesson13/pic8.svg" className={classes.ml28} />
    <p className={classes.ml18}>Dodajemo:</p>
    <p className={classes.ml18}>- terminirane azotne baze i</p>
    <p className={classes.ml18}>- DNK polimeraze</p>
    <Image src="/assets/lesson13/pic9.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Sekvencione mašine nadgledaju proces koji vrši DNK polimeraza, odnosno nadgledaju
      komplementiranje datih fragmenata.
    </p>
    <p className={classes.ml18}>
      Prilikom komplementiranja tih fragmenata, odnosno prilikom dodavanja azotnih baza na baze se
      stavlja terminator. U našem lego svetu terminator možemo posmatrati kao mali deo koji ide na
      vrh lego kockice i sprečava da se na nju stavi druga lego kockica:
    </p>
    <Image src="/assets/lesson13/pic10.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Pretpostavimo da želimo da sekvencioniramo sledeća tri fragmenta, odnosno želimo da nađemo
      njihova očitavanja. Obeležimo ta očitavanja kao O1, O2 i O3:
    </p>
    <Image src="/assets/lesson13/pic11.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Prvi sekvencioni ciklus procesa sekvencioniranja datih fragmenata (kao i svaki sledeći)
      sastojaće se iz sledećih koraka:
    </p>
    <p className={classes.ml18}>CIKLUS 1</p>
    <p className={classes.ml28}>korak1</p>
    <div>
      <Image src="/assets/lesson13/pic12.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak2</p>
    <div>
      <Image src="/assets/lesson13/pic13.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak3</p>
    <div>
      <Image src="/assets/lesson13/pic14.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak4</p>
    <div>
      <Image src="/assets/lesson13/pic15.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak5</p>
    <div>
      <Image src="/assets/lesson13/pic16.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml18}>CIKLUS 2</p>
    <p className={classes.ml28}>korak1</p>
    <div>
      <Image src="/assets/lesson13/pic17.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak2</p>
    <div>
      <Image src="/assets/lesson13/pic18.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak3</p>
    <div>
      <Image src="/assets/lesson13/pic19.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak4</p>
    <div>
      <Image src="/assets/lesson13/pic20.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml28}>korak5</p>
    <div>
      <Image src="/assets/lesson13/pic21.svg" className={classes.ml38} />
    </div>
    <p className={classes.ml18}>Nastavljamo proces sve dok ne komplementiramo sve šablone.</p>
    <p className={classes.ml18}>Fotografije koje su dobijene za svaki ciklus su sledeće:</p>
    <Image src="/assets/lesson13/pic22.svg" className={classes.ml28} />
    <p className={classes.ml28}>Za data tri šablona dobili smo sledeća tri očitavanja:</p>
    <p className={classes.ml28}>CGTCA</p>
    <p className={classes.ml28}>AGTCC</p>
    <p className={classes.ml28}>CGTGA</p>
    <p className={classes.ml28}>
      Očitavanja su komplementi šablona, stoga šablone dobijamo primenom funkcije obrnutiKomplement
      na njih:
    </p>
    <p className={classes.ml28}>TGACG</p>
    <p className={classes.ml28}>GGACT</p>
    <p className={classes.ml28}>TGACG</p>
    <p className={classes.ml8}>
      Ovaj proces nazivamo sekvencioniranje sintezom jer da bismo sekvencionirali date šablone mi
      prvo vršimo njihovo komplementiranje, odnosno prolazimo čitav proces njhove sinteze.
    </p>
    <p className={classes.ml8}>Da sumiramo, kod sekvencioniranja sintezom imamo:</p>
    <p className={classes.ml18}>- milijardu fragmenata koje treba da sekvencioniramo</p>
    <p className={classes.ml18}>
      - masivnu paralelnost : foroaparat istovremeno slika sve boje koje se manifestuju u jednom
      ciklusu, odnosno slika sve fragmente istovremeno
    </p>
    <p className={classes.ml18}>
      - terminatore koji služe da održavaju sinhronizovanost ovog procesa, odnosno zadržavaju proces
      daljeg komplementiranja fragmenata sve dok ne izvršimo slikanje boja koje se manifestuje pri
      reakciji terminatora i baza u trenutnom ciklusu
    </p>
    <p className={classes.ml8}>
      Videli smo kako funkconiše dati proces, ali ono što nismo pomenuli jeste da se jačina
      svetlosti, koja se manifestuje pri reakciji između terminatora i baze (korak3 u ciklusu), neće
      najbolje videti ako imamo samo po jednu kopiju svakog fragmenta, stoga za svaki fragment
      moramo dodati još par njegovih kopija pored njega.
    </p>
    <p className={classes.ml8}>Na primer, za jedan fragment to će izgledati na sledeći način:</p>
    <Image src="/assets/lesson13/pic23.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Ponavljamo postupak koji smo prethodno opisali. Fotografija za prvi ciklus sekvencioniranja:
    </p>
    <Image src="/assets/lesson13/pic24.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Međutim, može doći do greške, ako se terminator ne doda na bazu i DNK polimeraza ne bude
      sprečena (pre slikanja) da doda novu bazu. Sledeći primer to ilustuje:
    </p>
    <p className={classes.ml18}>PRIMER</p>
    <p className={classes.ml28}>
      Posmatramo samo one baze koje je dodala DNK polimeraza. Pretpostavimo da do slikanja još nije
      došli i da DNK polimeraza nije postavila terminator na jednu bazu.
    </p>
    <Image src="/assets/lesson13/pic25.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Druga DNK polimeraza ne biva sprečena i ona dodaje novu bazu na prethodno neterminisanu bazu:
    </p>
    <Image src="/assets/lesson13/pic26.svg" className={classes.ml38} />
    <p className={classes.ml28}>Nakon dodavanja te baze, naš fotoaparat pravi sliku:</p>
    <Image src="/assets/lesson13/pic27.svg" className={classes.ml38} />
    <p className={classes.ml18}>Sledeći ciklus sekvencioniranja datog primera:</p>
    <p className={classes.ml28}>
      Posmatramo samo one baze koje je dodala DNK polimeraza. Pretpostavimo da do slikanja još nije
      došli i da DNK polimeraza nije postavila terminator na još dve baze.
    </p>
    <Image src="/assets/lesson13/pic28.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Druge DNK polimeraze ne bivaju sprečene i one dodaje nove baze na prethodno neterminisane
      baze.
    </p>
    <Image src="/assets/lesson13/pic29.svg" className={classes.ml38} />
    <p className={classes.ml28}>Nakon dodavanja tih baza, naš fotoaparat pravi sliku:</p>
    <Image src="/assets/lesson13/pic30.svg" className={classes.ml38} />
    <p className={classes.ml18}>
      Na osnovu ovog primera, možemo zaključiti da kako se krećemo od jednog do drugog sekvencionog
      ciklusa broj azotnih baza (boja), koje će odstupati od ispravne baze (ispravne boje) koju
      treba postaviti, će biti sve veći jer greške iz prethodnih ciklusa automatski proizvode grešku
      i u narednom ciklusu.
    </p>
    <p className={classes.ml8}>
      Softver koji se bavi ovim fotografijama, odnosno određivanjem ovih boja (tj. azotnih baza),
      kao i obrađivanjem grešaka se zove Određivač baza (eng.The base caller). On može biti:
    </p>
    <Image src="/assets/lesson13/pic31.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Pri analiziranju ovog softvera želeli bismo da znamo koliko je on siguran u boju (bazu) koju
      odredi. Zbog toga on za svaku azotnu bazu određuje kvalitet te baze Q:
    </p>
    <Image src="/assets/lesson13/pic32.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Stoga , Q zapravo predstavlja prilagođenu verziju verovatnoće da je baza tačno određena. Što
      je on veći, to je veća verovatnoća da smo dobro odredili bazu.
    </p>
    <p className={classes.ml8}>
      Razlog zašto softver računa Q, a ne samo p, jeste taj što nam je ovakav izraz za Q
      jednostavniji za rad od same verovatnoće p. Posmatrajmo neke vrednosti za Q, kao i to šta nam
      one predstavljaju:
    </p>
    <Image src="/assets/lesson13/pic33.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Odavde možemo zaključiti da kako dodajemo 10 na Q, tako delimo sa 10 šansu da je baza pogrešno
      određena i baš zbog toga nam je Q jednostavniji za rad.
    </p>
    <p className={classes.ml8}>Kako određujemo Q? Pokažimo to na sledećem primeru:</p>
    <p className={classes.ml8}>PRIMER</p>
    <Image src="/assets/lesson13/pic34.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      U realnosti Određivač baza radi određivanje ove verovatnoće na mnogo komplikovaniji način, ali
      i ovaj način ima smisla.
    </p>
  </div>
);

export default Lesson13;
