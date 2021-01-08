import React from 'react';
import Layout from '../Layout';
import classes from './Course.module.scss';
import Lesson10 from './Lessons/Lesson10/Lesson10';

const Course = () => (
  <Layout>
    <div className={classes.root}>
      <div className={classes.tableOfContents}>
        <div className={classes.title}>Sadrzaj</div>
        <div className={classes.lesson}>
          <div className={classes.lessonInit}># Uvod</div>
          <div className={classes.sublesson}># Uopsteno o DNK strukturi i replikaciji</div>
          <div className={classes.sublesson}># Značaj i istorija DNK sekvencioniranja</div>
          <div className={classes.sublesson}># Genom kao string, očitavanje kao podstring</div>
          <div className={classes.sublesson}># Kako mašine rade DNK sekvencioniranje</div>
          <div className={classes.sublesson}># FASTQ format i rad sa njima</div>
          <div className={classes.sublesson}># Kako analiziramo prikupljene podatke</div>
        </div>
        <div className={classes.lesson}>
          <div className={classes.lessonInit}># Problem poravnanja očitavanja</div>
          <div className={classes.sublesson}># Problem tačnog podudaranja</div>
          <div className={classes.subsublesson}># Boyer-Moore</div>
          <div className={classes.subsublesson}># Offline i online algoritmie</div>
          <div className={classes.subsublesson}># Indeksiranje i k-gram indeksi</div>
          <div className={classes.subsublesson}># Implementacija indeksa</div>
          <div className={classes.subsublesson}># Varijacije k-gram indeksa</div>
          <div className={classes.subsublesson}># Indeksi genoma koji se koriste u praksi</div>
          <div className={classes.sublesson}># Problem približnog podudaranja</div>
          <div className={classes.subsublesson}># Dirihleov princip</div>
          <div className={classes.subsublesson}># Dinamičko programiranje i edit distanca</div>
          <div className={classes.subsublesson}># Novo rešenje za približno podudaranje</div>
          <div className={classes.subsublesson}># Globalno i lokalno poravnanje</div>
          <div className={classes.sublesson}># Problem poravnanje očitavanja u praksi</div>
        </div>
        <div className={classes.lesson}>
          <div className={classes.lessonInit}># Problem skapanja očitavanja</div>
        </div>
      </div>
      <div className={classes.currentLesson}>
        <Lesson10 />
      </div>
    </div>
  </Layout>
);

export default Course;
