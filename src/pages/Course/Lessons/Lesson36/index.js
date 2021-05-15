import React from 'react';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson36 = () => (
  <div className={classes.root}>
    <h1>PROBLEMI SA KOJIMA SE SUSREĆEMO</h1>
    <p className={classes.ml8}>
      Prilikom formiranja algoritama za problem preklapanja očitavanja imali smo sledeće
      pretpostavke:
    </p>
    <p className={classes.ml18}>
      1. Očitavanja savršeno pokrivaju genom, tj. svaki k-gram genoma predstavlja jedno očitavanje
    </p>
    <p className={classes.ml18}>2. Očitavanja nisu podložna greškama</p>
    <p className={classes.ml18}>3. Broj duplikata određenih očitavanja je poznat</p>
    <p className={classes.ml18}>
      4. Rastojanja između očitavanja u okviru parova očitavanja su jednaka
    </p>
    <p className={classes.ml8}>
      Međutim, ove pretpostavke ne moraju da važe. Štaviše, u realnosti se susrećemo sa sledećim
      problemima:
    </p>
    <p className={classes.ml18}>
      1. Očitavanja ne pokrivaju savršeno genom, tj. očitavanja predstavljaju neke k-grame genoma
      (ne sve)
    </p>
    <p className={classes.ml18}>
      2. Očitavanja su podložna greškama, kao što smo imali prilike da vidimo u prvom delu
    </p>
    <p className={classes.ml18}>3. Broj duplikata određenih očitavanja nije poznat</p>
    <p className={classes.ml18}>
      4. Rastojanja između očitavanja u okviru parova očitavanja nisu jednaka
    </p>
    <p className={classes.ml8}>
      Nerealne pretpostavke su jako korisne, jer bez njih ne bismo bili u stanju da predstavimo
      osnovne ideje postojećih algoritama za asembliranje genoma. Stoga, prvo smo ih uveli radi
      pojednostavljenja problema i pronalaska algoritama koji rešavaju pojednostavljeni problem.
      Sada ćemo prikazati kako neke od tih nerealnih pretpostavki prevazilazimo, tj. kako
      prilagođavamo naše algoritme da rade u realnim situacijama:
    </p>
    <p className={classes.ml8}>PRVA NEREALNA PRETPOSTAVKA : savršena pokrivenost</p>
    <p className={classes.ml18}>
      Posmatrajmo sledeći primer u kome nemamo savršenu pokrivenost genoma ATGCCGTATGGACAACGACT:
    </p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson36/pic1.svg" className={classes.ml28} />

    <p className={classes.ml8}>DRUGA NEREALNA PRETPOSTAVKA : očitavanja nisu podložna greškama</p>
    <p className={classes.ml18}>
      Posmatrajmo prethodni primer i pretpostavimo da smo dobili jedno očitavanje koje ima grešku:
    </p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson36/pic2.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Podelom očitavanja (koja imaju greške) na manje k-grame, dobijamo k-grame sa greškom:
    </p>
    <Image src="/assets/lesson36/pic3.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Da nismo imali grešku, De Brujinov graf bi izgledao na sledeći način:
    </p>
    <Image src="/assets/lesson36/pic4.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Međutim, zbog postojanja greške u očitavanju, u De Brujinovom grafu će se stvoriti balončić:
    </p>
    <Image src="/assets/lesson36/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Pri sekvencioniranju genoma, obično ćemo imati mnogo netačnih očitavanja, tj. mnogo ovakvih
      balončića:
    </p>
    <Image src="/assets/lesson36/pic6.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Ove greške, tj. ovi balončići nam predstavljaju poteškoće pri rekonstrukciji genoma. Međutim,
      istraživači su razvili algoritme koji ih na efikasan način uklanjaju i pojednostavlju graf.
      Međutim, graf ne mora izgledati jednostavno ni nakon koraka pojednostavljenja. To možemo
      videti na primeru genoma bakterije N.meningitidis:
    </p>
    <Image src="/assets/lesson36/pic7.svg" className={classes.ml28} />
  </div>
);

export default Lesson36;
