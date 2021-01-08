import React from 'react';
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
    <img alt="" src="/assets/lesson12/pic1.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      {`Tada deo DNK lanca koji je prikazan na slici možemo predstaviti kao string S koji sadrži
      elemente iz skupa {A, C, G, T}.`}
    </p>
    <img alt="" src="/assets/lesson12/pic2.svg" className={classes.indent1x} />
    <p className={classes.indent1x}>
      {`Dakle, genom određenog organizma možemo predstaviti kao string čiji su karakteri iz skupa{' '}
      {A, C, G, T}.`}
    </p>
    <p className={classes.indent1x}>
      Na primer, deo genoma enterobakterije fag lambda je prikazan ispod.
    </p>
    <img alt="" src="/assets/lesson12/pic3.svg" className={classes.indent1x} />
  </div>
);

export default Lesson12;
