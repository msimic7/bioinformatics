import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';

const Lesson21 = () => (
  <div className={classes.root}>
    <h1>PROBLEM TAČNOG PODUDARANJA</h1>
    <p>
      U ovom problemu tražimo sve pozicije na kojima šablon P počinje u tekstu T. Šablon P je kao
      igla, a tekst T kao plast sena u kojem tražimo tu iglu.
    </p>
    <p>Posmatrajmo sledeći primer:</p>
    <img alt="" src="/assets/lesson21/pic1.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      U ovom primeru imamo šablon P koji je engleska reč word i imamo tekst T u kojem se šablon P
      pojavljuje jednom i to pred sam kraj, počevši na poziciji 40.
    </p>
    <p className={classes.indent1x}>
      Ovo je pojednostavljena verzija problema poravnjanja očitavanja, ali je sjajno mesto za
      početak njegove analize.
    </p>
    <p>Naivna implementacija algoritma za tačno podudaranje.</p>
    <h2>PROBLEM TAČNOG PODUDARANJA</h2>
    <p className={classes.indent1x}>
      ulaz: niska P koji predstavlja šablon, niska T koji predstavlja tekst
    </p>
    <p className={classes.indent1x}>izlaz: sve pozicije u tekstu T gde počinje šablon P</p>
    <p>
      Prvo ćemo pokušati da rešimo dati problem na što jednostavniji način. Posmatrajmo opet isti
      primer kao na početku. Probaćemo sva moguća poravnanja šablona P sa tekstom T, odnosno za
      svaku poziciju ćemo proveriti da li dati šablon P počinje na njoj:
    </p>
    <img alt="" src="/assets/lesson21/pic2.svg" className={classes.indent1x} />
    <p>
      Implementacija u Python-u naivnog algoritam koji funkioniše na ovaj način će biti sledeća:
    </p>
    <CodeEditor
      code={`
      def naivni(p, t):
        # sadrži sve pozicije gde počinje poklapanje šablona p sa delom teksta t
        pojavljivanja = []
        # petlja koja prolazi sva poravnanja                   
        for i in range(len(t) - len(p) + 1):
            nadjen = True
            # petlja koja prolazi karaktere šablona p
            for j in range(len(p)):
                if t[i+j] != p[j]:
                    # neslaganje karaktera, odbacujemo ovo poravnanje                                   
                    nadjen = False
                    break
            if nadjen:
                pojavljivanja.append(i)`}
      customClass={classes.indent2x}
    />
    <p>Pre nego što nastavimo dalje, odgovorićemo na sledeća pitanja:</p>
    <p className={classes.indent1x}>
      1. Ako imamo šablon P dužine x i tekst T dužine y, koliko ćemo imati poravnanja?
    </p>
    <img alt="" src="/assets/lesson21/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>Imaćemo y - x + 1 poravnanja.</p>
    <p className={classes.indent1x}>
      2. Ako imamo šablon P dužine x i tekst T dužine y, koliki je najveći mogući broj poređenja
      karaktera?
    </p>
    <img alt="" src="/assets/lesson21/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Najveći mogući broj poređenja karaktera će biti x(y- x + 1), tj. to će biti ona situacija u
      kojoj će se šablon poklapati sa svakim poravnanjem koje postoji, na primer:
    </p>
    <img alt="" src="/assets/lesson21/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>
      U ovom primeru moraćemo da prođemo kroz proveru svih poravnanja i svako poravnanje će
      rezultirati uspehom.
    </p>
    <p className={classes.indent1x}>
      3. Ako imamo šablon P dužine x i tekst T dužine y, koliki je najmanji mogući broj poređenja
      karaktera?
    </p>
    <img alt="" src="/assets/lesson21/pic6.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Najmanji mogući broj poređenja karaktera će biti y- x + 1, tj. to će biti ona situacija u
      kojoj ćemo odmah na početku svakog poravnanja doći do neslaganja karaktera, na primer:
    </p>
    <img alt="" src="/assets/lesson21/pic7.svg" className={classes.indent2x} />
    <p>Vratimo se na primer sa početka:</p>
    <img alt="" src="/assets/lesson21/pic8.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ono što nas zanima jeste koliko smo ovde poređenja karaktera imali?
    </p>
    <img alt="" src="/assets/lesson21/pic9.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Imali smo ukupno 40 neslaganja i 6 slaganja, odnosno 46 poređenja karaktera.
    </p>
    <pre className={classes.indent2x}>
      {`Kako je x = |P| = 4
               y = |T| = 44`}
    </pre>
    <p className={classes.indent2x}>
      U najboljem slučaju to bi bilo 44 - 4 + 1 = 41, a u najgorem 4*(44 - 4 + 1) = 164 poređenja
      karaktera. Samim tim, rezultat broja poređenja karaktera je mnogo bliži najboljem slučaju,
      nego što je najgorem. Ovo važi za ovaj primer, ali se ispostavlja da to nije samo za njega
      tako, nego i za mnoge druge primere u praksi.
    </p>
    <h2>Naivni algoritam za tačno podudaranje</h2>
    <p className={classes.indent1x}>
      U ovom delu ćemo raditi Naivni algoritam za tačno podudaranje. Genom nad kojim ćemo ga
      testirati biće genom od phi X organizma.
    </p>
    <p className={classes.indent1x}>Njega preuzimamo pomoću komande:</p>
    <CodeEditor
      code={`
      !wget http://d28rh4a8wq0iu5.cloudfront.net/ads1/data/phix.fa`}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
    def procitajGenom(imeDatoteke):
        genom = ''
        with open(imeDatoteke,'r') as f:
            for line in f:
                if not line[0] == '>':
                    genom += line.rstrip()
        return genom

    genom = procitajGenom('phix.fa')
    genom`}
      result={`
      GAGTTTTATCGCTTCCATGACGCAGAAGTTAACACTTTCGGATATTTCTGATGAGTCGAAAAAT
      TATCTTGATAAAGCAGGAATTACTACTGCTTGTTTACGAATTAAATCGAAGTGGACTGCTGGCG
      GAAAATGAGAAAATTCGACCTATCCTTGCGCAGCTCGAGAAGCTCTTACTTTGCGACCTTTCGC
      CATCAACTAACGATTCTGTCAAAAACTGACGCGTTGGATGAGGAGAAGTGGCTTAATATGCTTG
      GCACGTTCGTCAAGGACTGGTTTAGATATGAGTCACATTTTGTTCATGGTAGAGATTCTCTTGT
      TGACATTTTAAAAGAGCGTGGATTACTATCTGAGTCCGATGCTGTTCAACCACTAATAGGTAAG
      AAATCATGAGTCAAGTTACTGAACAATCCGTACGTTTCCAGACCGCTTTGGCCTCTATTAAGCT
      CATTCAGGCTTCTGCCGTTTTGGATTTAACCGAAGATGATTTCGATTTTCTGACGAGTAACAAA
      GTTTGGATTGCTACTGACCGCTCTCGTGCTCGTCGCTGCGTTGAGGCTTGCGTTTATGGTACGC
      TGGACTTTGTGGGATACCCTCGCTTTCCTGCTCCTGTTGAGTTTATTGCTGCCGTCATTGCTTA
      TTATGTTCATCCCGTCAACATTCAAACGGCCTGTCTCATCATGGAAGGCGCTGAATTTACGGAA
      AACATTATTAATGGCGTCGAGCGTCCGGTTAAAGCCGCTGAATTGTTCGCGTTTACCTTGCGTG
      TACGCGCAGGAAACACTGACGTTCTTACTGACGCAGAAGAAAACGTGCGTCAAAAATTACGTGC
      `}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
      def naivni(p, t):
        # u sledećem nizu beležimo svaki ofset gde se pojavljuje naš šablon u tekstu
        pojavljivanja = []
        # prolazimo sva poravnanja
        for i in range(len(t) - len(p) + 1):
            # promenljiva nadjen će biti True ako smo pronašli traženi šablon u tekstu
            nadjen = True
            # prolazimo karaktere šablona
            for j in range(len(p)):
                # čim dođemo do prvog neslaganja šablona sa delom teksta koji posmatramo, izlazimo iz unutrašnje for petlje
                if t[i+j] != p[j]:
                    nadjen = False
                    break
            if nadjen:
                pojavljivanja.append(i)
        return pojavljivanja`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>Testirajmo ovu funkciju na sledećem, jednostavnom primeru:</p>
    <CodeEditor
      code={`
        t = 'AGCTTAGATAGC'
        p = 'AG'
        naivni(p, t)`}
      result={`
        [0, 5, 9]`}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
        t[5:7]`}
      result={`
        AG`}
      customClass={classes.indent2x}
    />
    <h2>Podudaranja sa veštački napravljenim očitavanjima</h2>
    <p className={classes.indent1x}>Sledeća funkcija generiše nasumična očitavanja.</p>
    <CodeEditor
      code={`
      import random
      def generisiOcitavanja(genom, brojOcitavanja, duzinaOcitavanja):
        ocitavanja = []
        for _ in range(brojOcitavanja):
          start = random.randint(0, len(genom) - duzinaOcitavanja) - 1
          ocitavanja.append(genom[start : start + duzinaOcitavanja])
        return ocitavanja`}
      result={`
        AG`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>Sledeća funkcija generiše nasumična očitavanja.</p>
    <CodeEditor
      code={`
    #kontruišemo 100 očitavanja dužine 100
    ocitavanja = generisiOcitavanja(genom, 100, 100)

    #brojimo koliko se očitavanja poklapa sa nekim delom genoma
    brojPodudaranja = 0
    for o in ocitavanja:
        podudaranja = naivni(o, genom)
        # ako je njegova dužina nula, onda nemamo podudaranje, inače imamo
        if len(podudaranja) > 0:
            brojPodudaranja += 1
    print('%d / %d ocitavanja se poklapa!' % (brojPodudaranja, len(ocitavanja)))`}
      result={`
    100 / 100 ocitavanja se poklapa!`}
      customClass={classes.indent2x}
    />
    <h2>Podudaranja sa realnim sekvencionim očitavanjima</h2>
    <p className={classes.indent1x}>
      Sada ćemo koristiti realna sekvencionim očitavanjima. Preuzimamo ih na sledeći način:
    </p>
    <CodeEditor
      code={`
      !wget http://d28rh4a8wq0iu5.cloudfront.net/ads1/data/ERR266411_1.first1000.fastq`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>
      Za čitanje ove datoteke koristimo funkciju koju smo radili u prethodnom delu.
    </p>
    <CodeEditor
      code={`
    def procitajFASTQ(imeDatoteke):
        sekvence = [] 
        with open(imeDatoteke) as f:
            while True:
                f.readline() 
                sekv = f.readline().rstrip() 
                f.readline() 
                f.readline() #ovde preskačemo i kvalitet baza
                if len(sekv) == 0: 
                    break
                sekvence.append(sekv)   
        return sekvence
    phix_ocitavanja= procitajFASTQ('ERR266411_1.first1000.fastq')`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>Posmatramo odnos između baza u datim očitavanjima:</p>
    <CodeEditor
      code={`
      import collections
      count = collections.Counter()
      for ocitavanje in phix_ocitavanja:
          count.update(ocitavanje)
      count`}
      result={`
      Counter({'A': 28426, 'C': 21890, 'G': 19147, 'N': 6, 'T': 30531})`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>
      Posmatramo koliko imamo poklapanja ovih očitavanja sa delovima referentnog genoma.
    </p>
    <CodeEditor
      code={`
    brojPodudaranja = 0
    n = 0
    for ocitavanje in phix_ocitavanja:
        podudaranja = naivni(ocitavanje, genom)
        n += 1
        if len(podudaranja) > 0:
            brojPodudaranja += 1
    print('%d / %d ocitavanja se poklapa!' % (brojPodudaranja, n))`}
      result={`
      7 / 1000 ocitavanja se poklapa!`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>
      Ovo je iznenađujuće jer su ovo baš očitavanja koja su uzeta iz ovog genoma. Razlozi toga mogu
      biti sledeći:
    </p>
    <p className={classes.indent2x}>- Greške sekvencione mašine pri čitanju azotnih baza</p>
    <p className={classes.indent2x}>
      - Razlike između referentnog genoma i genoma kojeg želimo da sekvencioniramo.
    </p>
    <p className={classes.indent1x}>
      U našem slučaju verovatno je ovakav rezultat zbog grešaka sekvencione mašine. Zato ćemo umesto
      celih očitavanja (100 nukleotida) gledati samo prvih 30 nukleotida (jer ove greške su češće
      pri kraju očitavanja, stoga gledanjem prvog dela očitavanja izbegavamo te greške).
    </p>
    <CodeEditor
      code={`
      brojPodudaranja = 0
      n = 0
      for ocitavanje in phix_ocitavanja:
        ocitavanje = ocitavanje[:30]
        podudaranja = naivni(ocitavanje, genom)
        n += 1
        if len(podudaranja) > 0:
          brojPodudaranja += 1
      print('%d / %d ocitavanja se poklapa!' % (brojPodudaranja, n))`}
      result={`
      459 / 1000 ocitavanja se poklapa!`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>
      Još uvek broj poklapanja nije zadovoljavajući. Kao razlog toga može biti to što je genom
      dvolančani i očitavanja mogu doći sa bilo kog lanca. Mi smo ovde postavili kao da su sva
      očitavanja sa istog lanca, što ne mora biti slučaj.
    </p>
    <p className={classes.indent1x}>
      Ovaj problem rešavamo tako što ćemo osim poređenja očitavanje, porediti i njegov inverzni
      komplement sa genomom. To će obuhvatiti slučaj u kome je očitavanje došlo sa drugog lanca
      genoma.
    </p>
    <CodeEditor
      code={`
    def obrnutiKomplement(s):
        komplement = {'A':'T', 'C':'G', 'G':'C', 'T':'A', 'N':'N'}
        t = ''
        for i in range(len(s)):
            t = komplement[s[i]] + t
        return t`}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
      brojPodudaranja = 0
      n = 0
      for ocitavanje in phix_ocitavanja:
        ocitavanje = ocitavanje[:30]
        podudaranja = naivni(ocitavanje, genom)
        podudaranja.extend(naivni(obrnutiKomplement(ocitavanje), genom))
      
        n += 1
        if len(podudaranja) > 0:
          brojPodudaranja += 1
      print('%d / %d ocitavanja se poklapa!' % (brojPodudaranja, n))`}
      result={`
        932 / 1000 ocitavanja se poklapa!`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
      Imamo 932 poklapanja od 1000. Još uvek nije 100%, ali to je i očekivano zbog grešaka koje se
      dešavaju. Kada smo uzeli prvi deo očitavanja i uključili i njihove inverze komplmente rezultat
      očitavanja koja se poklapaju se drastično povećao. Mada, sama činjenica da smo uzimali prvih
      30 od 100 nukleotida svakog očitavanja nam govori da ovo i nije ono što želimo da radimo jer
      želimo da dozvolimo razlike koje postoje između različitih jedinki. Zato ćemo posle algoritama
      tačnog podudaranja razmatrati algoritme za približno podudaranje.
    </p>
  </div>
);

export default Lesson21;
