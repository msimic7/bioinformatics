import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';

const Lesson222 = () => (
  <div className={classes.root}>
    <h1> DINAMIČKO PROGRAMIRANJE I EDIT RASTOJANJE </h1>
    <p className={classes.ml8}>
      U prethodnom delu smo rešavali problem približnog podudaranja korišćenjem Dirihleovog principa
      i algoritama za tačno podudaranje. U ovom delu radimo novu familiju metoda koje koriste
      dinamičko programiranje i ideju edit rastojanja pri rešavanju ovog problema.
    </p>
    <p className={classes.ml8}>
      Dinamičko programiranje i edit rastojanje ne koriste algoritme za tačno podudaranje. Samim
      tim, njih možemo posmatrati kao potpuno odvojenu klasu algoritama:
    </p>
    <Image src="/assets/lesson222/pic1.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Posmatrali smo dva načina na koja možemo meriti rastojanje između dve niske, Hamingovo
      rastojanje i edit rastojanje.
    </p>
    <p className={classes.ml8}>Impementacija Hamingovog rastojanja:</p>
    <CodeEditor
      code={`
      def hamingovoRastojanje(x, y):
        rastojanje = 0
        for i in range(len(x)):
            if not x[i]==y[i]:
                rastojanje += 1
        return rastojanje
    `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Pre nego što implementiramo algoritam za edit rastojanje, pogledajmo sledeće nejednakosti:
    </p>
    <p className={classes.ml18}>
      1. Neka su x i y dve niske iste dužine. Tada će važiti sledeća nejednakost:
    </p>
    <p className={classes.ml28}>{`editRastojanje(x,y) <= hamingovoRastojanje(x,y).`}</p>
    <p className={classes.ml28}>PRIMER</p>
    <Image src="/assets/lesson222/pic3.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Ova nejednakost jasno važi iz razloga što edit rastojanje, pored substitucije, korisiti i
      brisanje i umetanje uz pomoć kojeg u manjem broju koraka dolazimo od jedne do druge niske.
    </p>
    <p className={classes.ml18}>
      2. Neka su x i y dve niske različite dužine. Tada će važiti sledeća nejednakost:
    </p>
    <p className={classes.ml28}>{`editRastojanje(x,y) >= ||x| - |y||.`}</p>
    <p className={classes.ml28}>
      Posmatrajmo ovaj jednostavni primer u kome nam nije bitno koji se tačno karakteri nalaze u
      datim niskama, samo njihov broj:
    </p>
    <Image src="/assets/lesson222/pic5.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Prvi korak ka izjednačavanju ove dve niske jeste da im izjednačimo dužine, a zatim da izvršimo
      sve one promene koje će dovesti do toga da budu identične. Samim tim, moramo izvršiti bar ||x|
      - |y|| promena.
    </p>
    <h2 className={classes.ml8}>Algoritam za edit rastojanje</h2>
    <p className={classes.ml8}>
      Posmatrajmo niske X i Y. Neka su date niske jako dugački, tako da ćemo prikazati samo njihov
      krajnji deo:
    </p>
    <Image src="/assets/lesson222/pic6.svg" className={classes.ml18} />
    <p className={classes.ml8}>Predstavimo ih na sledeći nalin:</p>
    <Image src="/assets/lesson222/pic7.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Edit rastojanje (distancu) između njih računamo kao <b>minimum</b> rastojanja:
    </p>
    <Image src="/assets/lesson222/pic8.svg" className={classes.ml18} />
    <p className={classes.ml8}>Odnosno,</p>
    <Image src="/assets/lesson222/pic9.svg" className={classes.ml18} />
    <p className={classes.ml8}>Ovakvo računanje edit rastojanja možemo generalizovati.</p>
    <p className={classes.ml8}>Ako imamo date dve niske X i Y:</p>
    <Image src="/assets/lesson222/pic10.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      {` Gde su x,y iz karakteri skupa {A, C, G, T} i delta funkcija koja predstavlja broj promena
      koje treba izvršiti tako da ti karakteri budu jednaki:`}
    </p>
    <Image src="/assets/lesson222/pic11.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Tada je edit distanca (rastojanje) između niski X i Y data sledećom formulom:
    </p>
    <Image src="/assets/lesson222/pic12.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      Nakon ove generalizacije, možemo prikazati rekurzivnu implementaciju ovog rastojanja:
    </p>
    <CodeEditor
      code={`
    def editDistRekurzivna(x, y):
        # kada jedan od stringova postane prazan, onda je rastojanje između njih dužina drugog
        if len(x) == 0:
            return len(y)
        elif len(y) == 0:
            return len(x)
        else:
            dist1 = editDistRekurivna(x[:-1], y) + 1
            dist2 = editDistRekurivna(x, y[:-1]) + 1
            # računamo delta funkciju između poslednjih slova i ako je 1 dodajemo je na edit distancu
            if x[-1] == y[-1]:
                dist3 = editDistRekurivna(x[:-1], y[:-1])
            else:
                dist3 = editDistRekurivna(x[:-1], y[:-1]) + 1
            # vraćamo minimum od ove tri distance
            return min(dist1, dist2, dist3)
    `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Prikazana implementacija funkcije za edit rastojanje je jako spora. Kako bismo prikazali i
      koliko, pogledajmo sledeći kod u kome smo merili vreme u sekundima koje je potrebno za njeno
      izvršavanje:
    </p>
    <CodeEditor
      code={`
      import datetime as dt
      pocetak = dt.datetime.now()
      edit = editDistRekurzivna('AAGTGACGTGA','AATGTGACGGGA')
      print("Edit rastojanje je: %d" %edit)
      print((dt.datetime.now() - pocetak).total_seconds())
    `}
      result={`
    Edit rastojanje je: 2
    54.09838`}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      {`Kao što možemo videti, trebalo nam je približno 54 sekunde, što je jako dugo za ovako kratke
      niske. Razlog tome jesu ponavljajući rekurzivni pozivi koji se svaku put računaju iznova. Na
      primer, na sledećoj slici imamo prikazano nekoliko rekurzivnih poziva za funkciju `}
      <b>editDistRekurzivna(&apos;ABC&apos;,&apos;BBC&apos;)</b>:
    </p>
    <Image src="/assets/lesson222/pic13.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      {` U ovom primeru imamo dva puta rekurzivni poziv `}
      <span className={classes.red}>editDistRekurzivna(&apos;AB&apos;,&apos;BB&apos;)</span>
      {`, dok
      ćemo u celom procesu imati daleko više. Kako bismo bolje približili koliki je to problem,
      pogledajmo sledeći kod u kome nalazimo n koje predstavlja broj rekurzivnih poziva za argument
      ('AAGTGAT', 'AATGTGA') rekurzivne funckije editDistRekurzivna('AAGTGATCGTGA','AATGTGACGGGA'):`}
    </p>
    <CodeEditor
      code={`
      n = 0
      def editDistRekurzivna(x, y):
          global n
          if x == 'AAGTGAT' and y == 'AATGTGA':
            n += 1
          if len(x) == 0:
              return len(y)
          elif len(y) == 0:
              return len(x)
          else:
              dist1 = editDistRekurzivna(x[:-1], y) + 1
              dist2 = editDistRekurzivna(x, y[:-1]) + 1
              if x[-1] == y[-1]:
                  dist3 = editDistRekurzivna(x[:-1], y[:-1])
              else:
                  dist3 = editDistRekurzivna(x[:-1], y[:-1]) + 1
              return min(dist1, dist2, dist3)
      
      editDistRekurzivna('AAGTGATCGTGA','AATGTGACGGGA')
      print("n: %d" %n)
    `}
      result={`
    n: 3366`}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      {`Ovo bi značilo da smo 3366 puta pozivali funkciju za argument ('AAGTGAT', 'AATGTGA') i svaki
      put računali vrednost funkcije za njega.`}
    </p>
    <p className={classes.ml8}>
      Želimo da napravimo poboljšanje koje će nam omogućiti da samo jednom računamo datu funkciju za
      određeni argument, a svaki sledeći put samo pročitamo već izračunatu vrednost. Jedan od načina
      da to uradimo jeste pomoću dinamičkog programiranja (koristeći matricu). Prikazaćemo kako
      formiramu tu matricu za sledeći primer:
    </p>
    <p className={classes.ml8}>PRIMER</p>
    <Image src="/assets/lesson222/pic14.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Svakom polju date matrice odgovara jedan prefiks od X i jedan prefiks od Y. Njihova vrednost
      je edit distanca između prefiksa koji im odgovaraju. Na osnovu prethodne formule za edit
      rastojanje tu vrednost računamo na sledeći način:
    </p>
    <Image src="/assets/lesson222/pic15.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Prva kolona i prva vrsta označene su sa epsilon jer nam on predstavlja praznu nisku. Sva polja
      prve vrste i kolone će biti dužine određenih prefiksa argumenata X i Y jer je edit rastojanje
      između prazne niske i neprazne niske s dužina niske s:
    </p>
    <Image src="/assets/lesson222/pic16.svg" className={classes.ml28} />
    <p className={classes.ml28}>Na primer:</p>
    <Image src="/assets/lesson222/pic17.svg" className={classes.ml38} />
    <p className={classes.ml18}>
      Rezultat koji tražimo će biti upisan u polje koje se nalazi u desnom donjem uglu matrice, jer
      to polje sadrži edit distancu između X i Y:
    </p>
    <Image src="/assets/lesson222/pic18.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Na osnovu prethodnog, ako matricu označimo sa E, imaćemo da važe sledeće jednakosti:
    </p>
    <Image src="/assets/lesson222/pic19.svg" className={classes.ml28} />
    <p className={classes.ml18}>Koristeći prethodne formule, dobijamo sledeću matricu E:</p>
    <Image src="/assets/lesson222/pic20.svg" className={classes.ml28} />
    <Image src="/assets/lesson222/pic21.svg" className={classes.ml18} />
    <p className={classes.ml8}>Implementacija ovog poboljšanja je sledeća:</p>
    <CodeEditor
      code={`
    def editDistMatrica(x, y):
        # Pravimo matricu 
        E = []
        for i in range(len(x)+1):
            E.append([0]*(len(y)+1))
        # Inicijalizujemo prvi red i kolonu
        for i in range(len(x)+1):
            E[i][0] = i
        for i in range(len(y)+1):
            E[0][i] = i
        # Popunjavamo ostatak matrice
        for i in range(1, len(x)+1):
            for j in range(1, len(y)+1):
                distHor = E[i][j-1] + 1
                distVer = E[i-1][j] + 1
                if x[i-1] == y[j-1]:
                    distDiag = E[i-1][j-1]
                else:
                    distDiag = E[i-1][j-1] + 1
                E[i][j] = min(distHor, distVer, distDiag)
        # Edit distanca je vrednost u donjem desnom uglu matrice 
        return E[-1][-1]
    `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Vreme koje je potrebno za izvršavanje istog primera koji smo radili i za rekurzivnu verziju:
    </p>
    <CodeEditor
      code={`
      import datetime as dt
      pocetak = dt.datetime.now()
      edit = editDistMatrica('AAGTGATCGTGA','AATGTGACGGGA')
      print("Edit rastojanje je: %d" %edit)
      print((dt.datetime.now() - pocetak).total_seconds())
    `}
      result={`
      Edit rastojanje je: 3
      0.000832`}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Dosta brže nego rekurzivna verzija, što smo i očekivali s obzirom na to da sada nemamo
      ponovljena izračunavanja funkcije za iste argumente.
    </p>
  </div>
);

export default Lesson222;
