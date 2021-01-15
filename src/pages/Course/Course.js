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
            <Link to="/course/lesson11"># Istorija i značaj DNK sekvencioniranja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson12"># Genom kao niska</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson13"># Kako mašine rade DNK sekvencioniranje</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson14"># FASTQ format i rad sa njim</Link>
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
          <div className={classes.subsubsublesson}>
            <Link to="/course/lesson2111"># Pravilo lošeg karaktera</Link>
          </div>
          <div className={classes.subsubsublesson}>
            <Link to="/course/lesson2112"># Pravilo dobrog sufiksa</Link>
          </div>
          <div className={classes.subsubsublesson}>
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
            <Link to="/course/lesson222"># Dinamičko programiranje i edit rastojanje</Link>
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
          <div className={classes.lessonInit}>
            <Link to="/course/lesson30"># Problem skapanja očitavanja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson31"># Rekonstrukcija niske kao Hamiltonova putanja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson32"># Rekonstrukcija niske kao Ojlerova putanja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson33"># De Brujinov graf</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson34"># Ojlerova teorema</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson35"># Parovi očitavanja</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson36"># Problem poravnanja očitavanja u praksi</Link>
          </div>
          <div className={classes.sublesson}>
            <Link to="/course/lesson37"># Problemi sa kojima se susrećemo</Link>
          </div>
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
