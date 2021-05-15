import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson10 = () => (
  <div className={classes.root}>
    <h1>UOPŠTENO O DNK STRUKTURI I REPLIKACIJI</h1>
    <h2>Struktura DNK</h2>
    <p className={classes.ml8}>
      Dezoksiribonukleinska kiselina (DNK) je kiselina koja sadrži uputstva za razvoj i pravilno
      funkionisanje svih živih organizama. Sva živa bića svoj genetički materijal nose u obliku DNK,
      osim pojedinih virusa koji svoj genetički materijal nose u obliku RNK. Genom jednog organizma
      predstavlja celokupan njegov DNK. Iako je svaki čovek različit, 99.8% ljudskog genoma isto je
      kod svih ljudi; preostalih 0.2% određuje sve one velike razlike između ljudi: od boje kože i
      očiju, do zdravlja i bolesti.
    </p>
    <p className={classes.ml8}>
      DNK je molekul koji se sastoji od dva lanca koji su uvrnuti jedan oko drugog, tako da čine
      dupli heliks.
    </p>
    <Image src="/assets/lesson10/pic1.svg" className={classes.ml8} />
    <p className={`${classes.ml8}`}>U sastav DNK ulaze tri komponente :</p>
    <p className={`${classes.ml18}`}>DEZOKSIRIBOZA</p>
    <p className={classes.ml28}>
      Dezoksiriboza jeste monosaharid (jednostavni ugljeni hidrat) sa pet ugljenikovih atoma.
      Numeracija ugljenikovih atoma ide od atoma kiseonika (O) u smeru kazaljke na satu, kao što je
      i prikazano na slici. Zašto nam je ona bitna videćemo u nastavku teksta.
    </p>
    <div className="img">
      <Image src="/assets/lesson10/pic2.svg" className={classes.ml28} />
    </div>
    <p className={classes.ml28}>Nastaje od riboze, otpuštanjem jednog atoma kiseonika. </p>
    <Image src="/assets/lesson10/pic3.svg" className={classes.ml28} />
    <p className={`${classes.ml18}`}>FOSFORNA GRUPA</p>
    <Image src="/assets/lesson10/pic4.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Fosforna grupa povezuje dve dezoksiriboze tako što se jedan njen slobodan atom kiseonika
      vezuje za mesto gde je treći ugljenikov atom prve dezoksiriboze, a drugi slobodan atom
      kiseonika se vezuje za peti ugljenikov atom druge dezoksiriboze.
    </p>
    <Image src="/assets/lesson10/pic5.svg" className={classes.ml28} />
    <p className={`${classes.ml18}`}>AZOTNE BAZE</p>
    <p className={classes.ml28}>purinske</p>
    <Image src="/assets/lesson10/pic6.svg" className={classes.ml38} />
    <p className={classes.ml28}>pirimidinske</p>
    <Image src="/assets/lesson10/pic7.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Azotne baze se međusobno povezuju pomoću vodoničnih veza i to u parovima (Timin, Adenin) i
      (Guanin, Citozin). Za ove parove baza kažemo da su međusobno komplementarne.
    </p>
    <Image src="/assets/lesson10/pic8.svg" className={classes.ml28} />
    <p className={`${classes.ml8}`}>
      Dakle, DNK ima dva lanca koja se mogu predstaviti kao niz međusobno povezanih nukleotida.
    </p>
    <Image src="/assets/lesson10/pic9.svg" className={classes.ml18} />
    <p className={`${classes.ml8}`}> ORIJENTACIJA DNK LANACA</p>
    <p className={classes.ml8}>
      Dezoksiriboze suprotnih lanaca su usmerene u suprotnim pravcima (atom kiseonika u jednim je
      gore, a u drugim dole) kao što možemo videti na slici ispod, samim tim ta dva lanca su
      antiparalelna (paralelna, ali suprotnog smera).
    </p>
    <Image src="/assets/lesson10/pic10.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      To nije jedini razlog zašto su oni antiparalelni. Posmatrajmo fosforne grupe i njihove veze sa
      dezoksiribozom :
    </p>
    <Image src="/assets/lesson10/pic11.svg" className={classes.ml18} />
    <p className={`${classes.mb24} ${classes.ml18}`}>
      Kao što smo već i videli, fosforne grupe se vežu za treći i za peti C-atom dezoksiriboze. Na
      osnovu tih veza prvi lanac će izgledati kao niz 5, 3, 5, 3, 5, 3, ... , dok će drugi lanac
      izgledati kao niz 3, 5, 3, 5, 3, 5, ...
    </p>
    <p className={classes.ml8}>
      Peti C-atom dezokiriboze za koji se veže fosforna grupa se naziva 5’ ugljenik (C5’), dok se
      treći C-atom dezoksiriboze za koji se veže OH naziva 3’ ugljenik (C3’):
    </p>
    <Image src="/assets/lesson10/pic12.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Kraj DNK lanca na kojem je fosforna grupa vezana za peti C-atoma dezoksiriboze se naziva 5’
      kraj, dok se kraj DNK lanca na kojem je OH vezan za treći C-atom dezoksiriboze naziva 3’ kraj
      :
    </p>
    <Image src="/assets/lesson10/pic13.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Dakle, jedan lanac DNK ide od 5’ kraja do 3’ kraja, dok drugi ide od 3’ kraja do 5’ kraja, tj.
      antiparalelni su.
    </p>
    <h2>Replikacija DNK</h2>
    <p className={classes.ml8}>Posmatrajmo sledeći primer.</p>
    <Image src="/assets/lesson10/pic14.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Deoba ćelije jeste proces u kome od jedne majke ćelije, dobijamo dve ćerke ćelije koje imaju
      isti genetički materijal.
    </p>
    <Image src="/assets/lesson10/pic15.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Pre nego što ćelija uđe u deobu, ona mora izvršiti replikaciju svog genetičkog materijala,
      odnosno DNK. Replikacija DNK predstavlja udvajanje DNK molekula i ona se odvija na
      semikonzervativan način što znači da stari (roditeljski) DNK lanci služe kao kalupi za sintezu
      novih DNK lanaca. Na kraju replikacije nastaju dva molekula DNK pri čemu svaki od njih ima
      jedan stari i jedan novosintetisani lanac.
    </p>
    <Image src="/assets/lesson10/pic16.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Proces replikacije počinje u delu DNK koji se zove početni region replikacije (eng. origin of
      replication, skraćeno oriC). Na tom delu enzim koji se naziva helikaza započinje rasplitanje
      DNK lanaca, raskidajući vodonične veze između azotnih baza čime se stvaraju replikativne
      viljuške (podseća na slovo Y). Replikacija se vrši bidirekciono, tj. u oba smera od početnog
      regiona. Ovde ćemo prikazati samo jedan smer, drugi je analogan.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.ml8}`}>
      <p>oznaka za helikazu :</p> <img alt="" src="/assets/lesson10/pic17.svg" />
    </span>
    <Image src="/assets/lesson10/pic18.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Zatim se SBB proteini vezuju za DNK lance i sprečavaju njihovo ponovno povezivanje, dok enzimi
      zvani topoizomeraze sprečavaju dodatno uvijanje neraskinutih DNK lanaca.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.ml8}`}>
      <p>oznaka za SBB protein :</p> <img alt="" src="/assets/lesson10/pic19.svg" />
    </span>
    <span className={`${classes.inlineTxtWithPic} ${classes.ml8}`}>
      <p>oznaka za topoizomerazu :</p> <img alt="" src="/assets/lesson10/pic20.svg" />
    </span>
    <Image src="/assets/lesson10/pic21.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      U nastavku procesa replikacije sledeći korak je stvaranje prajmera (RNK lanci čija je dužina 9
      nukleotida) i to rade enzimi koji se nazivaju primaze. Za razliku od DNK lanca, RNK lanac
      umesto azotne baze Timin poseduje azotnu bazu Uracil koja je bazni par Adenina.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.ml8}`}>
      <p>oznaka za primazu :</p> <img alt="" src="/assets/lesson10/pic22.svg" />
    </span>
    <Image src="/assets/lesson10/pic23.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Enzim čiji je naziv DNK polimeraza se vezuje za prajmer i stvara novi DNK lanac tako što
      dodaje komplementarne nukleotide u odnosu na stari (roditeljski) DNK lanac i to radi samo u
      smeru od 5’ kraja do 3’ kraja.
    </p>
    <p className={classes.ml8}>
      Jedan od novih lanaca DNK (koji se naziva vodeći lanac) se gradi u kontinuitetu , dok drugi
      lanac (zaostajući lanac) ne može biti sagrađen u kontinuitetu jer ide u suprotnom smeru (od 5’
      kraja do 3’ kraja) tako da će on biti sagrađen iz delova koje nazivamo Okazakijevim
      segmentima.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.ml8}`}>
      <p>oznaka za DNK polimerazu :</p> <img alt="" src="/assets/lesson10/pic24.svg" />
    </span>
    <p className={`${classes.ml18}`}>1. Vezuju se za prajmer</p>
    <Image src="/assets/lesson10/pic25.svg" className={classes.ml28} />
    <p className={`${classes.ml18}`}>
      2. Stvara komplementarne nukleotide u odnosu na roditeljski (stari) DNK lanac i to u smeru 5’
      ka 3’ kraju.
    </p>
    <Image src="/assets/lesson10/pic26.svg" className={classes.ml28} />
    <p className={`${classes.ml18}`}>
      3. Kako idemo dalje tako se DNK lanci raspliću sve više i više i pošto DNK polimeraza ide samo
      u jednom smeru, zaostajući lanac se gradi iz delova (Okazakijevi segmenti), dok se vodeći
      lanac gradi kontinuirano.
    </p>
    <Image src="/assets/lesson10/pic27.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      Kada DNK polimeraze završe kompletiranje DNK lanaca, tada određeni enzimi uklanjaju prajmere i
      onda druga DNK polimeraza na te delove dodaje nukleotide i time u potpunosti završava
      komplementiranje DNK lanaca. Zatim enzim koji se naziva ligaza povezuje Okazakijeve segmente u
      novi DNK lanac.
    </p>
    <Image src="/assets/lesson10/pic28.svg" className={classes.ml18} />
    <span className={`${classes.inlineTxtWithPic} ${classes.ml8}`}>
      <p>oznaka za ligazu :</p> <img alt="" src="/assets/lesson10/pic29.svg" />
    </span>
    <Image src="/assets/lesson10/pic30.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Na kraju dobijamo dva DNK molekula od kojih svaki ima jedan stari DNK lanac i jedan
      novoformirani DNK lanac i baš zbog toga proces replikacije je semikonzervativan (poluočuvan).
    </p>
    <Image src="/assets/lesson10/pic31.svg" className={classes.ml18} />
    <h2>Gen kao deo hromozomske DNK</h2>
    <p className={classes.ml8}>
      Hromozomi su telašca koji se mogu uočiti u jedru ćelija za vreme njihove deobe.
    </p>
    <Image src="/assets/lesson10/pic32.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Izgled hromozoma je veoma karakterističan i prepoznatljiv: sastoji se od dve hromatide koje su
      spojene jednom centromerom tako da liče na X. Sav genetski materijal se nalazi u hromatidama.
    </p>
    <Image src="/assets/lesson10/pic33.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Geni su linearno raspoređeni delovi hromozomske DNK nanizani duž hromozoma. Gen za određeno
      svojstvo uvek se nalazi na istom mestu na hromozomu koje se naziva genski lokus. Njihova
      veličina (broj nukleotida DNK) i raspored na hromozomima su strogo određeni.
    </p>
    <p className={classes.ml8}>
      Građa gena je građa same DNK i ogleda se u tačno određenom redosledu nukleotida (A, T, C i G).
      Promena tog redosleda, manjak ili višak nukleotida rezultira u promeni funkcije gena i naziva
      se genska mutacija (tačkasta mutacija).
    </p>
    <Image src="/assets/lesson10/pic34.svg" className={classes.ml18} />
  </div>
);

export default Lesson10;
