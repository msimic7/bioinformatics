import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson34 = () => (
  <div className={classes.root}>
    <h1>OJLEROVA TEOREMA</h1>
    <p className={classes.indent1x}>PROBLEM KENIGSBERŠKIH MOSTOVA</p>
    <p className={classes.indent2x}>
      Preko reke Pregel koja protiče kroz Kenigsberg (nekada u Pruskoj, danas pod imenom
      Kalinjingrad u Rusiji) i koju dva ostrva dele na dva rukavca, postoji sedam mostova koji
      povezuju ostrva i obale reke, kao što je prikazano na slici ispod. Stanovnici grada su dugo
      bili okpirani sledećim pitanjem: Da li je moguće preći sve mostove ne prelazeći ni preko
      jednog mosta dva ili više puta?
    </p>
    <img alt="" src="/assets/lesson34/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Ojler je u problemu kenigsberških mostova tražio put koji će preći preko svakog mosta tačno
      jednom, ali i koji će <b>početi i završiti se u istom mestu</b>. Odnosno, on je tražio ciklus
      grafa koji će posetiti svaku njegovu granu tačno jednom. Shodno tome, umesto problema Ojlerove
      putanje, posmatraćemo sledeći problem:
    </p>
    <p className={classes.indent1x}>PROBLEM OJLEROVOG CIKLUSA</p>
    <p className={classes.indent2x}>ulaz: graf Graf</p>
    <p className={classes.indent2x}>
      izlaz: niska Ciklus koja predstavlja ciklus tog grafa i koja posećuje svaku njegovu granu
      tačno jednom
    </p>
    <p className={classes.indent1x}>
      Ovo neće predstavljati problem jer postoji jako mala razlika između nalaženja Ojlerovog
      ciklusa i nalaženja Ojlerove putanje. Kada naučimo kako nalazimo ciklus, naučićemo i kako
      nalazimo putanju koja odgovara tom ciklusu.
    </p>
    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> Graf u kojem postoji Ojlerov ciklus nazivamo{' '}
      <b>Ojlerovim grafom</b>.
    </p>
    <p className={classes.indent1x}>
      Počećemo od sledećih primera i pitanja da li ovi grafovi sadrže Ojlerov ciklus, tj. da li su
      oni Ojlerovi grafovi:
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Ono što možemo zaključiti iz datih primera jeste da ako graf <b>nije balansiran</b>, odnosno
      ako postoji čvor u tom grafu za koji važi da je broj njegovih ulaznih grana nije jednak broju
      njegovih izlaznih grana, onda taj graf ne može biti Ojlerov. Samim tim, imamo da važi: ako je
      graf Ojlerov, onda je on i balansiran.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ono što nas zanima jeste da li će važiti obrnuti smer, tj. da li će važiti da ako je graf
      balansiran (i naravno povezan, tj. za svaka dva čvora postoji putanja koja ih povezuje), da je
      on onda i Ojlerov. Ovaj smer predstavlja <b>Ojlerovu teoremu</b>, koju ćemo pokazati pomoću
      sledećeg primera:
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <p className={classes.indent2x}>
      Pretpostavimo da imamo mrava, koji nasumično ide kroz balansiran graf:
    </p>
    <img alt="" src="/assets/lesson34/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>I koji ne sme da poseti jednu granu dva puta.</p>
    <p className={classes.indent2x}>
      Kako mrav ide nasumično, tako postoji velika šansa da u nekom trenutku ostane zaglavljen.
      Posmatrajmo jednu moguću putanju kojom bi mrav išao:
    </p>
    <img alt="" src="/assets/lesson34/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ovaj problem rešavamo tako što dopuštamo mravu da počne iz drugog čvora putanje koju je već
      formirao, i to iz onog čvora te putanje koji ima neposećene izlazne grane. U ovom slučaju, to
      bi bilo sledeće polje:
    </p>
    <img alt="" src="/assets/lesson34/pic7.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Nakon što pronađemo novi početni čvor, mrav prvo mora obići putanju koju je prethodno obišao:
    </p>
    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson34/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak2</p>
    <img alt="" src="/assets/lesson34/pic9.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak3</p>
    <img alt="" src="/assets/lesson34/pic10.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak4</p>
    <img alt="" src="/assets/lesson34/pic11.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak5</p>
    <img alt="" src="/assets/lesson34/pic12.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak6</p>
    <img alt="" src="/assets/lesson34/pic13.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak7</p>
    <img alt="" src="/assets/lesson34/pic14.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak8</p>
    <img alt="" src="/assets/lesson34/pic15.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak9</p>
    <img alt="" src="/assets/lesson34/pic16.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak10</p>
    <img alt="" src="/assets/lesson34/pic17.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak11</p>
    <img alt="" src="/assets/lesson34/pic18.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak12</p>
    <img alt="" src="/assets/lesson34/pic19.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak13</p>
    <img alt="" src="/assets/lesson34/pic20.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak14</p>
    <img alt="" src="/assets/lesson34/pic21.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak15</p>
    <img alt="" src="/assets/lesson34/pic22.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak16</p>
    <img alt="" src="/assets/lesson34/pic23.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak17</p>
    <img alt="" src="/assets/lesson34/pic24.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak18</p>
    <img alt="" src="/assets/lesson34/pic25.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak19</p>
    <img alt="" src="/assets/lesson34/pic26.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak20</p>
    <img alt="" src="/assets/lesson34/pic27.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak21</p>
    <img alt="" src="/assets/lesson34/pic28.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak22</p>
    <img alt="" src="/assets/lesson34/pic29.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak23</p>
    <img alt="" src="/assets/lesson34/pic30.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Na osnovu ovog primera možemo napisati algoritam za pronalazak Ojlerovog cilkusa.
    </p>
    <h2 className={classes.indent1x}>
      Implementacija algoritma koji pronalazi Ojlerov ciklus u grafu
    </h2>
  </div>
);

export default Lesson34;
