import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';

const Lesson22 = () => (
  <div className={classes.root}>
    <h1> PROBLEM PRIBLIŽNOG PODUDARANJA </h1>
    <p className={classes.ml8}>
      U prethodnim delovima smo diskutovali o različitim načinima za rešavanje problema tačnog
      podudaranja. Naivni algoritam za tačno podudaranje, Boyer-Moore algoritam i offline algoritmi
      koji koriste indeksiranje. Međutim, tačno podudaranje očitavanja sa odgovarajućim delom genoma
      nije ono što tražimo.
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Sekvencionirana očitavanja ne moraju da se tačno podudaraju sa referentim genomom. Postoje
      određeni razlozi zbog kojih možemo očekivati razlike između očitavanja i referentnog genoma i
      oni su:
    </p>
    <p className={classes.ml18}>
      1. Greške pri sekvencioniranju očitavanja o kojima smo pričali u prvom delu;
    </p>
    <p className={classes.ml18}>
      2. Referentni genom ne mora biti u potpunosti isti kao genom koji sekvencioniramo, na primer,
      genom dva različita čoveka koji nisu u srodstvu je 99,8% isti, što znači da će se povremeno
      dešavati da imamo različite baze na istim pozicijama tih genoma.
    </p>
    <p className={classes.ml8}>
      Za rešavanje ovog problema biće nam potrebni algoritmi za približno podudaranje očitavanja sa
      genomom.
    </p>
    <h2 className={classes.ml8}>Algoritmi za približno podudaranje</h2>
    <p className={classes.ml8}>
      U ovim algoritmima dopuštamo postojanje razlika između teksta i šablona. Razlike koje
      dopuštamo su sledeće:
    </p>
    <p className={classes.ml18}>1. Nepodudaranje određenog broja karaktera.</p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson22/pic1.svg" className={classes.ml28} />
    <p className={classes.ml18}>2. Umetanje određenog broja karaktera.</p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson22/pic2.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Umetanje karaktera u šablon P u odnosu na tekst T je ekvivalento brisanju karaketera iz teksta
      T u odnosu na šablon P:
    </p>
    <Image src="/assets/lesson22/pic3.svg" className={classes.ml38} />
    <p className={classes.ml18}>3. Brisanje određenog broja karaktera.</p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson22/pic4.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Brisanje karaktera iz šablona P u odnosu na tekst T je ekvivalento umetanju karaketera u tekst
      T u odnosu na šablon P:
    </p>
    <Image src="/assets/lesson22/pic5.svg" className={classes.ml38} />
    <p className={classes.ml8}>
      Određivanje broja tih razlika, odnosno broja razlika između šablona P i odgovarajućeg dela
      teksta T, radićemo pomoću sledećih rastojanja:
    </p>
    <p className={classes.ml8}>
      <b>Hamingovo rastojanje</b>
    </p>
    <p className={classes.ml18}>Neka su X i Y dve niske iste dužine.</p>
    <p className={classes.ml18}>
      hamingovoRastojanje(X,Y) = minimalni broj substitucija pomoću kojih od jedne niske dobijamo
      drugu nisku.
    </p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson22/pic6.svg" className={classes.ml28} />
    <p className={classes.ml8}>
      <b>Edit rastojanje</b>
    </p>
    <p className={classes.ml18}>
      editRastojanje(X,Y) = minimalni broj promena (brisanje/umetanje, substitucija) pomoću kojih od
      jedne niske dobijamo drugu nisku.
    </p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson22/pic7.svg" className={classes.ml28} />
    <p className={classes.ml28}>Na prvi pogled možemo zapaziti sledeću substituciju:</p>
    <Image src="/assets/lesson22/pic8.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Daljom analizom ove dve niske možemo uočiti da u niski X (koji ima jedan element više od Y)
      imamo jedno A više nego što to imamo u niski Y, što nas dovodi do zaključka da treba izvršiti
      umetanje karaktera A u nisku Y ili brisanje karaktera A iz niske X.
    </p>
    <Image src="/assets/lesson22/pic9.svg" className={classes.ml38} />
    <p className={classes.ml28}>editRastojanje(X, Y) = 2</p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson22/pic10.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Posmatrajući samo substitucije deluje nam da je edit rastojanje između ove dve niske veliko.
      Međutim, kada uočimo sledeća umetanja/brisanja karaktera vidimo da će ono biti 2:
    </p>
    <Image src="/assets/lesson22/pic11.svg" className={classes.ml38} />
    <p className={classes.ml28}>editRastojanje(X, Y) = 2</p>
    <p className={classes.ml8}>
      U ovom delu se fokusiramo na <b>Hamingovo rastojanje.</b>
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>
      Modifikovaćemo naivni algoritam tačnog podudaranja tako da će dopuštati određen broj razlika,
      odnosno tražićemo pojavljivanja šablona P u tekstu T tako da njihovo Hamingovo rastojanje nije
      veće od unapred zadatog broja koji je veći od nula (kod algoritama tačnog podudaranja on je
      nula).
    </p>
    <p className={classes.ml8} />
    <p className={classes.ml8}>Implementacija naivnog algoritma za tačno podudaranje:</p>
    <CodeEditor
      code={`
    def naivni(p, t):
        pojavljivanja = []
        for i in range(len(t) - len(p) + 1):
            nadjen = True
            for j in range(len(p)):
                if t[i+j] != p[j]:
                    nadjen = False
                    break
            if nadjen:
                pojavljivanja.append(i)
        return pojavljivanja 
    `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      U njegovoj modifikaciji, kada naiđemo na prvo nepodudaranje karaktera šablona sa karakterom iz
      teksta ne izlazimo iz unutrašnje while petlje, nego izlazimo iz nje tek kada broj
      nepodudaranja pređe unapred određeno Hamingovo rastojanje (u ovom slučaju to će biti smešteno
      u promenljivoj maxRastojanje):
    </p>
    <CodeEditor
      code={`
    def naivniHaming(p, t, maxRastojanje):
        pojavljivanja = []
        for i in range(len(t) - len(p) + 1):
            brojNepodudaranja = 0
            for j in range(len(p)):
                if t[i+j] != p[j]:
                    brojNepodudaranja += 1
                    if brojNepodudaranja > maxRastojanje:
                        break
            if brojNepodudaranja <= maxRastojanje:
                pojavljivanja.append(i)
        return pojavljivanja
    `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Lako možemo modifikovati naivni algoritam tačnog podudaranja u algoritam približnog
      podudaranja, dok je sa Boyer-Moore algoritmom to teže uraditi. Kako smo već detaljno radili
      algoritme tačnog podudaranja, sledeće što ćemo raditi jesu univerzalne metode koje nam
      omogućavaju modifikaciju tih algoritama u algoritme približnog podudaranja.
    </p>
  </div>
);

export default Lesson22;
