import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';

const Lesson2111 = () => (
  <div className={classes.root}>
    <h1>PRAVILO LOŠEG KARAKTERA</h1>
    <p>
      U ovom pravilu kada dođemo do prvog nepodudaranja karaktera između teksta T i šablona P,
      preskačemo poravnanja (pomeramo šablon u desno) sve dok:
    </p>
    <p className={classes.ml8}>- nepodudaranje postane podudaranje ili</p>
    <p className={classes.ml8}>
      - šablon P ne prođe mesto (karakter) na kojem se desilo nepodudaranje.
    </p>
    <p>Kako bismo približili ovo pravilo, pogledajmo sledeći primer:</p>
    <p>PRIMER</p>
    <Image src="/assets/lesson2111/pic1.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      Krećemo od prvog poravnanja i radimo poređenje karaktera zdesna na levo.
    </p>
    <p className={classes.ml8}>
      Dolazimo do prvog nepodudaranja kad dođemo do prvog T u šablonu, koje se ne podudara sa C iz
      teksta:
    </p>
    <Image src="/assets/lesson2111/pic2.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      Preskačemo poravnjanja, odnosno pomeramo šablon P u desno tako da se C iz teksta podudara sa
      odgovarajućim C iz šablona ili ako ne postoji C u šablonu, onda pomeramo šablon desno tako da
      prođemo C iz teksta.
    </p>
    <Image src="/assets/lesson2111/pic3.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      Kako karakter C postoji u šablonu, šablon se pomera 3 mesta u desno ili posmatrajući
      poravnanja, preskačemo 2 poravnanja:
    </p>
    <Image src="/assets/lesson2111/pic4.svg" className={classes.ml8} />
    <p className={classes.ml8}>Ponavljamo isti postupak.</p>
    <Image src="/assets/lesson2111/pic5.svg" className={classes.ml8} />
    <Image src="/assets/lesson2111/pic6.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      Dolazimo do nepodudaranje sa karakterom A iz teksta koji se ne pojavljuje u šablonu P levo od
      karaktera G.
    </p>
    <Image src="/assets/lesson2111/pic7.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      Šablon P pomeramo u desno tako da prođe karakter gde se desilo nepodudaranje (karakter A):
    </p>
    <Image src="/assets/lesson2111/pic8.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      Završavamo drugi koraka i kako nismo došli do kraja teksta, ponavljamo isti postupak.
    </p>
    <Image src="/assets/lesson2111/pic9.svg" className={classes.ml8} />
    <Image src="/assets/lesson2111/pic10.svg" className={classes.ml8} />
    <p className={classes.ml8}>Dolazimo do podudaranja na poziciji 10.</p>
    <p className={classes.ml8}>
      Kako tražimo sva pojavljivanja datog šablona u tekstu, posmatramo sledeći karakter teksta, u
      ovom slučaju karakter G i tražimo karakter G u šablonu i zatim pomeramo šablon u desno tako da
      se oni nađu jedan ispod drugog. Ako G ne postoji u šablonu, onda se ceo šablon pomera tako da
      prođe karakter G iz teksta:
    </p>
    <Image src="/assets/lesson2111/pic11.svg" className={classes.ml8} />
    <Image src="/assets/lesson2111/pic12.svg" className={classes.ml8} />
    <Image src="/assets/lesson2111/pic13.svg" className={classes.ml8} />
    <p className={classes.ml8}>Nastavljamo isti postupak sve dok ne dođemo do kraja teksta.</p>
    <h2>Algoritam za pravilo lošeg karaktera</h2>
    <p>
      {`Pomoćna funkcija heuristikaLosKarakter(p) vrši preprocesiranje šablona p, tj. vraća listu koja
      čuva poslednja pojavljivanja karaktera iz skupa {A, C, G, T} za sve prefikse šablona p.`}
    </p>
    <CodeEditor
      code={`
    mapaKaraktera = {'A': 0, 'C': 1,'G': 2,'T': 3}
    def heuristikaLosKarakter(niska):
        losKarakter = [0]*len(niska)
        # Inicijalizujemo pojavljivanje svih karaktera na -1 
        # za svaki prefiks koji se završava na poziciji i
        for i in range(len(niska)):
            losKarakter[i] = [-1, -1, -1, -1]
        # Popunjavamo prava poslednja pojavljivanja datih karaktera za svaki prefiks
        for i in range(len(niska)):
            if i > 0:
                losKarakter[i][mapaKaraktera['A']] = losKarakter[i - 1][mapaKaraktera['A']]
                losKarakter[i][mapaKaraktera['C']] = losKarakter[i - 1][mapaKaraktera['C']]
                losKarakter[i][mapaKaraktera['G']] = losKarakter[i - 1][mapaKaraktera['G']]
                losKarakter[i][mapaKaraktera['T']] = losKarakter[i - 1][mapaKaraktera['T']]
            losKarakter[i][mapaKaraktera[niska[i]]] = i
        return losKarakter`}
      customClass={classes.ml8}
    />
    <p>U prethodnom primeru lista losKarakter bi imala sledeće vrednosti:</p>
    <Image src="/assets/lesson2111/pic14.svg" className={classes.ml8} />
    <p>
      Funkcija pretragaLosKarakter(p, t) vraća sve pozicije na kojima počinje podudaranje šablona p
      sa tekstom t i ona koristi prethodnu pomoćnu funkciju preprocesiranja šablona p.
    </p>
    <CodeEditor
      code={`
    def pretragaLosKarakter(t, p): 
        ''' 
        Funkcija pretrage koja koristi pravilo 
        loš karakter Boyer-Moore algoritma
        '''
        m = len(p) 
        n = len(t) 
    
        # kreiramo losKarakter listu tako što zovemo 
        # funkicju preprocesiranja heuristikaLosKarakter()
        # za dati šablon p
        losKarakter = heuristikaLosKarakter(p) 
    
        # pom je pozicija gde se nalazi početak šablon u odnosu na tekst
        # krećemo od prvog poravnanja, tj. kad je šablon na početku teksta
        pom = 0
        while(pom <= n - m): 
            j = m - 1
    
            # Smanjujemo indeks j od šablona 
            # sve dok se karakteri šablona i teksta podudaraju za trenutno pom
            while j >= 0 and p[j] == t[pom + j]: 
                j -= 1
    
            # Ako se šablon nalazi u tekstu na poziciji pom, 
            # onda će indeks j postati -1 nakon petlje iznad
            if j<0: 
                print("Šablon se javlja na poziciji %d" %pom) 
    
                '''	 
                    Pomeramo šablon tako da se sledeći karakter poravna 
                        sa poslednjim pojavljivanjem tog karaktera u šablonu.
                        Uslov pom + m < n je neophodan za slučaj da se šablon
                        pojavio na kraju 
                '''
                pom += (m - losKarakter[m-1][mapaKaraktera[t[pom + m]]] if pom + m < n else 1) 
            else: 
                ''' 
                Pomeramo šablon tako da se loš karakter iz teksta 
                    poravna sa poslednjim pojavljivanjem tog karaktera 
                    u šablonu levo od karaktera nepodudaranja.
                '''
                pom += j - losKarakter[j - 1][mapaKaraktera[t[pom + j]]]`}
      customClass={classes.ml8}
    />
    <p>
      Kako bi algritam bio u potpunosti jasan, detaljnije ćemo objasniti sledeća pomeranja, odnosno
      uvećavanja promenjive pom.
    </p>
    <p>Kada dođemo do podudaranja (j = -1), promenjiva pom se uvećava na sledeći način:</p>
    <CodeEditor
      code={`
      pom += (m - losKarakter[m-1][mapaKaraktera[t[pom + m]]] if pom + m < n else 1)`}
      customClass={classes.ml8}
    />
    <p className={classes.ml8}>Posmatrajmo sledeći deo prethodnog primera:</p>
    <Image src="/assets/lesson2111/pic15.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Dolazimo do podudaranja. Želimo da odredimo koliko pomeramo šablon u desno.
    </p>
    <Image src="/assets/lesson2111/pic16.svg" className={classes.ml18} />
    <p className={classes.ml18}>Imamo da je t[pom + m] = G i mapaKaraktera[’G’] = 2.</p>
    <p className={classes.ml18}>
      Pomoću liste losKarakter tražimo poziciju poslednjeg pojavljivanje slova G u šablonu i
      dobijamo da je losKarakter[7][mapaKaraktera[’G’]] = losKarakter[7][2] = 6.
    </p>
    <Image src="/assets/lesson2111/pic17.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Pošto šablon pomeramo u desno, onda ćemo ga pomeriti za broj mesta koji će biti razlika dužine
      tog šablona(m = 8) i pozicije poslednjeg pojavljivanja tog karaktera u šablonu (6) , odnosno
      za 8 - 6 = 2 pozicije u desno.
    </p>
    <Image src="/assets/lesson2111/pic18.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Međutim, ako smo došli do kraja teksta (pom + m = n), onda ćemo preći na sledeće poravnanje,
      tj. povećati pom za 1 i u sledećoj spoljašnjoj while petlji izaći iz programa.
    </p>
    <p>Ako do podudaranja nije došlo(slučaj else), tada ćemo pom povećati na sledeći način:</p>
    <CodeEditor
      code={`
      pom += j - losKarakter[j - 1][mapaKaraktera[t[pom + j]]]`}
      customClass={classes.ml8}
    />
    <p className={classes.ml8}>Posmatrajmo sledeći deo prethodnog primera:</p>
    <Image src="/assets/lesson2111/pic19.svg" className={classes.ml18} />
    <p className={classes.ml18}>
      Dolazimo do nepodudaranja na poziciji j=4 (karakter T). To je karakter t[pom + j] = t[0 + 4] =
      t[4] = ‘C’ teksta T.
    </p>
    <p className={classes.ml18}>
      Tražimo karakter C u šablonu levo od pozicije nepodudaranja odnosno u prefiksu šablona koji ne
      sadrži karakter nepodudaranja . Kako je pozicija nepodudaranja j=4, a pozicija tog karaktera u
      prefiksu šablona losKarakter[3][mapaKaraktera[‘C’]] = 1, onda pomeramo šablon u desno za 4 - 1
      = 3 pozicije:
    </p>
    <Image src="/assets/lesson2111/pic20.svg" className={classes.ml18} />
    <Image src="/assets/lesson2111/pic21.svg" className={classes.ml18} />
  </div>
);

export default Lesson2111;
