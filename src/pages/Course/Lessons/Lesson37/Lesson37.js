import React from 'react';
import Literature from '../../Literature';
import classes from '../Lesson.module.scss';

const Lesson36 = () => (
  <div className={classes.root}>
    <h1>LITERATURA</h1>
    <h2 className={classes.indent1x}>UVOD</h2>
    <p className={classes.indent2x}>Uopšteno o DNK strukturi i replikaciji</p>
    <Literature
      img="wiki"
      title="Dezoksiribonukleinska kiselina"
      url="https://hr.wikipedia.org/wiki/Deoksiribonukleinska_kiselina"
      customClass={classes.indent3x}
    />
    <Literature
      img="bionet"
      title="Gen"
      url="https://www.bionet-skola.com/w/Gen"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="Genetics Basics | Chromosomes, Genes, DNA | Don't Memorise"
      url="https://www.youtube.com/watch?v=mcEV3m9SG9M&t=2s"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="Genetics - Structure of the Double Helix - Lesson 14 | Don't Memorise"
      url="https://www.youtube.com/watch?v=4gFF1-VHHmk&t=105s"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="DNA Replication (Updated)"
      url="https://www.youtube.com/watch?v=Qqe4thU-os8&t=168s"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="Genetics - Know the DNA Double Helix well! - Lesson 15 | Don't Memorise"
      url="https://www.youtube.com/watch?v=k03JClhz9Fo&t=46s"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Istorija i značaj DNK sekvencioniranja</p>
    <Literature
      img="genoma"
      title="Razumevanje sekvencioniranja DNK"
      url="https://genoma.com/blog/sr/razumevanje-sekvencioniranja-dnk/"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="What Is Genome Sequencing?"
      url="https://www.youtube.com/watch?v=sjlLP5jSGxY&t=211s"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Genom kao niska</p>
    <Literature
      img="coursera"
      title="Lecture: Genomes as strings, reads as substrings"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-genomes-as-strings-reads-as-substrings-JKq4L"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Lecture: String definitions and Python examples"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-string-definitions-and-python-examples-isSmY"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: String basics"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-string-basics-QQsZP"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="String basics"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.01_StringBasics.ipynb"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: Manipulating DNA strings"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-manipulating-dna-strings-x6crT"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="Manipulating DNA strings"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.02_ManipulatingDNAStrings.ipynb"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: Downloading and parsing a genome"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-downloading-and-parsing-a-genome-Tm3Dm"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="Parsing reference genome"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.03_ParsingRefGenome.ipynb"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Kako mašine rade DNK sekvencioniranje</p>
    <Literature
      img="coursera"
      title="Optional lecture: How second-generation sequencers work"
      url="https://www.coursera.org/lecture/dna-sequencing/optional-lecture-how-second-generation-sequencers-work-DQsJs"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Optional lecture: Sequencing errors and base qualities"
      url="https://www.coursera.org/lecture/dna-sequencing/optional-lecture-sequencing-errors-and-base-qualities-g5rsw"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="What it is Next Generation Sequencing? I NGS"
      url="https://www.youtube.com/watch?v=shoje_9IYWc"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>FASTQ format i rad sa njim</p>
    <Literature
      img="coursera"
      title="Lecture: Sequencing reads in FASTQ format"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-sequencing-reads-in-fastq-format-Hvtbd"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: Working with sequencing reads"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-working-with-sequencing-reads-BpsDN"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="Working with sequencing reads"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.04_WorkingWithSequencingReads.ipynb"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: Analyzing reads by position"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-analyzing-reads-by-position-YkDXI"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="Analyzing reads by position"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.05_AnalyzingReadsByPosition.ipynb"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Kako analiziramo prikupljene podatke</p>
    <Literature
      img="coursera"
      title="Lecture: Sequencers give pieces to genomic puzzles"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-sequencers-give-pieces-to-genomic-puzzles-JXQXs"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="Exploding Newspapers"
      url="https://www.youtube.com/watch?v=Lqyh9RD5BSc"
      customClass={classes.indent3x}
    />

    <h2 className={classes.indent1x}>PROBLEM PORAVNANJA OČITAVANJA</h2>
    <p className={classes.indent2x}>Zašto je on težak?</p>
    <Literature
      img="coursera"
      title="Lecture: Read alignment and why it's hard"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-read-alignment-and-why-its-hard-0NI7M"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Problem tačnog podudaranja</p>
    <Literature
      img="coursera"
      title="Lecture: Naive exact matching"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-naive-exact-matching-ALHEu"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: Matching artificial reads"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-matching-artificial-reads-QsbVF"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="NaiveExactMatching-Matching artificial reads"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.06_NaiveExactMatching-MatchingArtificialReads.ipynb"
      customClass={classes.indent3x}
    />
    <Literature
      img="coursera"
      title="Practical: Matching real reads"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-matching-real-reads-aBFyX"
      customClass={classes.indent3x}
    />
    <Literature
      img="github"
      title="NaiveExactMatching-Matching real reads"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/1.07_NaiveExactMatching-MatchingRealReads.ipynb"
      customClass={classes.indent3x}
    />

    <p className={classes.indent3x}>Boyer-Moore</p>
    <Literature
      img="coursera"
      title="Lecture: Boyer-Moore basics"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-boyer-moore-basics-HYZXj"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Lecture: Boyer-Moore: putting it all together"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-boyer-moore-putting-it-all-together-GuaWm"
      customClass={classes.indent4x}
    />
    <Literature
      img="gfg"
      title="Boyer Moore Algorithm for Pattern Searching"
      url="https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/"
      customClass={classes.indent4x}
    />
    <Literature
      img="gfg"
      title="Boyer Moore Algorithm | Good Suffix heuristic"
      url="https://www.geeksforgeeks.org/boyer-moore-algorithm-good-suffix-heuristic/"
      customClass={classes.indent4x}
    />
    <Literature
      img="unknown"
      title="Knuth-Morris-Pratt algorithm"
      url="https://www.inf.hs-flensburg.de/lang/algorithmen/pattern/kmpen.htm"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Offline i online algoritmi</p>
    <Literature
      img="coursera"
      title="Lecture: Preprocessing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-preprocessing-BRlB0"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Lecture: Indexing and the k-mer index</p>
    <Literature
      img="coursera"
      title="Lecture: Preprocessing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-indexing-and-the-k-mer-index-d5oFY"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Implementacija indeksa</p>
    <Literature
      img="coursera"
      title="Lecture: Ordered structures for indexing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-ordered-structures-for-indexing-z8F5b"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Lecture: Hash tables for indexing"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-hash-tables-for-indexing-WV4KK"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing a k-mer index"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-a-k-mer-index-o5wzo"
      customClass={classes.indent4x}
    />
    <Literature
      img="github"
      title="Substring index"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/2.02_SubstringIndex.ipynb"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Lecture: Indexing and the k-mer index</p>
    <Literature
      img="coursera"
      title="Lecture: Variations on k-mer indexes"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-variations-on-k-mer-indexes-uJvat"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Lecture: Indexing and the k-mer index</p>
    <Literature
      img="coursera"
      title="Lecture: Genome indexes used in research"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-genome-indexes-used-in-research-r8Xh3"
      customClass={classes.indent4x}
    />
    <Literature
      img="wiki"
      title="Burrows–Wheeler transform"
      url="https://en.wikipedia.org/wiki/Burrows%E2%80%93Wheeler_transform"
      customClass={classes.indent4x}
    />

    <p className={classes.indent2x}>Problem približnog podudaranja</p>
    <Literature
      img="coursera"
      title="Lecture: Approximate matching, Hamming and edit distance"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-approximate-matching-hamming-and-edit-distance-JAVzv"
      customClass={classes.indent3x}
    />

    <p className={classes.indent3x}>Dirihleov princip</p>
    <Literature
      img="coursera"
      title="Lecture: Pigeonhole principle"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-pigeonhole-principle-QSGKX"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing the pigeonhole principle"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-the-pigeonhole-principle-qUkPY"
      customClass={classes.indent4x}
    />
    <Literature
      img="github"
      title="Approximate matching"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/2.03_ApproximateMatching.ipynb"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Dinamičko programiranje i edit rastojanje</p>
    <Literature
      img="coursera"
      title="Lecture: Solving the edit distance problem"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-solving-the-edit-distance-problem-bKTKe"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Lecture: Using dynamic programming for edit distance"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-using-dynamic-programming-for-edit-distance-HQ1Z4"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing dynamic programming for edit distance"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-dynamic-programming-for-edit-distance-ZDDOH"
      customClass={classes.indent4x}
    />
    <Literature
      img="github"
      title="Dynamic programming for edit distance"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/3.01_EditDistanceDP.ipynb"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Novo rešenje za približno podudaranje</p>
    <Literature
      img="coursera"
      title="Lecture: A new solution to approximate matching"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-a-new-solution-to-approximate-matching-ZkfNt"
      customClass={classes.indent4x}
    />

    <p className={classes.indent3x}>Globalno i lokalno poravnanje</p>
    <Literature
      img="coursera"
      title="Lecture: Meet the family: global and local alignment"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-meet-the-family-global-and-local-alignment-QY9Zl"
      customClass={classes.indent4x}
    />
    <Literature
      img="coursera"
      title="Practical: Implementing global alignment"
      url="https://www.coursera.org/lecture/dna-sequencing/practical-implementing-global-alignment-hTyxB"
      customClass={classes.indent4x}
    />
    <Literature
      img="github"
      title="Global alignment"
      url="https://github.com/BenLangmead/ads1-notebooks/blob/master/3.02_GlobalAlignment.ipynb"
      customClass={classes.indent4x}
    />

    <p className={classes.indent2x}>Problem poravnanja očitavanja u praksi</p>
    <Literature
      img="coursera"
      title="Lecture: Read alignment in the field"
      url="https://www.coursera.org/lecture/dna-sequencing/lecture-read-alignment-in-the-field-fklle"
      customClass={classes.indent3x}
    />

    <h2 className={classes.indent1x}>PROBLEM PREKLAPANJA OČITAVANJA</h2>
    <p className={classes.indent2x}>Problem preklapanja očitavanja</p>
    <Literature
      img="genoma"
      title="Razumevanje sekvencioniranja DNK"
      url="https://genoma.com/blog/sr/razumevanje-sekvencioniranja-dnk/"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="The String Reconstruction Problem"
      url="https://www.youtube.com/watch?v=9O3hAXp8gdM&t=2s"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Rekonstrukcija niske kao Hamiltonova putanja</p>
    <Literature
      img="youtube"
      title="String Reconstruction as a Hamiltonian Path Problem"
      url="https://www.youtube.com/watch?v=bDj8TWG3NRM&t=4s"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Rekonstrukcija niske kao Ojlerova putanja</p>
    <Literature
      img="youtube"
      title="String Reconstruction as an Eulerian Path Problem"
      url="https://www.youtube.com/watch?v=xYHpuZLvB2s"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="Konigsberg 1"
      url="https://www.youtube.com/watch?v=vjB6nhOu3BY"
      customClass={classes.indent3x}
    />
    <Literature
      img="dms"
      title="Miodrag Petković. Zanimljivi matematički problemi velikih matematičara."
      url="TODO"
      customClass={classes.indent3x}
    />
    <Literature
      img="youtube"
      title="Similar Problems with Different Fates"
      url="https://www.youtube.com/watch?v=6DI3SB7DyFY"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>De Brujinov graf</p>
    <Literature
      img="youtube"
      title="De Bruijn Graphs"
      url="https://www.youtube.com/watch?v=f-ecmECK7lw"
      customClass={classes.indent3x}
    />
    <Literature
      img="matf"
      title="Čas 3: Asembliranje genoma"
      url="http://www.bioinformatika.matf.bg.ac.rs/#3_tab"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Ojlerova teorema</p>
    <Literature
      img="youtube"
      title="Euler's Theorem"
      url="https://www.youtube.com/watch?v=_x4IVlsw_q4"
      customClass={classes.indent3x}
    />
    <Literature
      img="matf"
      title="Čas 3: Asembliranje genoma"
      url="http://www.bioinformatika.matf.bg.ac.rs/#3_tab"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Parovi očitavanja</p>
    <Literature
      img="youtube"
      title="Assembling Read-Pairs"
      url="https://www.youtube.com/watch?v=yuUySb97_HA"
      customClass={classes.indent3x}
    />

    <p className={classes.indent2x}>Problemi sa kojima se susrećemo</p>
    <Literature
      img="youtube"
      title="De Bruijn Graphs Face Harsh Realities of Assembly"
      url="https://www.youtube.com/watch?v=RJ4i504dPr8&t=1s"
      customClass={classes.indent3x}
    />
  </div>
);

export default Lesson36;
