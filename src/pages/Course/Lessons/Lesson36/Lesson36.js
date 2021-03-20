import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson36 = () => (
  <div className={classes.root}>
    <h1>PROBLEMI SA KOJIMA SE SUSREĆEMO</h1>
    <p className={classes.indent1x}>
      Prilikom formiranja algoritama za problem preklapanja očitavanja imali smo sledeće
      pretpostavke:
    </p>
    <pre className={classes.indent2x}>
      {` 
1. Očitavanja savršeno pokrivaju genom, tj. svaki k-gram genoma predstavlja jedno očitavanje;
2. Očitavanja nisu podložna greškama;
3. Broj duplikata određenih očitavanja je poznat;
4. Rastojanja između očitavanja u okviru parova očitavanja su jednaka.
    `}
    </pre>
    <p className={classes.indent1x}>
      Međutim, ove pretpostavke ne moraju da važe. Štaviše, u realnosti se susrećemo sa sledećim
      problemima:
    </p>
    <pre className={classes.indent2x}>
      {` 
1. Očitavanja ne pokrivaju savršeno genom, tj. očitavanja predstavljaju neke k-grame genoma (ne sve);
2. Očitavanja su podložna greškama, kao što smo imali prilike da vidimo u prvom delu;
3. Broj duplikata određenih očitavanja nije poznat;
4. Rastojanja između očitavanja u okviru parova očitavanja nisu jednaka.
    `}
    </pre>
    <p className={classes.indent1x}>
      Nerealne pretpostavke su jako korisne, jer bez njih ne bismo bili u stanju da predstavimo
      osnovne ideje postojećih algoritama za asembliranje genoma. Stoga, prvo smo ih uveli radi
      pojednostavljenja problema i pronalaska algoritama koji rešavaju pojednostavljeni problem.
      Sada ćemo prikazati kako neke od tih nerealnih pretpostavki prevazilazimo, tj. kako
      prilagođavamo naše algoritme da rade u realnim situacijama:
    </p>
    <p className={classes.indent1x}>PRVA NEREALNA PRETPOSTAVKA : savršena pokrivenost</p>
    <p className={classes.indent2x}>
      Posmatrajmo sledeći primer u kome nemamo savršenu pokrivenost genoma ATGCCGTATGGACAACGACT:
    </p>
    <p className={classes.indent2x}>PRIMER</p>
    <img alt="" src="/assets/lesson36/pic1.svg" className={classes.indent3x} />

    <p className={classes.indent1x}>
      DRUGA NEREALNA PRETPOSTAVKA : očitavanja nisu podložna greškama
    </p>
    <p className={classes.indent2x}>
      Posmatrajmo prethodni primer i pretpostavimo da smo dobili jedno očitavanje koje ima grešku:
    </p>
    <p className={classes.indent2x}>PRIMER</p>
    <img alt="" src="/assets/lesson36/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Podelom očitavanja (koja imaju greške) na manje k-grame, dobijamo k-grame sa greškom:
    </p>
    <img alt="" src="/assets/lesson36/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Da nismo imali grešku, De Brujinov graf bi izgledao na sledeći način:
    </p>
    <img alt="" src="/assets/lesson36/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Međutim, zbog postojanja greške u očitavanju, u De Brujinovom grafu će se stvoriti balončić:
    </p>
    <img alt="" src="/assets/lesson36/pic5.svg" className={classes.indent3x} />

    <p className={classes.indent2x}>
      Pri sekvencioniranju genoma, obično ćemo imati mnogo netačnih očitavanja, tj. mnogo ovakvih
      balončića:
    </p>
    <img alt="" src="/assets/lesson36/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ove greške, tj. ovi balončići nam predstavljaju poteškoće pri rekonstrukciji genoma. Međutim,
      istraživači su razvili algoritme koji ih na efikasan način uklanjaju i pojednostavlju graf.
      Međutim, graf ne mora izgledati jednostavno ni nakon koraka pojednostavljenja. To možemo
      videti na primeru genoma bakterije N.meningitidis:
    </p>
    <img alt="" src="/assets/lesson36/pic7.svg" className={classes.indent3x} />
  </div>
);

export default Lesson36;
