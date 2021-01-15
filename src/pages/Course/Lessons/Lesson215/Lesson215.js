import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson215 = () => (
  <div className={classes.root}>
    <h1>VARIJACIJE K-GRAM INDEKSA</h1>
    <p className={classes.indent1x}>Posmatraćemo dve varijacije k-gram indeksa.</p>
    <p className={classes.indent1x}>
      <b>Indeks od svakog n-tog k-grama</b>
    </p>

    <p className={classes.indent2x}>
      U prošlom delu smo gradili 5-gram indeks od teksta T tako što smo uzimali svaki 5-gram od T i
      dodeljivali mu odgovarajuće pozicije njegovog početka u tom tekstu:
    </p>
    <img alt="" src="/assets/lesson215/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Posmatrajmo sada modifikovanu verziju prethodnog 5-gram indeksa. Umesto da uzimamo svaki
      5-gram teksta T, uzimaćemo svaki drugi. Odnosno uzmimamo sve 5-grame koji počinju na parnim
      pozicijama teksta T:
    </p>
    <img alt="" src="/assets/lesson215/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ovim postupkom štedimo na memoriji i kao posledicu te uštede postižemo bržu pretragu indeksa.
    </p>
    <p className={classes.indent2x} />
    <p className={classes.indent2x}>
      Ako bismo, kao i do sada, posmatrali samo jedan 5-gram šablona, naišli bismo na sledeći
      problem:
    </p>
    <img alt="" src="/assets/lesson215/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ovaj problem rešavamo tako što umesto jednog 5-grama, posmatramo dva uzastopna 5-grama
      šablona:
    </p>
    <img alt="" src="/assets/lesson215/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Posmatrajmo sada dati problem pomoću sledeće slike (gde indeks formiramo pomoću 3-grama):
    </p>
    <img alt="" src="/assets/lesson215/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>I uzmimo umesto svakog drugog, svaki treći 3-gram:</p>
    <img alt="" src="/assets/lesson215/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Pretpostavimo da imamo pojavljivanje šablona P u tekstu T.</p>
    <p className={classes.indent2x}>
      Zašto nam uzimanje tri 3-grama, koji su na pozicijama koji daju različiti ostatak pri deljenju
      sa 3, garantuje da ćemo imati pogodak indeksa?
    </p>
    <p className={classes.indent3x}>
      Postoje tri mogućnosti na kojima bi dati šablon mogao početi:
    </p>
    <p className={classes.indent4x}>
      1. Na poziciji koja daje ostatak 0 pri deljenju sa 3, na primer neka je to pozicija 3:
    </p>
    <img alt="" src="/assets/lesson215/pic7.svg" className={classes.indent5x} />
    <p className={classes.indent4x}>
      2. Na poziciji koja daje ostatak 1 pri deljenju sa 3, na primer neka je to pozicija 1:
    </p>
    <img alt="" src="/assets/lesson215/pic8.svg" className={classes.indent5x} />
    <p className={classes.indent4x}>
      3. Na poziciji koja daje ostatak 2 pri deljenju sa 3, na primer neka je to pozicija 2:
    </p>
    <img alt="" src="/assets/lesson215/pic9.svg" className={classes.indent5x} />
    <p className={classes.indent4x}>
      Kako imamo tri 3-grama šablona koja se nalaze na pozicijama sa različitim ostatkom pri
      deljenju sa 3, tako će bar jedan od njih biti na poziciji u tekstu koja je deljiva sa 3,
      odnosno postojaće 3-gram indeksa koji se podudara sa njim.
    </p>
    <p className={classes.indent2x}>
      Ovu ideju možemo generalizovati i graditi indeks od svakog n-tog k-grama, a vršiti pretragu n
      k-grama šablona koji se nalaze na pozicijama koje daju različite ostatke pri deljenju sa n.
    </p>
    <p className={classes.indent1x}>
      Pre nego što uvedemo drugu varijaciju k-gram indeksa definisaćemo pojam podsekvence.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> Podsekvenca niske T predstavlja nisku koja je
      sačinjena od karaktera niske T, ali koji ne moraju biti uzastopni karakteri.
    </p>
    <p className={classes.indent1x}>Na primer:</p>
    <img alt="" src="/assets/lesson215/pic10.svg" className={classes.indent2x} />
  </div>
);

export default Lesson215;
