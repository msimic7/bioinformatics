import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson33 = () => (
  <div className={classes.root}>
    <h1> DE BRUJINOV GRAF </h1>
    <p className={classes.indent1x}>
      Za rekonstrukciju genoma potrebno je da nađemo Ojlerovu putanju u njegovom De Brujinovom
      grafu. Posmatrajmo primer iz prethodnog dela:
    </p>
    <img alt="" src="/assets/lesson33/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      U ovom primeru smo od poznatog genoma TAATCCGATGGGATGTT smo sastavili njegov De Brujinov graf.
      Međutim, u stvarnom problemu genom je nepoznat. Jedino što od podataka imamo jesu očitavanja
      (k-grami) genoma kojeg smo sekvencionirali. Da li na osnovu tih k-grama možemo konstruisati De
      Brujinov graf?
    </p>
    <p className={classes.indent2x}>
      Kako bismo odgovorili na dato pitanje, posmatraćemo samo dobijena očitavanja i to u
      leksikografskom redosledu (jer nam genom nije poznat, pa samim tim ni njihove pozicije u
      genomu):
    </p>
    <img alt="" src="/assets/lesson33/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Predstavimo svaki 3-gram kao granu između njegovog prefiksa i sufiksa dužine 2:
    </p>
    <img alt="" src="/assets/lesson33/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>Zatim nalazimo sve iste čvorove i spajamo ih:</p>

    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson33/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 6 identičnih čvorova AT. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic5.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak2</p>
    <img alt="" src="/assets/lesson33/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 4 identičnih čvorova TG. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic7.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak3</p>
    <img alt="" src="/assets/lesson33/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 2 identičnih čvorova AA. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic9.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak4</p>
    <img alt="" src="/assets/lesson33/pic10.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 2 identičnih čvorova GT. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic11.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak5</p>
    <img alt="" src="/assets/lesson33/pic12.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 4 identičnih čvorova GG. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic13.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak6</p>
    <img alt="" src="/assets/lesson33/pic14.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 2 identičnih čvorova CA. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic15.svg" className={classes.indent4x} />
    <p className={classes.indent2x}>korak7</p>
    <img alt="" src="/assets/lesson33/pic16.svg" className={classes.indent3x} />
    <p className={classes.indent3x}>Našli smo 2 identičnih čvorova CC. Spajamo ih:</p>
    <img alt="" src="/assets/lesson33/pic17.svg" className={classes.indent4x} />

    <p className={classes.indent2x}>
      Na kraju dobijamo isti De Brujinov graf kao i kada smo ga konsturisali od genoma:
    </p>
    <img alt="" src="/assets/lesson33/pic18.svg" className={classes.indent3x} />
    <img alt="" src="/assets/lesson33/pic19.svg" className={classes.indent4x} />
    <img alt="" src="/assets/lesson33/pic20.svg" className={classes.indent3x} />
    <img alt="" src="/assets/lesson33/pic21.svg" className={classes.indent4x} />
    <p className={classes.indent1x}>
      Dakle, De Brujinovo graf možemo konstruisati na osnovu očitavanja (k-grama) tako što:
    </p>
    <p className={classes.indent2x}>
      1. Predstavimo sve k-grame kao grane između čvorova koji predstavljaju prefiks i sufiks dužine
      (k-1) od tih k-grama;
    </p>
    <p className={classes.indent2x}>2. Spojimo sve one čvorove koji su jednaki.</p>
    <p className={classes.indent1x}>Postoji još jedan način na koji ga možemo konstruisati:</p>
    <p className={classes.indent2x}>
      1. Formiramo čvorove za svaki (k-1)-gram koji predstavlja sufiks ili prefiks datihk-grama;
    </p>
    <p className={classes.indent2x}>
      2. Za svaki k-gram povezati čvorove koji predstavljaju njegov prefiks i sufiks.
    </p>
    <p className={classes.indent1x}>
      Dok genom, kao što smo već i imali prilike da vidimo, dobijamo pomoću Ojlerove putanje u tom
      grafu. Ono što nam preostaje da uradimo jeste da nađemo algoritam koji pronalazi tu putanju.
    </p>
  </div>
);

export default Lesson33;
