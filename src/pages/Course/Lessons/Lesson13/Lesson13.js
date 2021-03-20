import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson13 = () => (
  <div className={classes.root}>
    <h1>PREDSTAVLJANJE GENOMA POMOĆU LEGO KOCKICA</h1>
    <p className={classes.indent1x}>
      Nukleotide ćemo poistovetiti sa njihovim azotnim bazama i predstaviti ih kao lego kockice:
    </p>
    <div>
      <img alt="" src="/assets/lesson13/pic1.svg" className={classes.indent2x} />
    </div>
    <p className={classes.indent1x}>
      Na osnovu ovakvog predstavljanja nukleotida, deo DNK prikazan na slici ispod će izgledati na
      sledeći način:
    </p>
    <img alt="" src="/assets/lesson13/pic2.svg" className={classes.indent2x} />
    <h1>DNK REPLIKACIJA U LOGO SVETU</h1>
    <img alt="" src="/assets/lesson13/pic3.svg" className={classes.indent1x} />
    <h1>NAČIN NA KOJI RADI DRUGA GENERACIJA SEKVENCIONIH MAŠINA</h1>
    <p className={classes.indent1x}>
      U prvom delu smo videli kako se DNK replicira. Sada ćemo pokazati kako sekvenciona mašina
      nadgleda ovaj proces kako bi sekvencionirala mnogo šablona (delova genoma) istovremeno.
    </p>
    <p className={classes.indent1x}>Na primer, sekvencioniramo Vaš genom.</p>
    <img alt="" src="/assets/lesson13/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>U laboratoriji “izvlačimo” Vaš genom iz svake ćelije.</p>
    <p className={classes.indent2x}>
      Radi jednostavnosti, pretpostavimo da je izvučeni genom sledeća niska:
    </p>
    <img alt="" src="/assets/lesson13/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Zatim ga delimo na manje fragmente (šablone):</p>
    <img alt="" src="/assets/lesson13/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Svaki šablon postavljamo na ravnu ploču, kao što je prikazano na slici za šablon GATCA.
    </p>
    <img alt="" src="/assets/lesson13/pic7.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Na datoj ravnoj ploči nasumično će biti postavljeni svi jednolančani fragmenti (oko milion ili
      milijardu njih). Ovi fragmenti su zapravo DNK molekuli koje želimo da sekvencioniramo. Za
      svaki fragment sa date ploče ćemo imati jedno sekvenciono očitavanje (komplementarni lanac
      fragmenta).
    </p>
    <p className={classes.indent2x}>
      Radi jednostavnosti, posmatrajmo lego verziju date ploče sa tri fragmenta koja su postavljena
      na nju.
    </p>
    <img alt="" src="/assets/lesson13/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Dodajemo:</p>
    <p className={classes.indent2x}>- terminirane azotne baze i</p>
    <p className={classes.indent2x}>- DNK polimeraze</p>
    <img alt="" src="/assets/lesson13/pic9.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Sekvencione mašine nadgledaju proces koji vrši DNK polimeraza, odnosno nadgledaju
      komplementiranje datih fragmenata.
    </p>
    <p className={classes.indent2x}>
      Prilikom komplementiranja tih fragmenata, odnosno prilikom dodavanja azotnih baza na baze se
      stavlja terminator. U našem lego svetu terminator možemo posmatrati kao mali deo koji ide na
      vrh lego kockice i sprečava da se na nju stavi druga lego kockica:
    </p>
    <img alt="" src="/assets/lesson13/pic10.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Pretpostavimo da želimo da sekvencioniramo sledeća tri fragmenta, odnosno želimo da nađemo
      njihova sekvenciona očitavanja. Obeležimo ta očitavanja kao O1, O2 i O3:
    </p>
    <img alt="" src="/assets/lesson13/pic11.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Prvi sekvencioni ciklus procesa sekvencioniranja datih fragmenata (kao i svaki sledeći)
      sastojaće se iz sledećih koraka:
    </p>
    <p className={classes.indent2x}>CIKLUS 1</p>
    <p className={classes.indent3x}>korak1</p>
    <div>
      <img alt="" src="/assets/lesson13/pic12.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak2</p>
    <div>
      <img alt="" src="/assets/lesson13/pic13.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak2</p>
    <div>
      <img alt="" src="/assets/lesson13/pic14.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak4</p>
    <div>
      <img alt="" src="/assets/lesson13/pic15.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak5</p>
    <div>
      <img alt="" src="/assets/lesson13/pic16.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent2x}>CIKLUS 2</p>
    <p className={classes.indent3x}>korak1</p>
    <div>
      <img alt="" src="/assets/lesson13/pic17.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak2</p>
    <div>
      <img alt="" src="/assets/lesson13/pic18.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak3</p>
    <div>
      <img alt="" src="/assets/lesson13/pic19.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak4</p>
    <div>
      <img alt="" src="/assets/lesson13/pic20.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent3x}>korak5</p>
    <div>
      <img alt="" src="/assets/lesson13/pic21.svg" className={classes.indent4x} />
    </div>
    <p className={classes.indent2x}>Nastavljamo proces sve dok ne komplementiramo sve šablone.</p>
    <p className={classes.indent2x}>Fotografije koje su dobijene za svaki ciklus su sledeće:</p>
    <img alt="" src="/assets/lesson13/pic22.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Za data tri šablona dobili smo sledeća tri očitavanja:</p>
    <p className={classes.indent3x}>CGTCA</p>
    <p className={classes.indent3x}>AGTCC</p>
    <p className={classes.indent3x}>CGTGA</p>
    <p className={classes.indent3x}>
      Očitavanja su komplementi šablona, stoga šablone dobijamo primenom funkcije obrnutiKomplement
      na njih:
    </p>
    <p className={classes.indent3x}>TGACG</p>
    <p className={classes.indent3x}>GGACT</p>
    <p className={classes.indent3x}>TGACG</p>
    <p className={classes.indent1x}>
      Ovaj proces nazivamo sekvencioniranje sintezom jer da bismo sekvencionirali date šablone mi
      prvo vršimo njihovo komplementiranje, odnosno prolazimo čitav proces njhove sinteze.
    </p>
    <p className={classes.indent1x}>Da sumiramo, kod sekvencioniranja sintezom imamo:</p>
    <p className={classes.indent1x}>- milijardu fragmenata koje treba da sekvencioniramo</p>
    <p className={classes.indent1x}>
      - masivnu paralelnost : foroaparat istovremeno slika sve boje koje se manifestuju u jednom
      ciklusu, odnosno slika sve fragmente istovremeno
    </p>
    <p className={classes.indent1x}>
      - terminatore koji služe da održavaju sinhronizovanost ovog procesa, odnosno zadržavaju proces
      daljeg komplementiranja fragmenata sve dok ne izvršimo slikanje boja koje se manifestuje pri
      reakciji terminatora i baza u trenutnom ciklusu
    </p>
    <p className={classes.indent1x}>
      Videli smo kako funkconiše dati proces, ali ono što nismo pomenuli jeste da se jačina
      svetlosti, koja se manifestuje pri reakciji između terminatora i baze (korak3 u ciklusu), neće
      najbolje videti ako imamo samo po jednu kopiju svakog fragmenta, stoga za svaki fragment
      moramo dodati još par njegovih kopija pored njega.
    </p>
    <p className={classes.indent1x}>
      Na primer, za jedan fragment to će izgledati na sledeći način:
    </p>
    <img alt="" src="/assets/lesson13/pic23.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Ponavljamo postupak koji smo prethodno opisali. Fotografija za prvi ciklus sekvencioniranja:
    </p>
    <img alt="" src="/assets/lesson13/pic24.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Međutim, može doći do greške, ako se terminator ne doda na bazu i DNK polimeraza ne bude
      sprečena (pre slikanja) da doda novu bazu. Sledeći primer to ilustuje:
    </p>
    <p className={classes.indent2x}>PRIMER</p>
    <p className={classes.indent3x}>
      Posmatramo samo one baze koje je dodala DNK polimeraza. Pretpostavimo da do slikanja još nije
      došli i da DNK polimeraza nije postavila terminator na jednu bazu.
    </p>
    <img alt="" src="/assets/lesson13/pic25.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      Druga DNK polimeraza ne biva sprečena i ona dodaje novu bazu na prethodno neterminisanu bazu:
    </p>
    <img alt="" src="/assets/lesson13/pic26.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>Nakon dodavanja te baze, naš fotoaparat pravi sliku:</p>
    <img alt="" src="/assets/lesson13/pic27.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>Sledeći ciklus sekvencioniranja datog primera:</p>
    <p className={classes.indent3x}>
      Posmatramo samo one baze koje je dodala DNK polimeraza. Pretpostavimo da do slikanja još nije
      došli i da DNK polimeraza nije postavila terminator na još dve baze.
    </p>
    <img alt="" src="/assets/lesson13/pic28.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>
      Druge DNK polimeraze ne bivaju sprečene i one dodaje nove baze na prethodno neterminisane
      baze.
    </p>
    <img alt="" src="/assets/lesson13/pic29.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>Nakon dodavanja tih baza, naš fotoaparat pravi sliku:</p>
    <img alt="" src="/assets/lesson13/pic30.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>
      Na osnovu ovog primera, možemo zaključiti da kako se krećemo od jednog do drugog sekvencionog
      ciklusa broj azotnih baza (boja), koje će odstupati od ispravne baze (ispravne boje) koju
      treba postaviti, će biti sve veći jer greške iz prethodnih ciklusa automatski proizvode grešku
      i u narednom ciklusu.
    </p>
    <p className={classes.indent1x}>
      Softver koji se bavi ovim fotografijama, odnosno određivanjem ovih boja (tj. azotnih baza),
      kao i obrađivanjem grešaka se zove Određivač baza (eng.The base caller). On može biti:
    </p>
    <img alt="" src="/assets/lesson13/pic31.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Pri analiziranju ovog softvera želeli bismo da znamo koliko je on siguran u boju (bazu) koju
      odredi. Zbog toga on za svaku azotnu bazu određuje kvalitet te baze Q:
    </p>
    <img alt="" src="/assets/lesson13/pic32.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Stoga , Q zapravo predstavlja prilagođenu verziju verovatnoće da je baza tačno određena. Što
      je on veći, to je veća verovatnoća da smo dobro odredili bazu.
    </p>
    <p className={classes.indent1x}>
      Razlog zašto softver računa Q, a ne samo p, jeste taj što nam je ovakav izraz za Q
      jednostavniji za rad od same verovatnoće p. Posmatrajmo neke vrednosti za Q, kao i to šta nam
      one predstavljaju:
    </p>
    <img alt="" src="/assets/lesson13/pic33.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Odavde možemo zaključiti da kako dodajemo 10 na Q, tako delimo sa 10 šansu da je baza pogrešno
      određena i baš zbog toga nam je Q jednostavniji za rad.
    </p>
    <p className={classes.indent1x}>Kako određujemo Q? Pokažimo to na sledećem primeru:</p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson13/pic34.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      U realnosti Određivač baza radi određivanje ove verovatnoće na mnogo komplikovaniji način, ali
      i ovaj način ima smisla.
    </p>
  </div>
);

export default Lesson13;
