import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';

const Lesson221 = () => (
  <div className={classes.root}>
    <h1> DIRIHLEOV PRINCIP </h1>
    <p className={classes.indent1x}>
      U ovom delu tražimo metod koji će nam omogućiti primenu algoritama za tačno podudaranje u
      problemu približnog podudaranja šablona P sa tekstom T.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>Počnimo od sledećeg primera:</p>
    <p className={classes.indent2x}>
      Pretpostavimo da imamo šablon P i da nam se on u tekstu T pojavljuje sa 1 promenom. Podelimo
      šablon P na dva dela (particije), u i v:
    </p>
    <img alt="" src="/assets/lesson221/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Kako se dati šablon pojavljuje u tekstu T sa 1 promenom, a mi imamo 2 njegova dela, to bi
      značilo da se tačno jedan od ta dva dela mora naći u tom tekstu bez ijedne promene (jer se ta
      jedna promena može naći samo u jednom delu tog šablona).
    </p>
    <p className={classes.indent1x}>
      Princip koji smo prikazali na ovom jednostavnom primeru jeste Dirihleov princip i njegova
      definicija je sledeća:
    </p>
    <p className={classes.indent2x}>
      <span className={classes.red}>Definicija.</span> Ako imamo k predmeta koji su smešteni u k + 1
      kutiju, tada postoji bar jedna kutija koja je prazna.
    </p>
    <p className={classes.indent1x}>
      Nakon prikaza Dirihleovog principa, posmatrajmo opštiju verziju prethodnog primera, tj. šablon
      P koji se pojavljuje u tekstu T sa ne više od k razlika (promena).
    </p>
    <p className={classes.indent2x}>
      Na sličan način kao što smo to radili i kada smo imali jednu razliku, šablon P ćemo podeliti
      na k + 1 particiju:
    </p>
    <img alt="" src="/assets/lesson221/pic2.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Kako imamo do k razlika (promena), a k + 1 particija, prema Dirihleovom principu bar jedna od
      datih particija će se pojaviti u tekstu bez ijedne promene. Stoga, na svaku particiju
      primenjujemo algoritam za tačno podudaranje sa tekstom:
    </p>
    <img alt="" src="/assets/lesson221/pic3.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Pretpostavimo da smo dobili jedno podudaranje, i to za particiju P3. Ovo će predstavljati
      naznaku da postoji mogućnost da će se susedne particije približno podudarati sa tekstom T.
    </p>
    <img alt="" src="/assets/lesson221/pic4.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Nakon pronalaska pozicije gde se podudaranje desilo vršimo verifikaciju za preostale particije
      kako bismo videli da li se dati šablon P nalazi u tekstu T sa ne više od k promena:
    </p>
    <img alt="" src="/assets/lesson221/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Dirihleov princip nam predstavlja most koji nam omogućava korišćenje algoritama za tačno
      podudaranje:
    </p>
    <img alt="" src="/assets/lesson221/pic6.svg" className={classes.indent2x} />
    <h2> Implemetacije u Python-u</h2>

    <p className={classes.indent1x}>
      Koristimo Boyer-Moore algoritam za tačno podudaranje sa malom izmenom.
    </p>
    <CodeEditor
      code={`
def BoyerMooreAlg(p, t):
  izlaz = set()
  pom  = 0
  m = len(p)
  n = len(t)
  losKarakter = heuristikaLosKarakter(p)
  pozicija_granice = [0] * (m + 1)
  pomeraj = [0] * (m + 1)
  preprocesiranje1(pomeraj, pozicija_granice, p, m)
  preprocesiranje2(pomeraj, pozicija_granice, p, m)
  while pom <= n - m:
    j = m - 1
    while j >= 0 and p[j] == t[pom + j]:
      j -= 1
    
    if j < 0:
      # umesto da štampamo poziciju gde se desilo podudaranje, dodajemo je u skup izlaz
      izlaz.add(pom)
      pomerajLK = (m - losKarakter[m-1][mapaKaraktera[t[pom + m]]] if pom + m < n else 1)
      pomerajDS = pomeraj[0]
      if pomerajDS >= pomerajLK:
        pom += pomerajDS
      else:
        pom += pomerajLK
    else:
      pomerajLosKarakter = j - losKarakter[j - 1][mapaKaraktera[t[pom + j]]]
      pomerajDobarSufiks = pomeraj[j+1]
      if pomerajDobarSufiks >= pomerajLosKarakter:
        pom += pomerajDobarSufiks
      else:
        pom += pomerajLosKarakter
  return izlaz
  `}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>
      Sledeća funkcija vraća sve pozicije gde se dati šablon podudara sa tekstom do na n razlika.
    </p>
    <CodeEditor
      code={`
def pribliznoPodudaranje(p, t, n):
  # primenjujemo Dirihleov princip
  duzina_particije = int(round(len(p) / (n + 1)))
  # skup svih pozicija gde se desilo približno podudaranje
  priblizna_podudaranja = set()
  # za svaku particiju Boyer-Moore algoritmom vraćamo skup pozicija gde se podudaranje desilo
  for i in range(n+1):
    # početak i kraj i-te pozicije
    start = i * duzina_particije
    kraj = min((i+1) * duzina_particije, len(p))
    #tražimo da li imamo tačno podudaranje i-te particije sa tekstom
    podudaranja = BoyerMooreAlg(p[start:kraj], t)
    # proverimo sve pozicije gde se desilo podudaranje i-te particije
    for poz in podudaranja:
      # ako šablon ispada iz opsega teksta
      if poz < start or (poz - start) + len(p) > len(t):
        continue
      # brojima sva nepodudaranja koja postoje između particije koje se nalaze 
      # pre i posle particije koja se podudara sa tekstom
      # i ako ne prelaze n, onda smo našli približno podudaranje šablona sa tekstom
      nepodudaranja = 0
      for j in range (0,start):
        if not p[j] == t[poz - start + j]:
          nepodudaranja += 1
        if nepodudaranja > n:
          break
      for j in range (kraj, len(p)):
        if not p[j] == t[poz - start + j]:
          nepodudaranja += 1
        if nepodudaranja > n:
          break
      # ako smo imali najviše n nepodudaranja dodajemo poziciju približnog podudaranja šablona u skup
      if nepodudaranja <= n:
        priblizna_podudaranja.add(poz - start)
  
  #koristili smo skup jer on ne dozvoljava ponavljajuće vrednosti koje možemo dobiti 
  return list(priblizna_podudaranja)
    `}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>Testiramo datu funkciju na jednostavnom primeru:</p>
    <CodeEditor
      code={`
p = 'AACTTG'
t = 'CACTTAATTTG'
print(pribliznoPodudaranje(p, t, 2))
    `}
      result={`
    [0, 5]`}
      customClass={classes.indent2x}
    />
    <p className={classes.indent1x}>Proveravamo tačnost:</p>
    <CodeEditor
      code={`
t[0:6]
    `}
      result={`
    CACTTA`}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
t[5:11]
    `}
      result={`
    AATTTG`}
      customClass={classes.indent2x}
    />
  </div>
);

export default Lesson221;
