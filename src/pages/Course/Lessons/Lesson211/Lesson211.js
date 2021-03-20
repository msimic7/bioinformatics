import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson211 = () => (
  <div className={classes.root}>
    <h1>BOYER-MOORE ALGORITAM</h1>
    <p className={classes.indent1x}>
      U ovom delu ćemo prikazati efikasniji algoritam za rešavanje problema tačnog podudaranja.
    </p>
    <p className={classes.indent1x}>
      Počećemo sa primerom iz prethodnog dela i posmatrati sledeće poravnanje:
    </p>
    <img alt="" src="/assets/lesson211/pic1.svg" className={classes.indent2x} />
    <pre className={classes.indent2x}>
      {`
Poredimo karaktere šablona P sa poravnatim delom teksta T krećući se sleva na desno.
Dolazimo do nepodudaranja pri poređenju karaktera ‘r’ šablona sa karakterom ‘u’ iz teksta;`}
    </pre>
    <img alt="" src="/assets/lesson211/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ako bismo radili naivni algoritam, ovde bismo prekinuli unutrašnju petlju (dalju proveru
      podudaranja karaktera) i prešli na sledeće poravnanje.
    </p>
    <p className={classes.indent2x}>
      Međutim, sada to nećemo raditi. Kako šablon word ne sadrži karakter ‘u’ levo od mesta
      (karaktera) nepodudaranja, preskačemo sledeća dva poravnanja kako bismo prošli taj karakter:
    </p>
    <img alt="" src="/assets/lesson211/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Ideju iz datog primera možemo generalizovati u pravila. U tim pravilima ćemo na osnovu
      poređenja karaktera računati koliko poravnanja možemo preskočiti, jer ona neće rezultirati
      uspehom (potpunim podudaranjem sa odgovarajućim delom teksta).{' '}
    </p>
    <p className={classes.indent1x}>
      Za razliku od primera, u pravilima će se poređenje karaktera vršiti zdesna na levo, dok će
      poravnanja ostati da idu sleva na desno:
    </p>
    <img alt="" src="/assets/lesson211/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>Boyer-Moore algoritam koristi dva takva pravila:</p>
    <p className={classes.indent2x}>1. Pravilo lošeg karaktera</p>
    <p className={classes.indent2x}>2. Pravilo dobrog sufiksa</p>
  </div>
);

export default Lesson211;
