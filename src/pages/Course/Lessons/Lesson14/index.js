/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';

const Lesson14 = () => (
  <div className={classes.root}>
    <h1>FASTQ FORMAT ZA ČUVANJE OČITAVANJA DOBIJENIH PRILIKOM SEKVENCIONIRANJA</h1>
    <p className={classes.ml8}>
      FASTQ format jeste tekstualni format za čuvanje svih očitavanja koja smo dobili prilikom DNK
      sekvencioniranja.
    </p>
    <p className={classes.ml8}>Primer kako čuvamo jedno očitavanje u FASTQ formatu:</p>
    <Image src="/assets/lesson14/pic1.svg" className={classes.ml18} />
    <p className={classes.ml18}>Imamo četiri linije informacija.</p>
    <Image src="/assets/lesson14/pic2.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Prva linija sadrži ime očitavanja i može sadržati i informacije o:
    </p>
    <p className={classes.ml28}>- samom eksperimentu pomoću kojeg smo dobili dato očitavanje</p>
    <p className={classes.ml28}>- tome kakva je mašina korišćenja</p>
    <p className={classes.ml28}>
      - tome na kom je delu ploče grupa fragmenata, iz kojeg smo dobili dato očitavanje, smeštena
    </p>
    <p className={classes.ml28}>
      Nijedna od ovih informacija nam neće biti značajna za analiziranje očitavanja.
    </p>
    <Image src="/assets/lesson14/pic3.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Druga linija sadrži samo očitavanje, dok treću liniju možemo ignorisati jer nema nikakvo
      posebno značenje za analiziranje očitavanja.
    </p>
    <Image src="/assets/lesson14/pic4.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Četvrta linija predstavlja ASCII-enokidiran kvalitet baze Q za svaku bazu iz očitavanja, tj.
      koristimo karakter kako bismo enkodirali brojčanu vrednost Q.
    </p>
    <p className={classes.ml28}>ASCII tabela data je slikom ispod.</p>
    <Image src="/assets/lesson14/pic5.svg" className={classes.ml38} />
    <p className={classes.ml38}>
      Kako vrednost kvaliteta baze ne mora biti ceo broj, pitamo se kako ga onda predstavljamo
      pomoću karaktera kojima odgovaraju celi brojevi 0-255?
    </p>
    <p className={classes.ml48}>
      To radimo pomoću metode Fred 33 (eng. Phred33), tako što ćemo zaokružiti vrednost Q na
      najbliži ceo broj, dodati mu 33 i onda pomoću ASCII tabele odrediti karakter koji odgovara tom
      celom broju.
    </p>
    <p className={classes.ml48}>
      Suprotni smer, odnosno ako imamo dat ASCII karakter koji predstavlja kvalitet baze, tada ćemo
      brojčani kvalitet baze (Q) dobiti tako što ćemo taj karakter prebaciti u ceo broj pomoću ASCII
      tabele i od njega oduzeti 33.
    </p>
    <p className={classes.ml38}>Funkcije koje ćemo koristiti za to su sledeće:</p>

    <CodeEditor
      code={`
      def QuFred33(Q):
        return chr(Q + 33)
        # Q je kvalitet baze koji je već zaokružen na ceo broj
        # funkcija chr konvertuje ceo broj u odgovarajući karakter pomoću ASCII tabele
        `}
      result=""
      customClass={classes.ml48}
    />
    <CodeEditor
      code={`
      def fred33uQ(c):
      return ord(c) - 33
      # c je kvalitet baze koji je predstavljen metodom Fred 33 kao karakter
      # funkcija ord konvertuje karakter u odgovarajući ceo broj pomoću ASCII tabele
        `}
      result=""
      customClass={classes.ml48}
    />

    <p className={classes.ml18}>
      Cela datoteka u FASTQ formatu koja sadrži informacije o svim očitavanjima koje smo
      sekvencionirali će biti predstavljena na sledeći način (ovde ćemo prikazati samo dva
      očitavanja, iako će njih biti oko milion ili čak milijardu):
    </p>
    <Image src="/assets/lesson14/pic7.svg" className={classes.ml18} />
    <h2 className={classes.ml8}>Rad sa očitavanjima koja su u FASTQ formatu</h2>
    <p className={classes.ml18}>
      Učitavamo datoteku koja je u FASTQ formatu i koja sadrži prvih 1000 očitavanja ljudskog
      genoma:
    </p>
    <CodeEditor
      code={`
      !wget http://d28rh4a8wq0iu5.cloudfront.net/ads1/data/SRR835775_1.first1000.fastq`}
      result=""
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
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
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Čitamo sekvence i kvalitete baza za prvih 5 očitavanja:</p>
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
      customClass={classes.ml28}
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
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
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
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
      {`Iz gore priloženog možemo videti da kako se približavamo kraju očitavanja imamo često karakter
      '#' za kvalitet baze. Sada ćemo videti njegovu brojčanu vrednost:`}
    </p>
    <CodeEditor
      code={`
      fred33uQ('#')`}
      result={`
      2`}
      customClass={classes.ml28}
    />
    <p className={classes.ml28}>
      Ovo ima smisla jer kako smo već i videli kako se približavamo kraju očitavanja tako je
      verovatnoća da smo dobro odredili bazu manja, pa samim tim je i Q manje.
    </p>
    <p className={classes.ml18}>Pogledajmo kolika će nam ta vrednost biti za J:</p>
    <CodeEditor
      code={`
      fred33uQ('J')`}
      result={`
      41`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
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
      customClass={classes.ml28}
    />
    <CodeEditor
      code={`
      #predstavljamo te podatke na grafiku
      import matplotlib.pyplot as plt
      plt.bar(range(len(h)), h)
      plt.show()`}
      customClass={classes.ml28}
    />
    <p className={classes.ml28}>Grafik koji će se dobiti nakon pokretanja ovog koda je sledeći:</p>
    <Image src="/assets/lesson14/grafik1.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Možemo zapaziti da ima dosta baza sa kvalitetom Q = 2, to nam govori da postoji dosta baza za
      koje Određivač baza nije siguran da li ih je dobro odredio (bilo je više različitih boja i
      njihov odnos je bio sličan). Kao što smo već i rekli, to nam se često dešava pri kraju
      očitavanja.
    </p>
    <h2 className={classes.ml8}>Analiziranje očitavanja u zavisnosti od njihove pozicije</h2>
    <p className={classes.ml18}>
      Sadržaj GC (odnos između broja G i C baza naspram broja svih baza) je nešto što je različito
      od vrste do vrste. Odnosno, različite vrste će imati različite karakteristike sadržaja GC.
      Ovde želimo da vidimo kako se sadržaj GC menja kako se pomeramo kroz očitavanje. Očekujemo da
      se neće drastično promeniti, tj. da će ostati približno konstantan. Ali ako se desi greška, na
      primer ako se desi jedan loš ciklus, onda možemo očekivati da ćemo videti različiti odnos
      broja G i C baza u odnosu na broj svih baza:
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
      customClass={classes.ml28}
    />
    <p className={classes.ml28}>Grafik koji će se dobiti nakon pokretanja ovog koda je sledeći:</p>
    <Image src="/assets/lesson14/grafik2.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Sadržaj GC je skoro pa konstantan, sa malim oscilacijama. On je veći od 0.5 (obično između
      0.56 i 0.58), odakle možemo zaključiti da je zbir broja G i C baza veći od zbira broja A i T
      baza.
    </p>
    <p className={classes.ml18}>
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
      customClass={classes.ml28}
    />
    <p className={classes.ml28}>
      {`Ovo nam potvrđuje da imamo više G i C od A i T baza. Još nešto što zapažamo jeste da imamo i
      slovo 'N', koje nam znači da Određivač baza uopšte ne odredi bazu jer nema nikakvu sigurnost
      u to šta bi ona mogla biti.`}
    </p>
  </div>
);

export default Lesson14;
