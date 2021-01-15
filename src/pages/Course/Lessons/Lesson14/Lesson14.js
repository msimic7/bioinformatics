/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';

const Lesson14 = () => (
  <div className={classes.root}>
    <h1>FASTQ format za čuvanje očitavanja dobijenih prilikom sekvencioniranja</h1>
    <p className={classes.indent1x}>
      FASTQ format jeste tekstualni format za čuvanje svih očitavanja koja smo dobili prilikom DNK
      sekvencioniranja.
    </p>
    <p className={classes.indent1x}>Primer kako čuvamo jedno očitavanje u FASTQ formatu:</p>
    <img alt="" src="/assets/lesson14/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>Imamo četiri linije informacija.</p>
    <img alt="" src="/assets/lesson14/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Prva linija sadrži ime očitavanja i može sadržati i informacije o:
    </p>
    <p className={classes.indent3x}>- samom eksperimentu pomoću kojeg smo dobili dato očitavanje</p>
    <p className={classes.indent3x}>- tome kakva je mašina korišćenja</p>
    <p className={classes.indent3x}>
      - tome na kom je delu ploče grupa fragmenata, iz kojeg smo dobili dato očitavanje, smeštena
    </p>
    <p className={classes.indent3x}>
      Nijedna od ovih informacija nam neće biti značajna za analiziranje očitavanja.
    </p>
    <img alt="" src="/assets/lesson14/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Druga linija sadrži samo očitavanje, dok treću liniju možemo ignorisati jer nema nikakvo
      posebno značenje za analiziranje očitavanja.
    </p>
    <img alt="" src="/assets/lesson14/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      Četvrta linija predstavlja ASCII-enokidiran kvalitet baze Q za svaku bazu iz očitavanja, tj.
      koristimo karakter kako bismo enkodirali brojčanu vrednost Q.
    </p>
    <p className={classes.indent3x}>ASCII tabla data je slikom ispod.</p>
    <img alt="" src="/assets/lesson14/pic5.svg" className={classes.indent4x} />
    <p className={classes.indent4x}>
      Kako vrednost kvaliteta baze ne mora biti ceo broj, pitamo se kako ga onda predstavljamo
      pomoću karaktera kojima odgovaraju celi brojevi 0-255?
    </p>
    <p className={classes.indent5x}>
      To radimo pomoću metode Fred 33 (eng. Phred33), tako što ćemo zaokružiti vrednost Q na
      najbliži ceo broj, dodati mu 33 i onda pomoću ASCII tabele odrediti karakter koji odgovara tom
      celom broju.
    </p>
    <p className={classes.indent5x}>
      Suprotni smer, odnosno ako imamo dat ASCII karakter koji predstavlja kvalitet baze, tada ćemo
      brojčani kvalitet baze (Q) dobiti tako što ćemo taj karakter prebaciti u ceo broj pomoću ASCII
      tabele i od njega oduzeti 33.
    </p>
    <p className={classes.indent4x}>Funkcije koje ćemo korsititi za to su sledeće:</p>

    <CodeEditor
      code={`
      def QuFred33(Q):
        return chr(Q + 33)
        # Q je kvalitet baze koji je već zaokružen na ceo broj
        # funkcija chr konvertuje ceo broj u odgovarajući karakter pomoću ASCII tabele
        `}
      result=""
      customClass={classes.indent5x}
    />
    <CodeEditor
      code={`
      def fred33uQ(c):
      return ord(c) - 33
      # c je kvalitet baze koji je predstavljen metodom Fred 33 kao karakter
      # funkcija ord konvertuje karakter u odgovarajući ceo broj pomoću ASCII tabele
        `}
      result=""
      customClass={classes.indent5x}
    />

    <p className={classes.indent2x}>
      Cela datoteka u FASTQ formatu koja sadrži informacije o svim očitavanjima koje smo
      sekvencionirali će biti predstavljena na sledeći način (ovde ćemo prikazati samo dva
      očitavanja, iako će njih biti oko milion ili čak milijardu):
    </p>
    <img alt="" src="/assets/lesson14/pic7.svg" className={classes.indent2x} />
    <h2 className={classes.indent1x}>Rad sa očitavanjima koja su u FASTQ formatu</h2>
    <p className={classes.indent2x}>
      Učitavamo datoteku koja je u FASTQ formatu i koja sadrži prvih 1000 očitavanja ljudskog
      genoma:
    </p>
    <CodeEditor
      code={`
      !wget http://d28rh4a8wq0iu5.cloudfront.net/ads1/data/SRR835775_1.first1000.fastq`}
      result=""
      customClass={classes.indent3x}
    />
    <p className={classes.indent2x}>
      Funkcija koja čita sekvence i kvalitete baza za svako očitavanje iz gore navedene datoteke:
    </p>
    <CodeEditor
      code={`
      def procitajFASTQ(imeDatoteke):
        # niz čiji su elementi sekvence svih očitavanja iz datoteke
        sekvence = []
        # niz čiji su elementi kvaliteti baza svih očitavanja iz datoteke
        kvaliteti = []
        with open(imeDatoteke) as f:
          while True:
            # preskačemo prvu liniju jer nam je to ime očitavanja
            f.readline()
            # uzimamo sekvencu očitavanja i skidamo beline sa desne strane pomoću rstrip() funkcije
            sekv = f.readline().rstrip()
            #preskačemo treću liniju koja počinje sa +
            f.readline()
            # uzimamo kvalitet baza očitavanja i skidamo beline sa desne strane pomoću rstrip() funkcije
            kval = f.readline().rstrip()
            # ako smo došli do kraja funkcije, izlazimo iz while petlje
            if len(sekv) == 0:
              break
            # dodajemo sekvencu za trenutno očitavanje
            sekvence.append(sekv)
            # dodajemo kvalitet baza za trenutno očitavanje
            kvaliteti.append(kval)
        return sekvence, kvaliteti
        
      sekvence, kvaliteti = procitajFASTQ('SRR835775_1.first1000.fastq')`}
      result=""
      customClass={classes.indent3x}
    />
    <p className={classes.indent2x}>Čitamo sekvence i kvalitete baza za prvih 5 očitavanja:</p>
    <CodeEditor
      code={`
      for i in range(5):
        print(sekvence[i])`}
      result={`
      TAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTCACCCTAACCCTAACCCTAACCGTATCCGTCACCCTAACCCTAAC
      TAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACC
      TAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGG
      TAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAGGGTTAAGGGTTGGGGGTTAGGGGTAGGGGTAGGGTTA
      CTAACCCTAACCCTAACCCTAACCCTACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCTAACCCAACCCTAACCCTAACCCTCACC`}
      customClass={classes.indent3x}
    />
    <CodeEditor
      code={`
      for i in range(5):
        print(kvaliteti[i])`}
      result={`
      ???B1ADDD8??BB+C?B+:AA883CEE8?C3@DDD3)?D2;DC?8?=BAD=@C@(.6.6=A?=?@##################################
      CCCFFFFFGHHGHJJJJJIJGIIJJJJJJJIJIJJJJJFJJFGIIIIH=CBFCF=CCEG)=>EHB2@@DEC>;;?=;(=?BBD?59?BA###########
      @@<DD?DDHHH<CBHII:CFGIGAGHIIG?CCGGE0BDHIIHIGICH8=FHGI=@EHGGGEEHH>);?CC@.;(=;?59,5<A599?CB>ABBCB><88A
      @CCFFDDFHHHDFHIJJCGGIJJHIIHJC?DHHIJ0?DGHI9BBFHICGGIGI=CDEGI=?AAEF7@?################################
      @<@FDFDDBBFHH@EBGGGEH@FFHE;EHIEGGBHG?)9?8BDGGBGGBCDGI=93=C6==C;CCD(?@>@#############################`}
      customClass={classes.indent3x}
    />
    <p className={classes.indent2x}>
      Funkcije koje konvertuju ASCII karaktere koji predstavljaju kvalitet baze u brojčanu vrednost,
      i obrnuto, pomoću metode Fred33:
    </p>
    <CodeEditor
      code={`
      def QuFred33(Q):
        return chr(Q + 33)
      
      def fred33uQ(c):
        return ord(c) - 33`}
      result=""
      customClass={classes.indent3x}
    />
    <p className={classes.indent2x}>
      {`Iz gore priloženog možemo videti da kako se približavamo kraju očitavanja imamo često karakter
      '#' za kvalitet baze. Sada ćemo videti njegovu brojčanu vrednost:`}
    </p>
    <CodeEditor
      code={`
      fred33uQ('#')`}
      result={`
      2`}
      customClass={classes.indent3x}
    />
    <p className={classes.indent3x}>
      Ovo ima smisla jer kako smo već i videli kako se približavamo kraju očitavanja tako je
      verovatnoća da smo dobro odredili bazu manja, pa samim tim je i Q manje.
    </p>
    <p className={classes.indent2x}>Pogledajmo kolika će nam ta vrednost biti za J:</p>
    <CodeEditor
      code={`
      fred33uQ('J')`}
      result={`
      41`}
      customClass={classes.indent3x}
    />
    <p className={classes.indent2x}>
      Pravimo histogram koji će nam pokazati koliko imamo kvaliteta vrednosti 0-50:
    </p>
    <CodeEditor
      code={`
      def napraviHist(kvaliteti):
        hist = [0] * 50
        # prolazimo sve elemente iz niza kvaliteta
        for kvalitet in kvaliteti:
          # za svaki string koji predstavlja kvalitet baza određenog očitavanja gledamo kvalitet svake baze ponaosob
          for fred in kvalitet:
            q = fred33uQ(fred)
            hist[q] += 1
        return hist
      h = napraviHist(kvaliteti)
      print(h)`}
      result={`
      [0, 0, 6178, 0, 0, 54, 108, 574, 345, 83, 193, 124, 79, 165, 49, 236, 184, 327,
      514, 238, 531, 254, 313, 798, 992, 888, 1396, 1488, 993, 1752, 3387, 4487, 3248,
      5476, 8375, 11814, 4243, 7827, 6579, 8179, 9349, 8180, 0, 0, 0, 0, 0, 0, 0, 0]`}
      customClass={classes.indent3x}
    />
    <CodeEditor
      code={`
      #predstavljamo te podatke na grafiku
      import matplotlib.pyplot as plt
      plt.bar(range(len(h)), h)
      plt.show()`}
      result=""
      customClass={classes.indent3x}
    />
    <p className={classes.indent3x}>
      Možemo zapaziti da ima dosta baza sa kvalitetom Q = 2, to nam govori da postoji dosta baza za
      koje The base caller nije siguran da li ih je dobro odredio (bilo je više različitih boja i
      njihov odnos je bio sličan). Kao što smo već i rekli, to nam se često dešava pri kraju
      očitavanja.
    </p>
    <h2 className={classes.indent1x}>Analiziranje očitavanja u zavisnosti od njihove pozicije</h2>
    <p className={classes.indent2x}>
      Sadržaj GC (odnos između broja zbira broja G i C baza naspram broja svih baza) je nešto što je
      različito od vrste do vrste. Odnosno, različite vrste će imati različite karakteristike
      sadržaja GC. Ovde želimo da vidimo kako se sadržaj GC menja kako se pomeramo kroz očitavanje.
      Očekujemo da se neće drastično promeniti, tj. da će ostati približno konstantan. Ali ako se
      desi greška, na primer ako se desi jedan loš ciklus, onda možemo očekivati da ćemo videti
      različiti odnos zbira G i C baza u odnosu na ostale baze:
    </p>
    <CodeEditor
      code={`
      def GCuZavisnostiOdPozicije(sekvence):
        gc = [0] * 100
        ukupno = [0] * 100
        for sekvenca in sekvence:
          for i in range(len(sekvenca)):
            if sekvenca[i] == 'C' or sekvenca[i] == 'G':
              gc[i] += 1
            ukupno[i] += 1
        # Delimo broj GC sadržaja sa ukupnim brojem da bismo dobili prosečan broj na svakoj poziciji
        for i in range(len(gc)):
          if ukupno[i] > 0:
            gc[i] /= float(ukupno[i])
        return gc
        
      gc = GCuZavisnostiOdPozicije(sekvence)
      plt.plot(range(len(gc)), gc)
      plt.show()`}
      result=""
      customClass={classes.indent3x}
    />
    <p className={classes.indent3x}>
      Kao što možemo videti sa grafika sadržaj GC je skoro pa konstantan, sa malim oscilacijama. On
      je veći od 0,5 (obično između 0,56 i 0,58), odakle možemo zaključiti da je zbir broja G i C
      baza veći od zbira broja A i T baza.
    </p>
    <p className={classes.indent2x}>
      Koristeći collections.Counter(), sa kojim smo se već susreli, dobijamo sledeće:
    </p>
    <CodeEditor
      code={`
      import collections
      brojac = collections.Counter()
      for sekv in sekvence:
        brojac.update(sekv)
      brojac`}
      result={`
      Counter({'A': 21132, 'C': 28272, 'G': 28742, 'N': 18, 'T': 21836})`}
      customClass={classes.indent3x}
    />
    <p className={classes.indent3x}>
      {`Ovo nam potvrđuje da imamo više G i C od A i T baza. Još nešto što zapažamo jeste da imamo i
      slovo 'N', koje nam znači da The base caller uopšte ne odredi bazu jer nema nikakvu sigurnost
      u to šta bi ona mogla biti.`}
    </p>
  </div>
);

export default Lesson14;
