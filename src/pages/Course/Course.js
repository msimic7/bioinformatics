import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import classes from './Course.module.scss';

const Course = ({ Lesson }) => (
  <Layout>
    <div className={classes.root}>
      <div className={classes.tableOfContents}>
        <div className={classes.title}>Sadrzaj</div>
        <div className={classes.lesson}>
          <div className={classes.lessonInit}>
            <Link to="/course/lesson10"># Uvod</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson10"># Uopsteno o DNK strukturi i replikaciji</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson11"># Značaj i istorija DNK sekvencioniranja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson12"># Genom kao string, očitavanje kao podstring</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson13"># Kako mašine rade DNK sekvencioniranje</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson14"># FASTQ format i rad sa njima</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson15"># Kako analiziramo prikupljene podatke</Link>
          </div>
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
        <Lesson />
      </div>
    </div>
  </Layout>
);

Course.propTypes = {
  Lesson: PropTypes.func.isRequired,
};

export default Course;
