import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';

const Lesson33 = () => (
  <div className={classes.root}>
    <h1> DE BRUJINOV GRAF </h1>
    <p className={classes.ml8}>
      Za rekonstrukciju genoma potrebno je da nađemo Ojlerovu putanju u njegovom De Brujinovom
      grafu. Posmatrajmo primer iz prethodnog dela:
    </p>
    <Image src="/assets/lesson33/pic1.svg" className={classes.ml18} />
    <p className={classes.ml8}>
      U ovom primeru smo od poznatog genoma TAATCCGATGGGATGTT sastavili njegov De Brujinov graf.
      Međutim, u stvarnom problemu genom je nepoznat. Jedino što od podataka imamo jesu očitavanja
      (k-grami) genoma kojeg smo sekvencionirali. Da li na osnovu tih k-grama možemo konstruisati De
      Brujinov graf?
    </p>
    <p className={classes.ml18}>
      Kako bismo odgovorili na dato pitanje, posmatraćemo samo dobijena očitavanja i to u
      leksikografskom redosledu (jer nam genom nije poznat, pa samim tim ni njihove pozicije u
      genomu):
    </p>
    <Image src="/assets/lesson33/pic2.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Predstavimo svaki 3-gram kao granu između njegovog prefiksa i sufiksa dužine 2:
    </p>
    <Image src="/assets/lesson33/pic3.svg" className={classes.ml28} />
    <p className={classes.ml18}>Zatim nalazimo sve iste čvorove i spajamo ih:</p>
    <p className={classes.ml18}>korak1</p>
    <Image src="/assets/lesson33/pic4.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 6 identičnih čvorova AT. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic5.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak2</p>
    <Image src="/assets/lesson33/pic6.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 4 identična čvora TG. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic7.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak3</p>
    <Image src="/assets/lesson33/pic8.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 2 identična čvora AA. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic9.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak4</p>
    <Image src="/assets/lesson33/pic10.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 2 identična čvorova GT. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic11.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak5</p>
    <Image src="/assets/lesson33/pic12.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 4 identična čvora GG. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic13.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak6</p>
    <Image src="/assets/lesson33/pic14.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 2 identična čvora CA. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic15.svg" className={classes.ml38} />
    <p className={classes.ml18}>korak7</p>
    <Image src="/assets/lesson33/pic16.svg" className={classes.ml28} />
    <p className={classes.ml28}>Našli smo 2 identična čvora CC. Spajamo ih:</p>
    <Image src="/assets/lesson33/pic17.svg" className={classes.ml38} />
    <p className={classes.ml18}>
      Na kraju dobijamo isti De Brujinov graf kao i kada smo ga konsturisali od genoma:
    </p>
    <Image src="/assets/lesson33/pic18.svg" className={classes.ml28} />
    <Image src="/assets/lesson33/pic19.svg" className={classes.ml38} />
    <Image src="/assets/lesson33/pic20.svg" className={classes.ml28} />
    <Image src="/assets/lesson33/pic21.svg" className={classes.ml38} />
    <p className={classes.ml8}>
      Dakle, De Brujinovo graf možemo konstruisati na osnovu očitavanja (k-grama) tako što:
    </p>
    <p className={classes.ml18}>
      1. Predstavimo sve k-grame kao grane između čvorova koji predstavljaju prefiks i sufiks dužine
      (k-1) od tih k-grama;
    </p>
    <p className={classes.ml18}>2. Spojimo sve one čvorove koji su identični.</p>
    <p className={classes.ml8}>
      Pored ovog načina, postoji i drugi način za konstrukciju De Brujinovog grafa, i on se sastoji
      iz sledećih koraka:
    </p>
    <p className={classes.ml18}>
      1. Formiramo čvorove za svaki (k-1)-gram koji predstavlja sufiks ili prefiks datih k-grama i
      izbacimo sve duplikate;
    </p>
    <p className={classes.ml18}>
      2. Za svaki k-gram povežemo čvorove koji predstavljaju njegov prefiks i sufiks.
    </p>
    <p className={classes.ml8}>
      Implementacija algoritma koji formira De Brujinov graf na ovaj način je prikazana ispod.
    </p>
    <CodeEditor
      code={`
# Delimo nisku na k-grame
def podeliKgrame(niska, k):
  kgrami = []
  n = len(niska)
  for i in range(0, n- k + 1):
    kgram = niska[i : i + k]
    kgrami.append(kgram)
  return kgrami

# Formiramo De Brujinov graf
def deBrujinovGraf(kgrami):
  listaSuseda = dict()
  for kgram in kgrami:
    # čvorovi formirani od k-grama koji predstavljaju prefiks i sufiks dužine k-1 
    u = kgram[:-1]
    v = kgram[1:]
    if u not in listaSuseda:
      listaSuseda[u] =[]
    if v not in listaSuseda:
      listaSuseda[v] =[]
    listaSuseda[u].append(v)
  return listaSuseda

# Testiranje funkcija
niska = 'TAATCCGATGGGATGTT'
kgrami =podeliKgrame(niska, 3)
deBrujinovGraf(kgrami)
      `}
      result={`
{'AA': ['AT'],
 'AT': ['TC', 'TG', 'TG'],
 'CC': ['CG'],
 'CG': ['GA'],
 'GA': ['AT', 'AT'],
 'GG': ['GG', 'GA'],
 'GT': ['TT'],
 'TA': ['AA'],
 'TC': ['CC'],
 'TG': ['GG', 'GT'],
 'TT': []}
      `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Genom, kao što smo već i imali prilike da vidimo, dobijamo pomoću Ojlerove putanje u tom
      grafu. Ono što nam preostaje da uradimo jeste da nađemo algoritam koji pronalazi tu putanju.
    </p>
  </div>
);
export default Lesson33;
