import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson211 = () => (
  <div className={classes.root}>
    <h1>BOYER-MOORE ALGORITAM</h1>
    <p className={classes.ml8}>
      U ovom delu ćemo prikazati efikasniji algoritam za rešavanje problema tačnog podudaranja.
    </p>
    <p className={classes.ml8}>
      Počećemo sa primerom iz prethodnog dela i posmatrati sledeće poravnanje:
    </p>
    <Image src="/assets/lesson211/pic1.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Poredimo karaktere šablona P sa poravnatim delom teksta T krećući se sleva na desno. Dolazimo
      do nepodudaranja pri poređenju karaktera ‘r’ šablona sa karakterom ‘u’ iz teksta:
    </p>
    <Image src="/assets/lesson211/pic2.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Ako bismo radili naivni algoritam, ovde bismo prekinuli unutrašnju petlju (dalju proveru
      podudaranja karaktera) i prešli na sledeće poravnanje.
    </p>
    <p className={classes.ml18}>
      Međutim, sada to nećemo raditi. Kako šablon word ne sadrži karakter ‘u’ levo od mesta
      (karaktera) nepodudaranja, preskačemo sledeća dva poravnanja kako bismo prošli taj karakter:
    </p>
    <Image src="/assets/lesson211/pic3.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      Ideju iz datog primera možemo generalizovati u pravila. U tim pravilima ćemo na osnovu
      poređenja karaktera računati koliko poravnanja možemo preskočiti, jer ona neće rezultirati
      uspehom (potpunim podudaranjem sa odgovarajućim delom teksta).{' '}
    </p>
    <p className={classes.ml8}>
      Za razliku od primera, u pravilima će se poređenje karaktera vršiti zdesna na levo, dok će
      poravnanja ostati da idu sleva na desno:
    </p>
    <Image src="/assets/lesson211/pic4.svg" className={classes.ml18} />
    <p className={classes.ml8}>Boyer-Moore algoritam koristi dva takva pravila:</p>
    <p className={classes.ml18}>1. Pravilo lošeg karaktera</p>
    <p className={classes.ml18}>2. Pravilo dobrog sufiksa</p>
  </div>
);

export default Lesson211;
