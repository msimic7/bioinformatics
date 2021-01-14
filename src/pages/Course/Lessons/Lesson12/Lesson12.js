/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CodeEditor from '../../../../components/CodeEditor';
import classes from '../Lesson.module.scss';

const Lesson12 = () => (
  <div className={classes.root}>
    <h1>GENOM KAO STRING</h1>
    <p className={classes.indent1x}>
      DNK možemo predstaviti pomoću jednog njegovog lanca (drugi lanac dobijamo njegovim
      komplementiranjem). Taj DNK lanac predstavljamo kao niz njegovih nukleotida koje ćemo
      označavati prema azotnim bazama koje sadrže tj. slovima A (adenin), C (citozin), G (guanin) i
      T (timin).
    </p>
    <img alt="" src="/assets/lesson12/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      {`Tada deo DNK lanca koji je prikazan na slici možemo predstaviti kao string S koji sadrži
      elemente iz skupa {A, C, G, T}.`}
    </p>
    <img alt="" src="/assets/lesson12/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      {`Dakle, genom određenog organizma možemo predstaviti kao string čiji su karakteri iz skupa
      {A, C, G, T}.`}
    </p>
    <p className={classes.indent1x}>
      Na primer, deo genoma enterobakterije fag lambda je prikazan ispod.
    </p>
    <img alt="" src="/assets/lesson12/pic3.svg" className={classes.indent2x} />
    <h2 className={classes.indent1x}>Rad sa stringovima</h2>
    <CodeEditor
      code={`
      s = 'ACGTGCTAGCTAGCAGs'
      s`}
      result={`
      ACGTGCTAGCTAGCAG`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>Duzina stringa:</p>
    <CodeEditor
      code={`
      len(s)`}
      result={`
      16`}
      customClass={classes.indent2x}
    />
    <pre className={`${classes.code} ${classes.indent2x}`} />
    <p className={classes.indent2x}>Podstringovi datog stringa s:</p>
    <CodeEditor
      code={`
      s[2:6]`}
      result={`
      GTGC`}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
      s[:5]`}
      result={`
      ACGTG`}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
      s[-4:]`}
      result={`
      GCAG`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>Konkatenacija (nadovezivanje) dva stringa p i q:</p>
    <CodeEditor
      code={`
      p = 'GCTAA'
      q = 'ACAAA'
      p + q`}
      result={`
      GCTAAACAAA`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>Poređenje dva stringa:</p>
    <CodeEditor
      code={`
      p == q`}
      result={`
      False`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
      Funkcija s.join(l) vraća string dobijen nadovezivanjem elemenata liste l tako da je između
      svakog elementa te liste dodat string s:
    </p>
    <CodeEditor
      code={`
      baze = ['A', 'C', 'G', 'T']
      ','.join(baze)`}
      result={`
      A,C,G,T`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
      Rad sa bibliotekom random. Ako dodamo seed tada će nam pri svakom poketanju vraćati isti
      element, inače će vraćati različiti:
    </p>
    <CodeEditor
      code={`
      import random
      random.choice('ACGT')`}
      result={`
      A`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>*ovde pri svakom pokretanju vraća G:</p>
    <CodeEditor
      code={`
      random.seed(7)
      random.choice('ACGT')`}
      result={`
      G`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>Pravimo string dužine 10 (svako slovo je nasumično birano):</p>
    <CodeEditor
      code={`
      sekvenca = ''.join([random.choice('ACGT') for _ in range(10)])
      sekvenca`}
      result={`
      CTAAAGACAA`}
      customClass={classes.indent2x}
    />
    <h2 className={classes.indent1x}>Manipulacija sa DNK stringovima</h2>
    <p className={classes.indent2x}>
      Funkcija koja traži najveći zajednički prefiks za dva stringa s1 i s2:
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
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
      Funkcija koja određuje komplementaran DNK lanac datom DNK lancu:
    </p>
    <CodeEditor
      code={`
      komplement = {'A':'T', 'C':'G', 'G':'C', 'T':'A'}
      komplement['T']`}
      result={`
      A`}
      customClass={classes.indent2x}
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
      customClass={classes.indent2x}
    />
    <h2 className={classes.indent1x}>Kako parsiramo dati genom</h2>
    <p className={classes.indent2x}>
      Fajl sa genomom enterobakterije fag lambda izgleda na sledeći način:
    </p>
    <CodeEditor
      code={`
      >gi|9626243|ref|NC_001416.1| Enterobacteria phage lambda, complete genome
      GGGCGGCGACCTCGCGGGTTTTCGCTATTTATGAAAATTTTCCGGTTTAAGGCGTTTCCGTTCTTCTTCG
      TCATAACTTAATGTTTTTATTTAAAATACCCTCTGAAAAGAAAGGAAACGACAGGTGCTGAAAGCGAGGC
      TTTTTGGCCTCTGTCGTTTCCTTTCTCTGTTTTTGTCCGTGGAATGAACAATGGAAGTCAACAAAAAGCA
      GCTGGCTGACATTTTCGGTGCGAGTATCCGTACCATTCAGAACTGGCAGGAACAGGGAATGCCCGTTCTG
      ...`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>Preuzimamo dati fajl koji sadrži genom ove bakterije:</p>
    <CodeEditor
      code={`
      !wget http://d28rh4a8wq0iu5.cloudfront.net/ads1/data/lambda_virus.fa`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>Čitamo genom iz fajla:</p>
    <CodeEditor
      code={`
      def procitajGenom(imeFajla):
        genom = ''
        with open(imeFajla,'r') as f:
          for line in f:
            if not line[0] == '>':
              genom += line.rstrip()
        return genom
      genom = procitajGenom('lambda_virus.fa')`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
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
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
      import collections
      collections.Counter(genom)`}
      result={`
      Counter({'A': 12334, 'C': 11362, 'G': 12820, 'T': 11986})`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
      Na osnovu ovih podataka možemo videti da imamo približan broj svih baza u genomu ove
      bakterije.
    </p>
  </div>
);

export default Lesson12;
