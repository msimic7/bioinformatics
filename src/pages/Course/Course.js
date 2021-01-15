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
          <div className={classes.lessonInit}>
            <Link to="/course/lesson20"># Problem poravnanja očitavanja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson20"># Zašto je on težak?</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson21"># Problem tačnog podudaranja</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson211"># Boyer-Moore</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson2111"># Pravilo lošeg karaktera</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson2112"># Pravilo dobrog sufiksa</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson2113"># Boyer-Moore kao kombinacija dva pravila</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson212"># Offline i online algoritmi</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson213"># Indeksiranje i k-gram indeksi</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson214"># Implementacija indeksa</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson215"># Varijacije k-gram indeksa</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson216"># Indeksi genoma koji se koriste u praksi</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson22"># Problem približnog podudaranja</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson221"># Dirihleov princip</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson222"># Dinamičko programiranje i edit distanca</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson223"># Novo rešenje za približno podudaranje</Link>
          </div>
          <div className={classes.subsublesson}>
            <Link to="/course/lesson224"># Globalno i lokalno poravnanje</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson23"># Problem poravnanja očitavanja u praksi</Link>
          </div>
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
