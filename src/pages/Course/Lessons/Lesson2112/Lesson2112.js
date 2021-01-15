import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';

const Lesson2112 = () => (
  <div className={classes.root}>
    <h1>PRAVILO DOBROG SUFIKSA</h1>
    <p>Ovo pravilo ćemo objasniti kroz sledeći primer.</p>
    <p>
      Kao i kod pravila lošeg karaktera, poređenje karaktera šablona i dela teksta, sa kojim je taj
      šablon poravnat, ide zdesna na levo:
    </p>
    <img alt="" src="/assets/lesson2112/pic1.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2112/pic2.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Neka je t podniska (sufiks) koji predstavlja niz karaktera šablona P koji se podudaraju sa
      karakterima iz T sve do prvog nepodudaranja (t = ‘TAC’):
    </p>
    <img alt="" src="/assets/lesson2112/pic3.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Tražimo podnisku šablona P, levo od pozicije(karaktera) gde se nepodudaranje desilo (karakter
      T), koji će se podudarati sa t.
    </p>
    <img alt="" src="/assets/lesson2112/pic4.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Pomeramo šablon u desno sve dok nam se ta podniska ne poklopi sa t, odnosno tako da sva
      dotadašnja podudaranja karaktera ne postanu nepodudaranja:
    </p>
    <img alt="" src="/assets/lesson2112/pic5.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>Ponavljamo isti postupak.</p>
    <img alt="" src="/assets/lesson2112/pic6.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2112/pic7.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2112/pic8.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Kada ne postoji podniska šablona koja se podudara sa t, tada tražimo najduži sufiks od t koji
      će se podudarati sa prefiksom šablona.
    </p>
    <p className={classes.indent1x}>
      Uočavamo prefiks šablona P, CTTAC, koji se poklapa sa sufiksom od t:
    </p>
    <img alt="" src="/assets/lesson2112/pic9.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Pomeramo šablon u desno tako da se taj prefiks poravna sa istim sufiksom t.
    </p>
    <img alt="" src="/assets/lesson2112/pic10.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Iz prethodna dva koraka možemo zaključiti da pomeranje šablona vršimo tako što nalazimo:
    </p>
    <p className={classes.indent1x}>- podnisku šablona koja je jednak t ili </p>
    <p className={classes.indent1x}>- prefiks šablona koji je jednak sufiksu od t </p>
    <p className={classes.indent1x}>
      i zatim ih poravnamo tako da nijedno podudaranje karaktera ne postane nepodudaranje.
    </p>
    <p className={classes.indent1x}>Kako nismo došli do kraja teksta, ponavljamo isti postupak:</p>
    <img alt="" src="/assets/lesson2112/pic11.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2112/pic12.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>Dobijamo podudaranje na poziciji 8.</p>
    <p className={classes.indent1x}>
      Pošto tražimo sva pojavljivanja šablona u tekstu, nastavljamo ovaj proces. Kada dobijemo
      potpuno podudaranje, tada tražimo najduži prefiks šablona koji se podudara sa sufiksom
      šablona. To će biti prefiks CTTAC:
    </p>
    <img alt="" src="/assets/lesson2112/pic13.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Pomeramo šablon tako da se zaokružene niske nađu jedna ispod drugog:
    </p>
    <img alt="" src="/assets/lesson2112/pic14.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2112/pic15.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>Ponavljamo isti postupak sve dok ne dođemo do kraja teksta.</p>
    <h2>Algoritam za pravilo dobrog sufiksa</h2>
    <p>
      Pre nego što definišemo funkcije koje ćemo koristi za implementaciju ovog pravila,
      definisaćemo određene pojmove.
    </p>
    <p>
      <span className={classes.red}>Definicija.</span> Granica niske je sufiks te niske koji je
      ujedno i njen prefiks.
    </p>
    <p>Na primer, nek je data sledeća niska:</p>
    <img alt="" src="/assets/lesson2112/pic16.svg" className={classes.indent1x} />
    <p>Ona ima jednu granicu CTTAC koja je dužine 5.</p>
    <p>
      <span className={classes.red}>Teorema.</span>
      {`Neka su r i s dve granice niske x, tako da važi |r| < |s|. Tada je r granica i od s.`}
    </p>
    <p className={classes.indent1x}>dokaz.</p>
    <p className={classes.indent1x}>
      Prikažimo sledeću nisku x i njene granice s i r sledećom slikom:
    </p>
    <img alt="" src="/assets/lesson2112/pic17.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Kao što možemo videti r će biti i prefiks i sufiks niske s, odnosno njena granica.
    </p>
    <p>
      <span className={classes.red}>Definicija.</span>Neka je r granica niske x i a karakter. Tada
      se granica r može prošitiri sa a ako je ar granica niske ax.
    </p>
    <img alt="" src="/assets/lesson2112/pic18.svg" className={classes.indent2x} />
    <h2>PREPROCESIRANJE</h2>
    <p>Nakon što smo definisali ove pojmove, prelazimo na preprocesiranje šablona.</p>
    <p>Koristimo dve funkcije za preprocesiranje.</p>
    <p>
      Prva funkcija, preprocesiranje1(p), popunjava niz pozicija_granice i za sve one sufikse
      šablona koji imaju najdužu granicu određuje pomeraj:
    </p>
    <p>
      * pozicija_granice[i] predstavlja poziciju početka najduže granice sufiksa šablona koji
      počinje na i-toj poziciji, odnosno pozicija_granice[i] = j:
    </p>
    <img alt="" src="/assets/lesson2112/pic19.svg" className={classes.indent1x} />
    <p>
      Ako taj sufiks nema granicu onda će ta vrednost biti nula, dok je pozicija_granice[m] = m + 1,
      gde je m dužina šablona P (jer je taj sufiks šablona prazan string) .
    </p>
    <p>Na primer, neka je dat sledeći šablon:</p>
    <h2>PRIMER</h2>
    <img alt="" src="/assets/lesson2112/pic20.svg" className={classes.indent1x} />
    <p>{`Ako znamo pozicija_granice[k] za sve k iz skupa {i, i + 1, ... , m} (m je dužina šablona P), tada možemo odrediti i pozicija_granice[i - 1]:`}</p>
    <p className={classes.indent1x}>
      Neka je j = pozicija_granice[i] i neka je to niska s kao na slici:
    </p>
    <img alt="" src="/assets/lesson2112/pic21.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Vrednost pozicija_granice[i - 1] tražimo tako što posmatramo da li se granica s može proširiti
      sa p[i-1]. Ako je p[i-1] = p[j-1] onda se ona može proširiti i tada je pozicija_granice[i-1] =
      j-1.
    </p>
    <p className={classes.indent1x}>
      Inače, ako je p[i-1] != p[j-1] tada ćemo korsititi granicu r koja je najduža granica sufiksa s
      i proveriti da li se ona, kao najduža granica posle s, može proširiti sa p[i-1]. Ta granica r
      biće na poziciji granica[j] jer je to najduža granica sufiksa s koji počinje na poziciji j.
      Označimo je sa j = pozicija_granice[j]:
    </p>
    <img alt="" src="/assets/lesson2112/pic22.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ako je p[i-1] = p[j-1] onda se granica r može proširiti i pozicija_granice[i-1] = j-1. Inače,
      ako to nije slučaj onda koristimo najdužu granicu sufiksa r i novo j će nam biti j =
      pozicija_granice[j]. Ponavljamo ovaj postupak sve dok ne dođemo do najduže granice tog
      sufiksa, tj. sve dok važi da je p[i-1] != p[j-1] za trenutno j.
    </p>
    <p>* pomeraj[j]</p>
    <p>
      Neka je t sufiks šablona P koji počinje na poziciji j, odnosno deo šablona P koji se podudara
      sa poravnatim delom teksta T:
    </p>
    <img alt="" src="/assets/lesson2112/pic23.svg" className={classes.indent1x} />
    <p>
      {`I neka postoji podniska šablona koja se podudara sa t, odnosno postoji sufiks tog šablona koji počinje na poziciji i < j tako da je t njegova najduža granica:`}
    </p>
    <img alt="" src="/assets/lesson2112/pic24.svg" className={classes.indent1x} />
    <p>Važiće da je j = polozaj_granice[i].</p>
    <p>Tada pomeramo šablon za pomeraj[j].</p>
    <img alt="" src="/assets/lesson2112/pic25.svg" className={classes.indent1x} />
    <p>Odnosno, pomeraj[j] = j - i:</p>
    <img alt="" src="/assets/lesson2112/pic26.svg" className={classes.indent1x} />
    <p>{`Pri računanju pozicija_granice[i-1]  možemo odrediti pomeraje za sve one sufikse koji predstavljaju najdužu granicu sufiksa koji počinju na nekoj poziciji iz skupa {i, i + 1, ... , m} i za koje to već nije urađeno (ako je pmeraj različit od nule) jer već imamo poznate vrednosti pozicija_granice[k] za sve k iz skupa {i, i + 1, ... , m}.`}</p>
    <p>Implementacija ove funkcije data je ispod.</p>
    <CodeEditor
      code={`
    def preprocesiranje1(pomeraj, pozicija_granice, p, m): 

      # m je dužina šablona 
      i = m 
      j = m + 1
      pozicija_granice[i] = j 
    
      while i > 0: 
        
        while j <= m and p[i - 1] != p[j - 1]: 
    
          if pomeraj[j] == 0: 
            pomeraj[j] = j - i 
          j = pozicija_granice[j] 
      
        i -= 1
        j -= 1
        pozicija_granice[i] = j `}
    />
    <p>
      Funkcija preprocesiranje2(p) određuje pomeraj za sve one sufikse šablona p koji ne
      predstavljaju granicu većih sufiksa, odnosno za one sufikse t za koje ne postoji podniska
      šablona koja se podudara sa njim.
    </p>
    <p>
      Neka je t sufiks šablona P koji počinje na poziciji i, odnosno deo šablona P koji se podudara
      sa poravnatim delom teksta T:
    </p>
    <img alt="" src="/assets/lesson2112/pic27.svg" className={classes.indent1x} />
    <p>Ako je niska s najduža granica šablona P, tada se možemo susresti sa dve situacije:</p>
    <p className={classes.indent1x}>{`1. |s| <= |t|`}</p>
    <img alt="" src="/assets/lesson2112/pic28.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>Tada pomeramo šablon za pomeraj[i] = j:</p>
    <img alt="" src="/assets/lesson2112/pic29.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>{`2. |s| > |t|`}</p>
    <img alt="" src="/assets/lesson2112/pic30.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Tada tražimo nisku r koja je granica šablona P i koja je kraći od s, odnosno tražimo najdužu
      granicu od s:
    </p>
    <img alt="" src="/assets/lesson2112/pic31.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Imaćemo da je novo j = pozicija_granice[j] i jednu od sledeće dve situacije, kao i na početku:
    </p>
    <p className={classes.indent3x}>{`1.  i <= j :`}</p>
    <img alt="" src="/assets/lesson2112/pic32.svg" className={classes.indent4x} />
    <p className={classes.indent4x}>Šablon pomeramo za pomeraj[i] = j:</p>
    <img alt="" src="/assets/lesson2112/pic33.svg" className={classes.indent4x} />
    <p className={classes.indent3x}>{`2. i > j`}</p>
    <p className={classes.indent3x}>
      Ponavljamo isti postupak, odnosno tražimo najdužu granicu od r i ispitujemo da li je ona veće
      dužine od t ili ne. Postupak nastavljamo sve dok ne dobijemo granicu šablona čija je dužina
      manja od t.
    </p>
    <p>Implementacija ove funkcije je sledeća:</p>
    <CodeEditor
      code={`
      def preprocesiranje2(pomeraj, pozicija_granice, p, m): 
        j = pozicija_granice[0]
        for i in range(m + 1):
      
          if pomeraj[i] == 0:
            pomeraj[i] = j
      
          if i == j:
            j = pozicija_granice[j]
    `}
    />
    <h2>PRETRAGA</h2>
    <p>
      Funkcija pretragaDobarSufiks(p, t) vraća sve pozicije na kojima počinje podudaranje šablona p
      sa tekstom t i ona koristi prethodne pomoćne funkcije preprocesiranja šablona p.
    </p>
    <CodeEditor
      code={`
    def pretragaDobarSufiks(p, t): 

      # Pomeraj šablona u odnosu na tekst
      pom = 0
      m = len(p) 
      n = len(t) 
    
      pozicija_granice = [0] * (m + 1) 
    
      # Inicijalizujemo sve vrednosti pomeraja na 0
      pomeraj = [0] * (m + 1) 
    
      # Uradimo preprocesiranje
      preprocesiranje1(pomeraj, pozicija_granice, p, m) 
      preprocesiranje2(pomeraj, pozicija_granice, p, m) 
    
      while pom <= n - m: 
        j = m - 1
        
        # Smanjujemo indeks j sve dok nam se karakteri podudaraju
        while j >= 0 and p[j] == t[pom + j]: 
          j -= 1
          
        # Ako se šablon nalazi na mestu pom u tekstu, 
        # onda će j će biti -1
        if j < 0: 
          print("Šablon se javlja na poziciji %d" % pom) 
          pom += pomeraj[0] 
        else: 
          
          '''p[i] != p[pom+j] stoga pomeramo šablon za
          pomeraj[j+1]  mesta'''
          pom += pomeraj[j + 1] 
    `}
    />
    <p>
      Kako bi algritam bio u potpunosti jasan, detaljnije ćemo objasniti sledeća pomeranja, odnosno
      uvećavanja promenjive pom.
    </p>
    <p>Kada dođemo do podudaranja (j = -1), promenjiva pom se uvećava na sledeći način:</p>
    <CodeEditor
      code={`
      pom += pomeraj[0] 
    `}
      className={classes.indent1x}
    />
    <p className={classes.indent1x}>Posmatrajmo sledeći deo prethodnog primera:</p>
    <img alt="" src="/assets/lesson2112/pic34.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Tražimo prefiks celog šablona (jer deo koji se podudara sa tekstom je ceo šablon) koji se
      podudara sa njegovim sufiksom, tj najdužu granicu od šablona, i pomeramo se za pomeraj od
      šablona, odnosno za pomeraj[0] = 4 - 0 = 4 mesta.
    </p>
    <img alt="" src="/assets/lesson2112/pic35.svg" className={classes.indent2x} />
    <img alt="" src="/assets/lesson2112/pic36.svg" className={classes.indent2x} />
    <p>Ako do podudaranja nije došlo(slučaj else), tada ćemo pom povećati na sledeći način:</p>
    <CodeEditor
      code={`
      pom += pomeraj[j + 1]
    `}
      className={classes.indent1x}
    />
    <p className={classes.indent1x}>Posmatrajmo sledeći deo prethodnog primera:</p>
    <img alt="" src="/assets/lesson2112/pic37.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Ovde će posle unutrašnje while petlje j biti 5 , samim tim poslednje podudaranje je bilo na
      poziciji j + 1 = 6. Pomeramo se za pomeraj[j + 1] = pomeraj[6], a to je razlika između j + 1 =
      6 i pozicije gde počinje sufiks čija je najduža granica sufiks koji počinje na poziciji 6.
    </p>
    <img alt="" src="/assets/lesson2112/pic38.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>pomeraj[6] = 6 - 2 = 4</p>
    <p className={classes.indent2x}>Pomeramo šablon za 4 mesta:</p>
    <img alt="" src="/assets/lesson2112/pic39.svg" className={classes.indent2x} />
    <img alt="" src="/assets/lesson2112/pic40.svg" className={classes.indent2x} />
  </div>
);

export default Lesson2112;
