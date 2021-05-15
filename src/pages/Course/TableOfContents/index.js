import React, { useEffect, useState } from 'react';
import { useBreakpoints } from 'react-device-breakpoints';
import classes from '../Course.module.scss';
import TableOfContentsLesson from './TableOfContentsLesson';
import lessonClasses from '../Lessons/Lesson.module.scss';

const TableOfContents = () => {
  const device = useBreakpoints();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (device.isMobile) {
      setShow(false);
    }
    if (!(show || device.isMobile)) {
      setShow(true);
    }
  }, [device.isMobile]);

  return (
    <>
      <div
        aria-hidden="true"
        className={`${classes.btnLink} ${classes.sidebarBtn}`}
        onClick={() => setShow((val) => !val)}
      >
        <i className="fas fa-bars" />
      </div>
      <div className={`${classes.tableOfContents} ${show ? classes.show : classes.hide}`}>
        <div className={classes.title}>Sadržaj</div>
        <div className={lessonClasses.mb2}>
          <p className={classes.section}>Uvod</p>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson10">
            Uopšteno o DNK strukturi i replikaciji
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson11">
            Istorija i značaj DNK sekvencioniranja
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson12">
            Genom kao niska
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson13">
            Kako mašine rade DNK sekvencioniranje
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson14">
            FASTQ format za čuvanje očitavanja dobijenih prilikom sekvencioniranja
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson15">
            Kako analiziramo podatke koje smo prikupili sekvencioniranjem
          </TableOfContentsLesson>
        </div>
        <div className={lessonClasses.mb2}>
          <div className={classes.section}>Problem poravnanja očitavanja</div>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson20">
            Uopšteno o DNK strukturi i replikaciji
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson21">
            Problem tačnog podudaranja
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson211"
          >
            Boyer-Moore algoritam
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.subsublesson}
            setShow={setShow}
            to="/course/lesson2111"
          >
            Pravilo lošeg karaktera
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.subsublesson}
            setShow={setShow}
            to="/course/lesson2112"
          >
            Pravilo dobrog sufiksa
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.subsublesson}
            setShow={setShow}
            to="/course/lesson2113"
          >
            Boyer-Moore algoritam kao kombinacija dva pravila
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson212"
          >
            Offline i online algoritmi
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson213"
          >
            Indeksiranje i k-gram indeks
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson214"
          >
            Implementacija indeksa za tekst T
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson215"
          >
            Varijacije k-gram indeksa
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson216"
          >
            Indeksi genoma koji se koriste u praksi
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson22">
            Problem približnog podudaranja
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson221"
          >
            Dirihleov princip
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson222"
          >
            Dinamičko programiranje i edit rastojanje
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson223"
          >
            Novo rešenje za problem približnog podudaranja
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.sublesson}
            setShow={setShow}
            to="/course/lesson224"
          >
            Globalno i lokalno poravnanje
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson23">
            Problem poravnanja očitavanja u praksi
          </TableOfContentsLesson>
        </div>
        <div className={lessonClasses.mb2}>
          <div className={classes.section}>Problem preklapanja očitavanja</div>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson30">
            Problem preklapanja očitavanja
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson31">
            Rekonstrukcija niske kao Hamiltonova putanja
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson32">
            Rekonstrukcija niske kao Ojlerova putanja
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson33">
            De Brujinov graf
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson34">
            Ojlerova teorema
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson35">
            Parovi očitavanja
          </TableOfContentsLesson>
          <TableOfContentsLesson className={classes.lesson} setShow={setShow} to="/course/lesson36">
            Problemi sa kojima se susrećemo
          </TableOfContentsLesson>
          <TableOfContentsLesson
            className={classes.literature}
            setShow={setShow}
            to="/course/lesson37"
          >
            Literatura
          </TableOfContentsLesson>
        </div>
      </div>
      {device.isMobile && (
        <div
          className={`${classes.tableOfContentsBackdrop} ${show ? classes.show : classes.hide}`}
          aria-hidden
          onClick={() => setShow(false)}
        />
      )}
    </>
  );
};

export default TableOfContents;
