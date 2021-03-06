import React from 'react';
import { useHistory } from 'react-router';
import Layout from '../Layout';
import classes from './Dashboard.module.scss';

const Dashboard = () => {
  const history = useHistory();
  const handleGetStarted = (e) => {
    e.preventDefault();
    history.push('/course/lesson10');
  };

  return (
    <Layout>
      <div className={classes.root}>
        <div className={classes.contentWrapper}>
          <div className={classes.introductionMsg}>
            <h1>ALGORITMI ZA DNK SEKVENCIONIRANJE</h1>
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
              možemo predstaviti pomoću niski na osnovu kojih ćemo biti u mogućnosti da koristimo
              veliki broj algoritama.
            </p>
            <p>
              Dva glavna problema koja će biti u fokusu su{' '}
              <b>problem poravnanja očitavanja i problem preklapanja očitavanja</b>.
            </p>
          </div>
          <button
            type="button"
            className={classes.btnStartCourse}
            onClick={(e) => handleGetStarted(e)}
          >
            Započni kurs
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
