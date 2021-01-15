import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson221 = () => (
  <div className={classes.root}>
    <h1> DIRIHLEOV PRINCIP </h1>
    <p className={classes.indent1x}>
      U ovom delu tražimo metod koji će nam omogućiti primenu algoritama za tačno podudaranje u
      problemu približnog podudaranja šablona P sa tekstom T.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>Počnimo od sledećeg primera:</p>
    <p className={classes.indent2x}>
      Pretpostavimo da imamo šablon P i da nam se on u tekstu T pojavljuje sa 1 promenom. Podelimo
      šablon P na dva dela (particije), u i v:
    </p>
    <img alt="" src="/assets/lesson221/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Kako se dati šablon pojavljuje u tekstu T sa 1 promenom, a mi imamo 2 njegova dela, to bi
      značilo da se tačno jedan od ta dva dela mora naći u tom tekstu bez ijedne promene (jer se ta
      jedna promena može naći samo u jednom delu tog šablona).
    </p>
    <p className={classes.indent1x}>
      Princip koji smo prikazali na ovom jednostavnom primeru jeste Dirihleov princip i njegova
      definicija je sledeća:
    </p>
    <p className={classes.indent2x}>
      <span className={classes.red}>Definicija.</span> Ako imamo k predmeta koji su smešteni u k + 1
      kutiju, tada postoji bar jedna kutija koja je prazna.
    </p>
    <p className={classes.indent1x}>
      Nakon prikaza Dirihleovog principa, posmatrajmo opštiju verziju prethodnog primera, tj. šablon
      P koji se pojavljuje u tekstu T sa ne više od k razlika (promena).
    </p>
    <p className={classes.indent2x}>
      Na sličan način kao što smo to radili i kada smo imali jednu razliku, šablon P ćemo podeliti
      na k + 1 particiju:
    </p>
    <img alt="" src="/assets/lesson221/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Kako imamo do k razlika (promena), a k + 1 particija, prema Dirihleovom principu bar jedna od
      datih particija će se pojaviti u tekstu bez ijedne promene. Stoga, na svaku particiju
      primenjujemo algoritam za tačno podudaranje sa tekstom:
    </p>
    <img alt="" src="/assets/lesson221/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Pretpostavimo da smo dobili jedno podudaranje, i to za particiju P3. Ovo će predstavljati
      naznaku da postoji mogućnost da će se susedne particije približno podudarati sa tekstom T.
    </p>
    <img alt="" src="/assets/lesson221/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Nakon pronalaska pozicije gde se podudaranje desilo vršimo verifikaciju za preostale particije
      kako bismo videli da li se dati šablon P nalazi u tekstu T sa ne više od k promena:
    </p>
    <img alt="" src="/assets/lesson221/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Dirihleov princip nam predstavlja most koji nam omogućava korišćenje algoritama za tačno
      podudaranje:
    </p>
    <img alt="" src="/assets/lesson221/pic6.svg" className={classes.indent2x} />
    <h2> Implemetacije u Python-u</h2>
  </div>
);

export default Lesson221;
