import React from 'react';
import Literature from '../../Literature';
import classes from '../Lesson.module.scss';

const Lesson37 = () => (
  <div className={classes.root}>
    <h1>LITERATURA</h1>
    <p className={classes.ml8}>
      {`Svi materijali su pretežno rađeni na osnovu prva tri dela kursa Algorithms for DNA Sequencing
      (`}
      <a
        href="https://www.coursera.org/learn/dna-sequencing"
        target="_blank"
        rel="noreferrer"
        className={classes.materialLink}
      >
        link
      </a>
      {`), kao i video predavanja koja pokrivaju
      treće poglavlje knjige Bioinformatics Algorithms: an Active Learning Approach (`}
      <a
        href="https://www.bioinformaticsalgorithms.org/"
        target="_blank"
        rel="noreferrer"
        className={classes.materialLink}
      >
        link
      </a>
      {`). Kodovi su preuzeti sa git repozitorijuma
      (`}
      <a
        href="https://github.com/BenLangmead/ads1-notebooks"
        target="_blank"
        rel="noreferrer"
        className={classes.materialLink}
      >
        link
      </a>
      {`), kao i sa zvanične stranice master kursa „Uvod u
      bioinformatiku” Matematičkog fakulteta u Beogradu (`}
      <a
        href="http://www.bioinformatika.matf.bg.ac.rs/#3_tab"
        target="_blank"
        rel="noreferrer"
        className={classes.materialLink}
      >
        link
      </a>
      ).
    </p>

    <h2 className={classes.ml8}>UVOD</h2>
    <p className={classes.ml18}>Uopšteno o DNK strukturi i replikaciji</p>
    <Literature
      img="wiki"
      title="Dezoksiribonukleinska kiselina"
      url="https://hr.wikipedia.org/wiki/Deoksiribonukleinska_kiselina"
      customClass={classes.ml28}
    />
    <Literature
      img="bionet"
      title="Gen"
      url="https://www.bionet-skola.com/w/Gen"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="Genetics Basics | Chromosomes, Genes, DNA | Don't Memorise"
      url="https://www.youtube.com/watch?v=mcEV3m9SG9M&t=2s"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="Genetics - Structure of the Double Helix - Lesson 14 | Don't Memorise"
      url="https://www.youtube.com/watch?v=4gFF1-VHHmk&t=105s"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="DNA Replication (Updated)"
      url="https://www.youtube.com/watch?v=Qqe4thU-os8&t=168s"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="Genetics - Know the DNA Double Helix well! - Lesson 15 | Don't Memorise"
      url="https://www.youtube.com/watch?v=k03JClhz9Fo&t=46s"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Istorija i značaj DNK sekvencioniranja</p>
    <Literature
      img="genoma"
      title="Razumevanje sekvencioniranja DNK"
      url="https://genoma.com/blog/sr/razumevanje-sekvencioniranja-dnk/"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="What Is Genome Sequencing?"
      url="https://www.youtube.com/watch?v=sjlLP5jSGxY&t=211s"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Genom kao niska</p>
    <Literature
      img="coursera"
      title="Lecture: Genomes as strings, reads as substrings"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-genomes-as-strings-reads-as-substrings-JKq4L"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Lecture: String definitions and Python examples"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-string-definitions-and-python-examples-isSmY"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: String basics"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-string-basics-QQsZP"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="String basics"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.01_StringBasics.ipynb"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: Manipulating DNA strings"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-manipulating-dna-strings-x6crT"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="Manipulating DNA strings"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.02_ManipulatingDNAStrings.ipynb"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: Downloading and parsing a genome"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-downloading-and-parsing-a-genome-Tm3Dm"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="Parsing reference genome"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.03_ParsingRefGenome.ipynb"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Kako mašine rade DNK sekvencioniranje</p>
    <Literature
      img="coursera"
      title="Optional lecture: How second-generation sequencers work"
      url="https://www.coursera.org/lecture/dna-sequencing/optional-lecture-how-second-generation-sequencers-work-DQsJs"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Optional lecture: Sequencing errors and base qualities"
      url="https://www.coursera.org/lecture/dna-sequencing/optional-lecture-sequencing-errors-and-base-qualities-g5rsw"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="What it is Next Generation Sequencing? I NGS"
      url="https://www.youtube.com/watch?v=shoje_9IYWc"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>
      FASTQ format za čuvanje očitavanja dobijenih prilikom sekvencioniranja
    </p>
    <Literature
      img="coursera"
      title="Lecture: Sequencing reads in FASTQ format"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-sequencing-reads-in-fastq-format-Hvtbd"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: Working with sequencing reads"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-working-with-sequencing-reads-BpsDN"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="Working with sequencing reads"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.04_WorkingWithSequencingReads.ipynb"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: Analyzing reads by position"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-analyzing-reads-by-position-YkDXI"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="Analyzing reads by position"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.05_AnalyzingReadsByPosition.ipynb"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Kako analiziramo podatke koje smo prikupili sekvencioniranjem</p>
    <Literature
      img="coursera"
      title="Lecture: Sequencers give pieces to genomic puzzles"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-sequencers-give-pieces-to-genomic-puzzles-JXQXs"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="Exploding Newspapers"
      url="https://www.youtube.com/watch?v=Lqyh9RD5BSc"
      customClass={classes.ml28}
    />

    <h2 className={classes.ml8}>PROBLEM PORAVNANJA OČITAVANJA</h2>
    <p className={classes.ml18}>Zašto je problem poravnanja očitavanja težak?</p>
    <Literature
      img="coursera"
      title="Lecture: Read alignment and why it's hard"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-read-alignment-and-why-its-hard-0NI7M"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Problem tačnog podudaranja</p>
    <Literature
      img="coursera"
      title="Lecture: Naive exact matching"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-naive-exact-matching-ALHEu"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: Matching artificial reads"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-matching-artificial-reads-QsbVF"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="NaiveExactMatching-Matching artificial reads"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.06_NaiveExactMatching-MatchingArtificialReads.ipynb"
      customClass={classes.ml28}
    />
    <Literature
      img="coursera"
      title="Practical: Matching real reads"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-matching-real-reads-aBFyX"
      customClass={classes.ml28}
    />
    <Literature
      img="github"
      title="NaiveExactMatching-Matching real reads"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.07_NaiveExactMatching-MatchingRealReads.ipynb"
      customClass={classes.ml28}
    />

    <p className={classes.ml28}>Boyer-Moore algoritam</p>
    <Literature
      img="coursera"
      title="Lecture: Boyer-Moore basics"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-boyer-moore-basics-HYZXj"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Lecture: Boyer-Moore: putting it all together"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-boyer-moore-putting-it-all-together-GuaWm"
      customClass={classes.ml38}
    />
    <Literature
      img="gfg"
      title="Boyer Moore Algorithm for Pattern Searching"
      url="https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/"
      customClass={classes.ml38}
    />
    <Literature
      img="gfg"
      title="Boyer Moore Algorithm | Good Suffix heuristic"
      url="https://www.geeksforgeeks.org/boyer-moore-algorithm-good-suffix-heuristic/"
      customClass={classes.ml38}
    />
    <Literature
      img="matf"
      title="Knuth-Morris-Pratt algorithm"
      url="https://www.inf.hs-flensburg.de/lang/algorithmen/pattern/kmpen.htm"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Offline i online algoritmi</p>
    <Literature
      img="coursera"
      title="Lecture: Preprocessing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-preprocessing-BRlB0"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Indeksiranje i k-gram indeks</p>
    <Literature
      img="coursera"
      title="Lecture: Indexing and the k-mer index"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-indexing-and-the-k-mer-index-d5oFY"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Implementacija indeksa za tekst T</p>
    <Literature
      img="coursera"
      title="Lecture: Ordered structures for indexing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-ordered-structures-for-indexing-z8F5b"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Lecture: Hash tables for indexing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-hash-tables-for-indexing-WV4KK"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing a k-mer index"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-a-k-mer-index-o5wzo"
      customClass={classes.ml38}
    />
    <Literature
      img="github"
      title="Substring index"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/2.02_SubstringIndex.ipynb"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Varijacije k-gram indeksa</p>
    <Literature
      img="coursera"
      title="Lecture: Variations on k-mer indexes"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-variations-on-k-mer-indexes-uJvat"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Indeksi genoma koji se koriste u praksi</p>
    <Literature
      img="coursera"
      title="Lecture: Genome indexes used in research"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-genome-indexes-used-in-research-r8Xh3"
      customClass={classes.ml38}
    />

    <p className={classes.ml18}>Problem približnog podudaranja</p>
    <Literature
      img="coursera"
      title="Lecture: Approximate matching, Hamming and edit distance"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-approximate-matching-hamming-and-edit-distance-JAVzv"
      customClass={classes.ml28}
    />

    <p className={classes.ml28}>Dirihleov princip</p>
    <Literature
      img="coursera"
      title="Lecture: Pigeonhole principle"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-pigeonhole-principle-QSGKX"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing the pigeonhole principle"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-the-pigeonhole-principle-qUkPY"
      customClass={classes.ml38}
    />
    <Literature
      img="github"
      title="Approximate matching"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/2.03_ApproximateMatching.ipynb"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Dinamičko programiranje i edit rastojanje</p>
    <Literature
      img="coursera"
      title="Lecture: Solving the edit distance problem"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-solving-the-edit-distance-problem-bKTKe"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Lecture: Using dynamic programming for edit distance"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-using-dynamic-programming-for-edit-distance-HQ1Z4"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing dynamic programming for edit distance"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-dynamic-programming-for-edit-distance-ZDDOH"
      customClass={classes.ml38}
    />
    <Literature
      img="github"
      title="Dynamic programming for edit distance"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/3.01_EditDistanceDP.ipynb"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Novo rešenje za približno podudaranje</p>
    <Literature
      img="coursera"
      title="Lecture: A new solution to approximate matching"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-a-new-solution-to-approximate-matching-ZkfNt"
      customClass={classes.ml38}
    />

    <p className={classes.ml28}>Globalno i lokalno poravnanje</p>
    <Literature
      img="coursera"
      title="Lecture: Meet the family: global and local alignment"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-meet-the-family-global-and-local-alignment-QY9Zl"
      customClass={classes.ml38}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing global alignment"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-global-alignment-hTyxB"
      customClass={classes.ml38}
    />
    <Literature
      img="github"
      title="Global alignment"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/3.02_GlobalAlignment.ipynb"
      customClass={classes.ml38}
    />

    <p className={classes.ml18}>Problem poravnanja očitavanja u praksi</p>
    <Literature
      img="coursera"
      title="Lecture: Read alignment in the field"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-read-alignment-in-the-field-fklle"
      customClass={classes.ml28}
    />

    <h2 className={classes.ml8}>PROBLEM PREKLAPANJA OČITAVANJA</h2>
    <p className={classes.ml18}>Problem preklapanja očitavanja</p>
    <Literature
      img="genoma"
      title="Razumevanje sekvencioniranja DNK"
      url="https://genoma.com/blog/sr/razumevanje-sekvencioniranja-dnk/"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="The String Reconstruction Problem"
      url="https://www.youtube.com/watch?v=9O3hAXp8gdM&t=2s"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Rekonstrukcija niske kao Hamiltonova putanja</p>
    <Literature
      img="youtube"
      title="String Reconstruction as a Hamiltonian Path Problem"
      url="https://www.youtube.com/watch?v=bDj8TWG3NRM&t=4s"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Rekonstrukcija niske kao Ojlerova putanja</p>
    <Literature
      img="youtube"
      title="String Reconstruction as an Eulerian Path Problem"
      url="https://www.youtube.com/watch?v=xYHpuZLvB2s"
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="Konigsberg 1"
      url="https://www.youtube.com/watch?v=vjB6nhOu3BY"
      customClass={classes.ml28}
    />
    <Literature
      img="dms"
      title="Miodrag Petković. Zanimljivi matematički problemi velikih matematičara."
      customClass={classes.ml28}
    />
    <Literature
      img="youtube"
      title="Similar Problems with Different Fates"
      url="https://www.youtube.com/watch?v=6DI3SB7DyFY"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>De Brujinov graf</p>
    <Literature
      img="youtube"
      title="De Bruijn Graphs"
      url="https://www.youtube.com/watch?v=f-ecmECK7lw"
      customClass={classes.ml28}
    />
    <Literature
      img="matf"
      title="Čas 3: Asembliranje genoma"
      url="http://www.bioinformatika.matf.bg.ac.rs/#3_tab"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Ojlerova teorema</p>
    <Literature
      img="youtube"
      title="Euler's Theorem"
      url="https://www.youtube.com/watch?v=_x4IVlsw_q4"
      customClass={classes.ml28}
    />
    <Literature
      img="matf"
      title="Čas 3: Asembliranje genoma"
      url="http://www.bioinformatika.matf.bg.ac.rs/#3_tab"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Parovi očitavanja</p>
    <Literature
      img="youtube"
      title="Assembling Read-Pairs"
      url="https://www.youtube.com/watch?v=yuUySb97_HA"
      customClass={classes.ml28}
    />

    <p className={classes.ml18}>Problemi sa kojima se susrećemo</p>
    <Literature
      img="youtube"
      title="De Bruijn Graphs Face Harsh Realities of Assembly"
      url="https://www.youtube.com/watch?v=RJ4i504dPr8&t=1s"
      customClass={classes.ml28}
    />
  </div>
);

export default Lesson37;
