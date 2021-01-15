import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';

const Lesson2113 = () => (
  <div className={classes.root}>
    <h1>BOYER-MOORE ALGORITAM KAO KOMBINACIJA DVA PRAVILA</h1>
    <p>
      Kombinovanjem data dva pravila dobijamo Boyer-Moore algoritam. I jedno i drugo pravilo, kada
      dođemo do nepodudaranja karaktera, preskaču određen broj poravnanja. Stoga, kada dođemo do
      nepodudaranja karaktera, izabraćemo ono pravilo koje preskače više poravnanja.
    </p>
    <p>Pokažimo to na sledećem primeru:</p>
    <img alt="" src="/assets/lesson2113/pic1.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic2.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Kako se nijedan karakter ne podudara (odmah na početku imamo nepodudaranje), onda ovde ne
      možemo primeniti Pravilo dobrog sufiksa, stoga primenjujemo Pravilo lošeg karaktera:
    </p>
    <img alt="" src="/assets/lesson2113/pic3.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Pravilo lošeg karaktera (lk) preskače 6 poravnanja (pomera P za 7 pozicija), dok pravilo
      dobrog sufiksa (ds) ne preskače nijedno poravnanja jer u ovom slučaju nije primenljivo, stoga
      biramo pravilo lošeg karaktera. To ćemo kraće zapisivati:
    </p>
    <img alt="" src="/assets/lesson2113/pic4.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic5.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic6.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic7.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic8.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic9.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic10.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic11.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic12.svg" className={classes.indent1x} />
    <img alt="" src="/assets/lesson2113/pic13.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>Dobijamo podudaranje na poziciji 18.</p>
    <p className={classes.indent1x}>
      Pošto nismo došli do kraja teksta, nastavljamo dalje. Kako se svi karakteri šablona podudaraju
      sa tekstom ovde ćemo moći da primenimo samo Pravilo dobrog sufiksa:
    </p>
    <img alt="" src="/assets/lesson2113/pic14.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Međutim kako to pomeranje prekoračuje dužinu teksta, ovde se zaustavljamo.
    </p>
    <p>Koliko je ovaj algoritam bolji od naivnog algoritma za tačno podudaranje?</p>
    <p>
      U ovom primeru, koristeći Boyer-Moore algoritam, preskočili smo ukupno 15 poravnanja za prvo
      nađeno podudaranje (6+2+7):
    </p>
    <img alt="" src="/assets/lesson2113/pic15.svg" className={classes.indent1x} />
    <p>
      Ignorisali smo sledećih 11 karaktera teksta T, odnosno oni nisu učestvovali ni u kakvom
      poređenju:
    </p>
    <img alt="" src="/assets/lesson2113/pic16.svg" className={classes.indent1x} />
    <p>
      Ovo nam pokazuje koliko je Boyer-Moore algoritam bolji od naivnog jer naivni neće preskočiti
      nijedno poravnanje i svaki karakter teksta će proći poređenje. Samim tim, Boyer-Moore
      algoritam je dosta brži, i zato ga u praksi koristimo za problem tačnog podudaranja.
    </p>
    <h2>Pravilo lošeg karaktera</h2>
    <CodeEditor
      code={`
      mapaKaraktera = {'A': 0, 'C': 1,'G': 2,'T': 3}
      def heuristikaLosKarakter(niska):
        losKarakter = [0]*len(niska)
        # Inicijalizujemo pojavljivanje svih karaktera na -1 
        # za svaki prefiks koji se završava na poziciji i
        for i in range(len(niska)):
          losKarakter[i] = [-1, -1, -1, -1]
        # Popunjavamo prava poslednja pojavljivanja datih karaktera za svaki prefiks
        for i in range(len(niska)):
          if i > 0:
            losKarakter[i][mapaKaraktera['A']] = losKarakter[i - 1][mapaKaraktera['A']]
            losKarakter[i][mapaKaraktera['C']] = losKarakter[i - 1][mapaKaraktera['C']]
            losKarakter[i][mapaKaraktera['G']] = losKarakter[i - 1][mapaKaraktera['G']]
            losKarakter[i][mapaKaraktera['T']] = losKarakter[i - 1][mapaKaraktera['T']]
          losKarakter[i][mapaKaraktera[niska[i]]] = i
        return losKarakter
      
      def pretragaLosKarakter(p, t): 
          ''' 
          Funkcija pretrage koja koristi pravilo 
        loš karakter Boyer-Moore algoritma
          '''
          m = len(p) 
          n = len(t) 
      
          # kreiramo losKarakter listu tako što zovemo 
          # funkicju preprocesiranja heuristikaLosKarakter()
          # za dati šablon p
          losKarakter = heuristikaLosKarakter(p) 
      
          # s je pozicija gde se nalati početak šablon u odnosu na tekst
        # krećemo od prvog poravnanja, tj. kad je šablon na početku teksta
          pom = 0
          while(pom <= n - m): 
              j = m - 1
      
              # Smanjujemo indeks j od šablona 
          # sve dok se karakteri šablona i teksta podudaraju za trenutno s 
              while j >= 0 and p[j] == t[pom + j]: 
                  j -= 1
      
              # Ako se šablon nalazi u tekst na poziciji s, 
              # onda će indeks j postati -1 nakon petlje iznad
              if j<0: 
                  print("Šablon se javlja na poziciji %d" %pom) 
      
                  '''	 
                      Pomeramo šablon tako da se sledeći karakter poravna 
            sa poslednjim pojavljivanjem tog karaktera u šablonu.
            Uslov s + m < n je neophodan za slučaj da se šablon
            pojavio na kraju 
                  '''
                  pom += (m - losKarakter[m-1][mapaKaraktera[t[pom + m]]] if pom + m < n else 1) 
              else: 
                  ''' 
                  Pomeramo šablon tako da se loš karakter iz teksta 
            poravna sa poslednjim pojavljivanjem tog karaktera 
            u tom prefiksu šablona.
                  '''
                  pom += j - losKarakter[j - 1][mapaKaraktera[t[pom + j]]]`}
    />
    <CodeEditor
      code={`
      # Testiramo funkciju
      t = "AAGGCTAGCGGACC"
      p = "AGCG"
      pretragaLosKarakter(p, t) `}
      result={`
      Šablon se javlja na poziciji 6`}
    />
    <h2>Pravilo dobrog sufiksa</h2>
    <CodeEditor
      code={`
      # preprocesiranje za određivanje granice sufiksa
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
              pozicija_granice[i] = j 
      
       
      # preprocesiranje za određivanje pomeraja
      def preprocesiranje2(pomeraj, pozicija_granice, p, m): 
        j = pozicija_granice[0]
        for i in range(m + 1):
      
          if pomeraj[i] == 0:
            pomeraj[i] = j
      
          if i == j:
            j = pozicija_granice[j]
      
      def pretragaDobarSufiks(t, p): 
      
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
                  
              # Ako se šablon nalazi na mestu pom u tekstu j će biti -1
              if j < 0: 
                  print("Šablon se javlja na poziciji %d" % pom) 
                  pom += pomeraj[0] 
              else: 
                  
                  '''pat[i] != pat[s+j] stoga pomeramo šablon za
                  shift[j+1]  mesta'''
                  pom += pomeraj[j + 1] `}
    />
    <CodeEditor
      code={`
    t = "AGAGATCCCTAAGACTGGATCCAGATCCGGGGATCC"
    p = "GATCC"
    pretragaDobarSufiks(t, p)`}
      result={`
    Šablon se javlja na poziciji 3
    Šablon se javlja na poziciji 17
    Šablon se javlja na poziciji 23
    Šablon se javlja na poziciji 31`}
    />
    <h2>Boyer-Moore algoritam</h2>
    <CodeEditor
      code={`
      def BoyerMooreAlg(p, t):
      pom  = 0
      m = len(p)
      n = len(t)
    
      losKarakter = heuristikaLosKarakter(p)
    
      pozicija_granice = [0] * (m + 1)
      pomeraj = [0] * (m + 1)
      preprocesiranje1(pomeraj, pozicija_granice, p, m)
      preprocesiranje2(pomeraj, pozicija_granice, p, m)
    
      while pom <= n - m:
        j = m - 1
    
        while j >= 0 and p[j] == t[pom + j]:
          j -= 1
        
        if j < 0:
          print("Šablon se javlja na poziciji %d" %pom)
          pomerajLK = (m - losKarakter[m-1][mapaKaraktera[t[pom + m]]] if pom + m < n else 1)
          pomerajDS = pomeraj[0]
          if pomerajDS >= pomerajLK:
            pom += pomerajDS
          else:
            pom += pomerajLK
        else:
          pomerajLosKarakter = j - losKarakter[j - 1][mapaKaraktera[t[pom + j]]]
          pomerajDobarSufiks = pomeraj[j+1]
          if pomerajDobarSufiks >= pomerajLosKarakter:
            pom += pomerajDobarSufiks
          else:
            pom += pomerajLosKarakter
    `}
    />
    <CodeEditor
      code={`
      t = "AGACTAAGACTGAGATCCGGGGATCC"
      p = "GATCC"
      BoyerMooreAlg(p, t)`}
      result={`
    Šablon se javlja na poziciji 13
    Šablon se javlja na poziciji 21`}
    />
    <CodeEditor
      code={`
    t = "AGAGATCCCTAAGACTGGATCCAGATCCGGGGATCC"
    p = "GATCC"
    BoyerMooreAlg(p, t)`}
      result={`
    Šablon se javlja na poziciji 3
    Šablon se javlja na poziciji 17
    Šablon se javlja na poziciji 23
    Šablon se javlja na poziciji 31`}
    />
    <CodeEditor
      code={`
      p = 'AACCTG'
      t = 'CACTTAATTTG'
      print(p[0:2])
      print(BoyerMooreAlg('AA',t))`}
      result={`
    AA
    Šablon se javlja na poziciji 5
    None`}
    />
  </div>
);

export default Lesson2113;
