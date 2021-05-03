import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../Layout';
import classes from './Course.module.scss';
import history from '../../services/history';

const Course = ({ Lesson }) => {
  const location = useLocation();

  const lessons = [
    'lesson10',
    'lesson11',
    'lesson12',
    'lesson13',
    'lesson14',
    'lesson15',
    'lesson20',
    'lesson21',
    'lesson211',
    'lesson2111',
    'lesson2112',
    'lesson2113',
    'lesson212',
    'lesson213',
    'lesson214',
    'lesson215',
    'lesson216',
    'lesson22',
    'lesson221',
    'lesson222',
    'lesson223',
    'lesson224',
    'lesson23',
    'lesson30',
    'lesson31',
    'lesson32',
    'lesson33',
    'lesson34',
    'lesson35',
    'lesson36',
    'lesson37',
  ];

  const handlePreviousLesson = () => {
    const currentLessonNum = lessons.indexOf(location.pathname.split('/').splice(-1)[0]);
    const previousLessonNum = currentLessonNum === 0 ? lessons.length - 1 : currentLessonNum - 1;
    history.push(`/course/${lessons[previousLessonNum]}`);
  };

  const handleNextLesson = () => {
    const currentLessonNum = lessons.indexOf(location.pathname.split('/').splice(-1)[0]);
    const previousLessonNum = currentLessonNum === lessons.length - 1 ? 0 : currentLessonNum + 1;
    history.push(`/course/${lessons[previousLessonNum]}`);
  };

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.tableOfContents}>
          <div className={classes.title}>Sadržaj</div>
          <div className={classes.lesson}>
            <div className={classes.lessonInit}>Uvod</div>
            <div className={classes.sublesson}>
              <Link to="/course/lesson10"># Uopšteno o DNK strukturi i replikaciji</Link>
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
              <Link to="/course/lesson14">
                # FASTQ format za čuvanje očitavanja dobijenih prilikom sekvencioniranja
              </Link>
            </div>
            <div className={classes.sublesson}>
              <Link to="/course/lesson15">
                # Kako analiziramo podatke koje smo prikupili sekvencioniranjem
              </Link>
            </div>
          </div>
          <div className={classes.lesson}>
            <div className={classes.lessonInit}>Problem poravnanja očitavanja</div>
            <div className={classes.sublesson}>
              <Link to="/course/lesson20"># Zašto je problem poravnanja očitavanja težak?</Link>
            </div>
            <div className={classes.sublesson}>
              <Link to="/course/lesson21"># Problem tačnog podudaranja</Link>
            </div>
            <div className={classes.subsublesson}>
              <Link to="/course/lesson211"># Boyer-Moore algoritam</Link>
            </div>
            <div className={classes.subsubsublesson}>
              <Link to="/course/lesson2111"># Pravilo lošeg karaktera</Link>
            </div>
            <div className={classes.subsubsublesson}>
              <Link to="/course/lesson2112"># Pravilo dobrog sufiksa</Link>
            </div>
            <div className={classes.subsubsublesson}>
              <Link to="/course/lesson2113">
                # Boyer-Moore algoritam kao kombinacija dva pravila
              </Link>
            </div>
            <div className={classes.subsublesson}>
              <Link to="/course/lesson212"># Offline i online algoritmi</Link>
            </div>
            <div className={classes.subsublesson}>
              <Link to="/course/lesson213"># Indeksiranje i k-gram indeks</Link>
            </div>
            <div className={classes.subsublesson}>
              <Link to="/course/lesson214"># Implementacija indeksa za tekst T</Link>
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
              <Link to="/course/lesson223"># Novo rešenje za problem približnog podudaranja</Link>
            </div>
            <div className={classes.subsublesson}>
              <Link to="/course/lesson224"># Globalno i lokalno poravnanje</Link>
            </div>
            <div className={classes.sublesson}>
              <Link to="/course/lesson23"># Problem poravnanja očitavanja u praksi</Link>
            </div>
          </div>
          <div className={classes.lesson}>
            <div className={classes.lessonInit}>Problem preklapanja očitavanja</div>
            <div className={classes.sublesson}>
              <Link to="/course/lesson30"># Problem preklapanja očitavanja</Link>
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
              <Link to="/course/lesson36"># Problemi sa kojima se susrećemo</Link>
            </div>
            <div className={classes.literature}>
              <Link to="/course/lesson37">Literatura</Link>
            </div>
          </div>
        </div>
        <div className={classes.currentLesson}>
          <div className={classes.lessonActionButtons}>
            <div
              aria-hidden="true"
              className={`${classes.btnLink} ${classes.btnLinkLeft}`}
              onClick={() => handlePreviousLesson()}
            >
              <i className="fas fa-arrow-left" />
            </div>
            <div aria-hidden="true" className={classes.btnLink} onClick={() => handleNextLesson()}>
              <i className="fas fa-arrow-right" />
            </div>
          </div>
          <Lesson />
        </div>
      </div>
    </Layout>
  );
};

Course.propTypes = {
  Lesson: PropTypes.func.isRequired,
};

export default Course;
