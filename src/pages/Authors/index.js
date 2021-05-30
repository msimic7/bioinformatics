import React from 'react';
import classes from './Authors.module.scss';
import Layout from '../Layout';

const Authors = () => (
  <Layout>
    <div className={classes.root}>
      <div className={classes.contentWrapper}>
        <p>
          Projekat „Algoritmi za DNK sekvencioniranje” sproveden je u okviru kursa „Metodika nastave
          matematike i računarstva” završne godine Matematičkog fakulteta u Beogradu, smer
          Matematika - računarstvo i informatika. Tema je odabrana na osnovu lične zainteresovanosti
          za Bioinformatiku i želje za daljim istraživanjem.
        </p>
        <p className={classes.authorTitle}>Autori:</p>
        <div className={classes.author}>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/assets/authors/milica.png`}
            className={classes.authorImg}
          />
          <div className={classes.authorInfo}>
            <p>
              Lekcije pripremila Milica Simić, studentkinja Matematičkog fakulteta, smer Matematika
              - računarstvo i informatika.
            </p>
            <p>Kontakt: milica7amg@gmail.com</p>
          </div>
        </div>
        <div className={classes.author}>
          <img
            alt=""
            src={`${process.env.PUBLIC_URL}/assets/authors/milan.png`}
            className={classes.authorImg}
          />
          <div className={classes.authorInfo}>
            <p>
              Dizajn i strukturu sajta realizovao Milan Simić, student Matematičkog fakulteta, smer
              Informatika.
            </p>
            <p>Kontakt: simicmilan017@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Authors;
