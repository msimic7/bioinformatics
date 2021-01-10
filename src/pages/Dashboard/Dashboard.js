import React from 'react';
import Layout from '../Layout';
import classes from './Dashboard.module.scss';
import history from '../../services/history';

const Dashboard = () => {
  const handleGetStarted = (e) => {
    e.preventDefault();
    history.push('/course/lesson10');
  };

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.contentWrapper}>
          <div className={classes.introductionMsg}>
            <p>
              Sekvencioniranje DNK predstavlja proces očitavanja niza slova određenog fragmenta DNK.
              Preciznije, određuje se redosled četiri gradivna elementa zvana „baze“ (A adenin, T
              timin, C citozin i G guanin) koji grade molekul DNK. Ova metoda danas predstavlja
              najsavremeniju tehnologiju za otkrivanje i upoznavanje genetike određene jedinke u
              jednom potezu.
            </p>
            <p>
              U ovom kursu ćemo se baviti algoritmima koji se koriste pri analiziranju podataka koje
              dobijamo DNK sekvencioniranjem. Pre nego što počnemo same algoritme, diskutovaćemo o
              strukturi i replikaciji DNK, istoriji i značaju sekvencioniranja, kao i o tome kako
              rade sekvencione mašine druge generacije. Naučićemo više o genomima i tome kako ih
              možemo predstaviti pomoću stringova na osnovu kojih ćemo biti u mogućnosti da
              koristimo širok spektar algoritama.
            </p>
            <p>
              Dva glavna problema koja će biti u fokusu su problem poravnanja očitavanja i problem
              sklapanja očitavanja.
            </p>
          </div>
          <button
            type="button"
            className={classes.btnStartCourse}
            onClick={(e) => handleGetStarted(e)}
          >
            Get started
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
