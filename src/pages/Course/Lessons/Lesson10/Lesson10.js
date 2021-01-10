import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson10 = () => (
  <div className={classes.root}>
    <h1>STRUKTURA DNK</h1>
    <p className={classes.indent1x}>
      Dezoksiribonukleinska kiselina (DNK) je kiselina koja sadrži uputstva za razvoj i pravilno
      funkionisanje svih živih organizama. Sva živa bića svoj genetički materijal nose u obliku DNK,
      osim pojedinih virusa koji svoj genetički materijal nose u obliku RNK. Genom jednog organizma
      predstavlja celokupan njegov DNK.
    </p>
    <p className={classes.indent1x}>
      Iako je svaki čovek različit, 99.8% ljudskog genoma isto je kod svih ljudi; preostalih 0.2%
      određuje sve one velike razlike između ljudi: od boje kože i očiju, do zdravlja i bolesti.
    </p>
    <p className={classes.indent1x}>
      DNK je molekul koji se sastoji od dva lanca koji su uvrnuti jedan oko drugog, tako da čine
      dupli heliks.
    </p>
    <img alt="" src="/assets/pic1.svg" className={classes.indent1x} />
    <p className={`${classes.indent1x} ${classes.mb16} `}>U sastav DNK ulaze tri komponente :</p>
    <p className={`${classes.indent2x} ${classes.mb16}`}>DEZOKSIRIBOZA</p>
    <p className={classes.indent3x}>
      Dezoksiriboza jeste monosaharid (jednostavni ugljeni hidrat) sa pet ugljenikovih atoma.
    </p>
    <div className={`${classes.picWithTxt} ${classes.indent3x}`}>
      <img alt="" src="/assets/pic2.svg" />
      <div className={classes.picTxt}>
        <span className={classes.inlineTxtWithPic}>
          <p>kraća oznaka :</p> <img alt="" src="/assets/pic4.svg" />
        </span>
        <p>Njegova rotacija je u smeru kazaljke na satu.</p>
        <p>
          Numeracija ugljenikovih atoma ide od atoma kiseonika (O) u smeru kazaljke na satu,kao što
          je i prikazano na slici.
        </p>
        <p>Zašto nam je ona bitna videćemo u nastavku teksta.</p>
      </div>
    </div>
    <p className={classes.indent3x}>Nastaje od riboze, otpuštanjem jednog atoma kiseonika. </p>
    <img alt="" src="/assets/pic3.svg" className={classes.indent3x} />
    <p className={`${classes.indent2x} ${classes.mb16}`}>FOSFORNA GRUPA</p>
    <div className={`${classes.picWithTxt} ${classes.indent3x}`}>
      <img alt="" src="/assets/pic5.svg" />
      <div className={classes.picTxt}>
        <span className={classes.inlineTxtWithPic}>
          <p>kraća oznaka :</p> <img alt="" src="/assets/pic6.svg" />
        </span>
      </div>
    </div>
    <p className={classes.indent3x}>
      Fosforna grupa povezuje dve dezoksiriboze tako što se jedan njen slobodan atom kiseonika
      vezuje za mesto gde je treći ugljenikov atom prve dezoksiriboze, a drugi slobodan atom
      kiseonika se vezuje za peti ugljenikov atom druge dezoksiriboze.
    </p>
    <img alt="" src="/assets/pic7.svg" className={classes.indent3x} />
    <p className={`${classes.indent2x} ${classes.mb16}`}>AZOTNE BAZE</p>
    <p className={classes.indent3x}>purinske</p>
    <div className={`${classes.picWithTxt} ${classes.indent4x}`}>
      <img alt="" src="/assets/pic8.svg" />
      <div className={classes.picTxt}>
        <span className={classes.inlineTxtWithPic}>
          <p>kraća oznaka :</p> <img alt="" src="/assets/pic9.svg" />
        </span>
      </div>
    </div>
    <p className={classes.indent3x}>pirimidinske</p>
    <div className={`${classes.picWithTxt} ${classes.indent4x}`}>
      <img alt="" src="/assets/pic10.svg" />
      <div className={classes.picTxt}>
        <span className={classes.inlineTxtWithPic}>
          <p>kraća oznaka :</p> <img alt="" src="/assets/pic11.svg" />
        </span>
      </div>
    </div>
    <p className={classes.indent3x}>
      Azotne baze se međusobno povezuju pomoću vodoničnih veza i to u parovima (Timin, Adenin) i
      (Guanin, Citozin). Za ove parove baza kažemo da su međusobno komplementarne.
    </p>
    <img alt="" src="/assets/pic12.svg" className={classes.indent3x} />
    <p className={`${classes.indent1x} ${classes.mb16}`}>
      Dakle, DNK ima dva lanca koja se mogu predstaviti kao niz međusobno povezanih nukleotida.
    </p>
    <img alt="" src="/assets/pic13.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Dezoksiriboze suprotnih lanaca su usmerene u suprotnim pravcima (atom kiseonika u jednim je
      gore, a u drugim dole) kao što možemo videti na slici ispod, samim tim ta dva lanca su
      antiparalelna (paralelna, ali suprotnog smera).
    </p>
    <img alt="" src="/assets/pic14.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      To nije jedini razlog zašto su oni antiparalelni. Posmatrajmo fosforne grupe i njihove veze sa
      dezoksiribozom :
    </p>
    <img alt="" src="/assets/pic15.svg" className={classes.indent2x} />
    <p className={`${classes.mb24} ${classes.indent2x}`}>
      Kao što smo već i videli, fosforne grupe se vežu za treći i za peti C-atom dezoksiriboze. Na
      osnovu tih veza prvi lanac će izgledati kao niz 5, 3, 5, 3, 5, 3, ... , dok će drugi lanac
      izgledati kao niz 3, 5, 3, 5, 3, 5, ...
    </p>
    <p className={`${classes.indent1x}`}>
      Peti C-atom dezokiriboze za koji se veže fosforna grupa se naziva 5’ ugljenik (C5’), dok se
      treći C-atom dezoksiriboze za koji se veže OH naziva 3’ ugljenik (C3’):
    </p>
    <img alt="" src="/assets/pic16.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Kraj DNK lanca na kojem je fosforna grupa vezana za peti C-atoma dezoksiriboze se naziva 5’
      kraj, dok se kraj DNK lanca na kojem je OH vezan za treći C-atom dezoksiriboze naziva 3’ kraj
      :
    </p>
    <img alt="" src="/assets/pic17.svg" className={classes.indent2x} />
    <p className={`${classes.indent2x}`}>
      Dakle, jedan lanac DNK ide od 5’ kraja do 3’ kraja, dok drugi ide od 3’ kraja do 5’ kraja, tj.
      antiparalelni su.
    </p>
    <h1>STRUKTURA DNK</h1>
    <p className={`${classes.indent1x}`}>Posmatrajmo sledeći primer.</p>
    <img alt="" src="/assets/pic18.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Deoba ćelije jeste proces u kome od jedne majke ćelije, dobijamo dve ćerke ćelije koje imaju
      isti genetički materijal.
    </p>
    <img alt="" src="/assets/pic19.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Pre nego što ćelija uđe u deobu, ona mora izvršiti replikaciju svog genetičkog materijala,
      odnosno DNK. Replikacija DNK predstvalja udvajanje DNK molekula i ona se odvija na
      semikonzervativan način što znači da stari (roditeljski) DNK lanci služe kao kalupi za sintezu
      novih DNK lanaca. Na kraju replikacije nastaju dva molekula DNK pri čemu svaki od njih ima
      jedan stari i jedan novosintetisani lanac.
    </p>
    <img alt="" src="/assets/pic20.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Proces replikacije počinje u delu DNK koji se zove početni region replikacije (eng. origin of
      replication, skraćeno oriC). Na tom delu enzim koji se naziva helikaza započinje rasplitanje
      DNK lanaca, raskidajući vodonične veze između azotnih baza čime se stvaraju replikativne
      viljuške (podseća na slovo Y). Replikacija se vrši bidirekciono, tj. u oba smera od početnog
      regiona. Ovde ćemo prikazati samo jedan smer, drugi je analogan.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.indent1x}`}>
      <p>oznaka za helikazu :</p> <img alt="" src="/assets/pic21.svg" />
    </span>
    <img alt="" src="/assets/pic22.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Zatim se SBB proteini vezuju za DNK lance i sprečavaju njihovo ponovno povezivanje, dok enzimi
      zvani topoizomeraze sprečavaju dodatno uvijanje neraskinutih DNK lanaca.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.indent1x}`}>
      <p>oznaka za SBB protein :</p> <img alt="" src="/assets/pic23.svg" />
    </span>
    <span className={`${classes.inlineTxtWithPic} ${classes.indent1x}`}>
      <p>oznaka za topoizomerazu :</p> <img alt="" src="/assets/pic24.svg" />
    </span>
    <img alt="" src="/assets/pic25.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      U nastavku procesa replikacije sledeći korak je stvaranje prajmera (RNK lanci čija je dužina 9
      nukleotida) i to rade enzimi koji se nazivaju primaze. Za razliku od DNK lanca, RNK lanac
      umesto azotne baze Timin poseduje azotnu bazu Uracil koja je bazni par Adenina.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.indent1x}`}>
      <p>oznaka za primazu :</p> <img alt="" src="/assets/pic26.svg" />
    </span>
    <img alt="" src="/assets/pic27.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Enzim čiji je naziv DNK polimeraza se vezuje za prajmer i stvara novi DNK lanac tako što
      dodaje komplementarne nukleotide u odnosu na stari (roditeljski) DNK lanac i to radi samo u
      smeru od 5’ kraja do 3’ kraja.
    </p>
    <p className={`${classes.indent1x}`}>
      Jedan od novih lanaca DNK (koji se naziva vodeći lanac) se gradi u kontinuitetu , dok drugi
      lanac (zaostajući lanac) ne može biti sagrađen u kontinuitetu jer ide u suprotnom smeru (od 5’
      kraja do 3’ kraja) tako da će on biti sagrađen iz delova koje nazivamo Okazakijevim
      segmentima.
    </p>
    <span className={`${classes.inlineTxtWithPic} ${classes.indent1x}`}>
      <p>oznaka za DNK polimerazu :</p> <img alt="" src="/assets/pic28.svg" />
    </span>
    <p className={`${classes.indent2x}`}>1. Vezuju se za prajmer</p>
    <img alt="" src="/assets/pic29.svg" className={classes.indent3x} />
    <p className={`${classes.indent2x}`}>
      2. Stvara komplementarne nukleotide u odnosu na roditeljski (stari) DNK lanac i to u smeru 5’
      ka 3’ kraju.{' '}
    </p>
    <img alt="" src="/assets/pic30.svg" className={classes.indent3x} />
    <p className={`${classes.indent2x}`}>
      3. Kako idemo dalje tako se DNK lanci raspliću sve više i više i pošto DNK polimeraza ide samo
      u jednom smeru, zaostajući lanac se gradi iz delova (Okazakijevi segmenti), dok se vodeći
      lanac gradi kontinuirano
    </p>
    <img alt="" src="/assets/pic31.svg" className={classes.indent3x} />
    <p className={`${classes.indent1x}`}>
      Kada DNK polimeraze završe kompletiranje DNK lanaca, tada određeni enzimi uklanjaju prajmere i
      onda druga DNK polimeraza na te delove dodaje nukleotide i time u potpunosti završava
      komplementiranje DNK lanaca. Zatim enzim koji se naziva ligaza povezuje Okazakijeve segmente u
      novi DNK lanac.
    </p>
    <img alt="" src="/assets/pic32.svg" className={classes.indent2x} />
    <span className={`${classes.inlineTxtWithPic} ${classes.indent1x}`}>
      <p>oznaka za ligazu :</p> <img alt="" src="/assets/pic33.svg" />
    </span>
    <img alt="" src="/assets/pic34.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Na kraju dobijamo dva DNK molekula od kojih svaki ima jedan stari DNK lanac i jedan
      novoformirani DNK lanac i baš zbog toga proces replikacije je semikonzervativan (poluočuvan).
    </p>
    <img alt="" src="/assets/pic35.svg" className={classes.indent2x} />
    <h1>GEN KAO DEO HROMOZOMSKE DNK</h1>
    <p className={`${classes.indent1x}`}>
      Hromozomi su telašca koji se mogu uočiti u jedru ćelija za vreme njihove deobe.
    </p>
    <img alt="" src="/assets/pic36.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Izgled hromozoma je veoma karakterističan i prepoznatljiv: sastoji se od dve hromatide koje su
      spojene jednom centromerom tako da liče na latinično slovo X. Sav genetski materijal se nalazi
      u hromatidama.
    </p>
    <img alt="" src="/assets/pic37.svg" className={classes.indent2x} />
    <p className={`${classes.indent1x}`}>
      Geni su nanizani duž hromozoma. Gen za određeno svojstvo uvek se nalazi na istom mestu na
      hromozomu koje se naziva genski lokus. Geni su linearno raspoređeni delovi hromozomske DNK.
      Njihova veličina (broj nukleotida DNK) i raspored na hromozomima su strogo određeni. Građa
      gena je građa same DNK i ogleda se u tačno određenom redosledu nukleotida (A, T, C i G).
      Promena tog redosleda, manjak ili višak nukleotida rezultira u promeni funkcije gena i naziva
      se genska mutacija (tačkasta mutacija).
    </p>
    <img alt="" src="/assets/pic38.svg" className={classes.indent2x} />
  </div>
);

export default Lesson10;
