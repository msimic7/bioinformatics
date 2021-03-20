import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson15 = () => (
  <div className={classes.root}>
    <h1>KAKO ANALIZIRAMO PODATKE KOJE SMO PRIKUPILI SEKVENCIONIRANJEM</h1>
    <p className={classes.indent1x}>OČITAVANJE KAO PODNISKA</p>
    <p className={classes.indent1x}>
      DNK sekvencione mašine sekvencioniraju delove genoma. One nisu dobre u sekvencinoranju
      dugačkih delova, ali su zato dobre u paralelnom sekvencioniranju velikog broja kratkih delova
      genoma. Pogledajmo sledeću ilustraciju:
    </p>
    <p className={classes.indent2x}>Želimo da sekvencioniramo sledeći genom:</p>
    <img alt="" src="/assets/lesson15/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      DNK sekvenciona mašina radi tako što iznova i iznova čita nasumične podniske datih kopija
      genoma i te podniske nazivamo <b>sekvencionim očitavanjima</b>:
    </p>
    <img alt="" src="/assets/lesson15/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Ono što nas zanima jeste kako analiziramo te dobijene podatke (očitavanja), kao i pitanja kako
      je moj genom različit od tvog? Ili šta na osnovu mog genoma mogu da zaključim o svojim
      predispozicijama za određene bolesti, kao i druga slična pitanja.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Na data pitanja ne možemo odgovoriti tako što ćemo analizirati svako očitavanje ponaosob.
      Očitavanja su vrlo kratka (dužine oko 100 nukletoida) i jedno očitavanje nije u mogućnosti da
      pokrije čak i jedan gen, jer geni su obično dužine oko 1000 nukleotida. Jedino rešenje koje
      nam preostaje jeste da iskoristimo data očitavanja pri rekonstrukciji čitavog genoma.
    </p>
    <img alt="" src="/assets/lesson15/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Problem rekonstrukcije genoma na osnovu očitavanja analogan je{' '}
      <b>problemu eksplodirajućih novina</b>:
    </p>
    <p className={classes.indent1x}>PROBLEM EKSPLODIRAJUĆIH NOVINA</p>
    <p className={classes.indent2x}>
      Pretpostavimo da imamo hiljadu kopija istog izdanja novina na jednoj gomili, a ispod njih
      postavljen dinamit. Upalimo fitilj i zamislimo da nije sve samo izgorelo već da se raspršilo u
      milion delića papira. Pretpostavimo da želimo da od tih papira sklopimo sadržaj novina. Ako
      bismo imali kopiju tih novina, onda bismo to uradili poređenjem delova koji su ostali očuvani
      nakon eksplozije sa tom kopijom.
    </p>
    <img alt="" src="/assets/lesson15/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      U našem problemu rekonstrukcije genoma, delovi novina koji su ostali očuvani posle eksplozije
      bi predstavljali očitavanja, dok bi kopija tih novina predstavljala referentni genom.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Jedna bitna činjenica jeste da ako uzmemo dva ljudska genoma (od dve osobe koje nisu u
      srodstvu), njihovi genomi će se poklapati 99.8 - 99.9%. Što je oko jedne ili dve razlike na
      1000 baza. Stoga, iako moj genom nije u potpunosti isti kao tvoj, možemo ga korsititi kao
      šablon ili vodič za sastavljanje tvog genoma, na isti način kao što kopiju novina korisitimo
      kao vodič za spajanje delova koji su očuvani posle eksplozije.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Neka su nam data očitavanja Vašeg genoma, kao i ljudski referentni genom (genom koji je
      sastavljen u projektu ljudskog genoma 2001. godine):
    </p>
    <img alt="" src="/assets/lesson15/pic5.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Uzmemo jedno očitavanje i na osnovu referentog genoma pronalazimo njegovu poziciju u tom
      genomu, tako što ćemo tražiti onu sekvencu u referentom genomu sa kojom se naše očitavanje
      najviše poklapa.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ključna stvar jeste da imamo takve referente genome. Oni postoje za različite vrste, ne samo
      za ljude, nego i za voćnu muvu, miševe, pčele, piliće, pacove, kukuruz, itd. Imamo na hiljade
      takvih genoma koji su dostupni za preuzimanje iz javnih baza podataka.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Stoga, u prvom delu ovog kursa ćemo se baviti problemom sastavljanja genoma na osnovu
      dobijenih očitavanja i referentog genoma koji će nam služiti kao vodič pri tom sastavljanju,
      na isti način na koji će nam kopija novina služiti kao vodič pri sastavljanju tih novina od
      očuvanih papira posle eksplozije. Ovaj problem ćemo zvati{' '}
      <b>Problem poravnanja očitavanja (eng. read alignment problem)</b>.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      U drugom delu ćemo se baviti slučajem kada nemamo referenti genom. Na primer, ako želimo da
      proučavamo genom neke egzotične biljke koji nikada do tada nije bio sastavljen. Ovaj problem
      je analogan problemu sastavljanja sadržaja novina samo na osnovu delova koji su ostali
      sačuvani posle eksplozije, bez postojanja njene kopije. Tada bismo na osnovu nekih preklapanja
      između tih delova mogli utvrditi sadržaj novina:
    </p>
    <img alt="" src="/assets/lesson15/pic6.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Na sličan način ćemo to raditi i pri sastavljanju genoma samo na osnovu dobijenih očitavanja:
    </p>
    <img alt="" src="/assets/lesson15/pic7.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Ovaj problem ćemo zvati <b>Problem preklapanja očitavanja (eng. genome assembly problem)</b>.
    </p>
  </div>
);

export default Lesson15;
