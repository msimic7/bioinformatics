import React from 'react';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';
import classes from '../Lesson.module.scss';

const Lesson12 = () => (
  <div className={classes.root}>
    <h1>GENOM KAO NISKA</h1>
    <p className={classes.ml8}>
      DNK možemo predstaviti pomoću jednog njegovog lanca (drugi lanac dobijamo njegovim
      komplementiranjem). Taj DNK lanac predstavljamo kao niz njegovih nukleotida koje ćemo
      označavati prema azotnim bazama koje sadrže tj. slovima A (Adenin), C (Citozin), G (Guanin) i
      T (Timin).
    </p>
    <Image src="/assets/lesson12/pic1.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      {`Tada deo DNK lanca koji je prikazan na slici možemo predstaviti kao nisku S koja sadrži
      elemente iz skupa {A, C, G, T}.`}
    </p>
    <Image src="/assets/lesson12/pic2.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      {`Dakle, genom određenog organizma možemo predstaviti kao nisku čiji su karakteri iz skupa
      {A, C, G, T}.`}
    </p>
    <p className={classes.ml8}>
      Na primer, deo genoma enterobakterije fag lambda je prikazan ispod.
    </p>
    <Image src="/assets/lesson12/pic3.svg" className={classes.ml18} />
    <h2 className={classes.ml8}>Rad sa niskama</h2>
    <p className={classes.ml18}>Dužina niske:</p>
    <CodeEditor
      code={`
      s = 'ACGTGCTAGCTAGCAG'
      len(s)`}
      result={`
      16`}
      customClass={classes.ml28}
    />
    <pre className={`${classes.code} ${classes.ml18}`} />
    <p className={classes.ml18}>Podniske date niske s:</p>
    <CodeEditor
      code={`
      s[2:6]`}
      result={`
      GTGC`}
      customClass={classes.ml28}
    />
    <CodeEditor
      code={`
      s[:5]`}
      result={`
      ACGTG`}
      customClass={classes.ml28}
    />
    <CodeEditor
      code={`
      s[-4:]`}
      result={`
      GCAG`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Konkatenacija (nadovezivanje) dve niske p i q:</p>
    <CodeEditor
      code={`
      p = 'GCTAA'
      q = 'ACAAA'
      p + q`}
      result={`
      GCTAAACAAA`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Poređenje dve niske:</p>
    <CodeEditor
      code={`
      p == q`}
      result={`
      False`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
      Funkcija s.join(l) vraća nisku dobijenu nadovezivanjem elemenata liste l tako da je između
      svakog elementa te liste dodata niska s:
    </p>
    <CodeEditor
      code={`
      baze = ['A', 'C', 'G', 'T']
      ','.join(baze)`}
      result={`
      A,C,G,T`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
      Rad sa bibliotekom random. Ako dodamo seed tada će nam pri svakom pokretanju vraćati isti
      element, inače će vraćati različiti:
    </p>
    <CodeEditor
      code={`
      import random
      random.choice('ACGT')`}
      result={`
      A`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>*ovde pri svakom pokretanju vraća G:</p>
    <CodeEditor
      code={`
      random.seed(7)
      random.choice('ACGT')`}
      result={`
      G`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Pravimo nisku dužine 10 (svako slovo je nasumično birano):</p>
    <CodeEditor
      code={`
      sekvenca = ''.join([random.choice('ACGT') for _ in range(10)])
      sekvenca`}
      result={`
      CTAAAGACAA`}
      customClass={classes.ml28}
    />
    <h2 className={classes.ml8}>Manipulacija sa DNK niskama</h2>
    <p className={classes.ml18}>
      Funkcija koja traži najveći zajednički prefiks za dve niske s1 i s2:
    </p>
    <CodeEditor
      code={`
      def najduziZajednickiPrefiks(s1,s2):
        i = 0
        while i < len(s1) and i < len(s2) and s1[i] == s2[i]:
          i += 1
        return s1[:i]
      najduziZajednickiPrefiks('AAATGCA','AACGATAAA')`}
      result={`
      AA`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Funkcija koja određuje komplementaran DNK lanac datom DNK lancu:</p>
    <CodeEditor
      code={`
      komplement = {'A':'T', 'C':'G', 'G':'C', 'T':'A'}
      komplement['T']`}
      result={`
      A`}
      customClass={classes.ml28}
    />
    <CodeEditor
      code={`
      def obrnutiKomplement(s):
        t = ''
        for i in range(len(s)):
          t = komplement[s[i]] + t
        return t
      obrnutiKomplement('CGATGATA')`}
      result={`
      TATCATCG`}
      customClass={classes.ml28}
    />
    <h2 className={classes.ml8}>Kako parsiramo dati genom</h2>
    <p className={classes.ml18}>
      Datoteka sa genomom enterobakterije fag lambda izgleda na sledeći način:
    </p>
    <CodeEditor
      code={`
      >gi|9626243|ref|NC_001416.1| Enterobacteria phage lambda, complete genome
      GGGCGGCGACCTCGCGGGTTTTCGCTATTTATGAAAATTTTCCGGTTTAAGGCGTTTCCGTTCTTCTTCG
      TCATAACTTAATGTTTTTATTTAAAATACCCTCTGAAAAGAAAGGAAACGACAGGTGCTGAAAGCGAGGC
      TTTTTGGCCTCTGTCGTTTCCTTTCTCTGTTTTTGTCCGTGGAATGAACAATGGAAGTCAACAAAAAGCA
      GCTGGCTGACATTTTCGGTGCGAGTATCCGTACCATTCAGAACTGGCAGGAACAGGGAATGCCCGTTCTG
      ...`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Preuzimamo datoteku koja sadrži genom ove bakterije:</p>
    <CodeEditor
      code={`
      !wget http://d28rh4a8wq0iu5.cloudfront.net/ads1/data/lambda_virus.fa`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>Čitamo genom iz datoteke:</p>
    <CodeEditor
      code={`
      def procitajGenom(imeDatoteke):
        genom = ''
        with open(imeDatoteke,'r') as f:
          for line in f:
            if not line[0] == '>':
              genom += line.rstrip()
        return genom
      genom = procitajGenom('lambda_virus.fa')`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
      Određujemo broj pojavljivanja nukleotida u genomu ove bakterije koristeći biblioteku
      collections i bez nje:
    </p>
    <CodeEditor
      code={`
      pojavljivanja = {'A':0, 'C':0, 'G':0, 'T':0}
      for i in range(len(genom)):
        pojavljivanja[genom[i]] += 1
      pojavljivanja`}
      result={`
      {'A': 12334, 'C': 11362, 'G': 12820, 'T': 11986}`}
      customClass={classes.ml28}
    />
    <CodeEditor
      code={`
      import collections
      collections.Counter(genom)`}
      result={`
      Counter({'A': 12334, 'C': 11362, 'G': 12820, 'T': 11986})`}
      customClass={classes.ml28}
    />
    <p className={classes.ml28}>
      Na osnovu ovih podataka možemo videti da imamo približan broj svih baza u datom genomu.
    </p>
  </div>
);

export default Lesson12;
