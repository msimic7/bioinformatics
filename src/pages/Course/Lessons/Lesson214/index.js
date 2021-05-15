import React from 'react';
import classes from '../Lesson.module.scss';
import CodeEditor from '../../../../components/CodeEditor';
import Image from '../../../../components/Image';

const Lesson214 = () => (
  <div className={classes.root}>
    <h1>IMPLEMENTACIJA INDEKSA ZA TEKST T</h1>
    <Image src="/assets/lesson214/pic1.svg" className={classes.ml8} />
    <p className={classes.ml8}>
      <b>k-gram indeks od T</b> predstavlja multimapu:
    </p>
    <p className={classes.ml18}>
      * mapu, jer povezuje ključeve (k-grame datog teksta T) sa vrednostima (njihovim pozicijama u
      tom tekstu)
    </p>
    <p className={classes.ml18}>
      * multimapu, jer jednom k-gramu može odgovarati više pozicija u tekstu T
    </p>
    <p className={classes.ml8}>
      Za implementaciju multimape možemo koristiti dve strukture podataka. Jedna od njih se bazira
      na redosledu, kao što smo imali kod indeksa knjige, dok se druga bazira na grupisanju
      podataka, kao što smo imali kod grupisanja namirnica u prodavnici.
    </p>
    <h2 className={classes.ml8}>Lista</h2>
    <p className={classes.ml18}>Prva struktura koju ćemo raditi bazira se na redosledu podataka.</p>
    <p className={classes.ml18} />
    <p className={classes.ml18}>Neka nam je dat sledeći tekst T:</p>
    <Image src="/assets/lesson214/pic2.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Formiramo 3-gram indeks od T kao listu parova (ključ, vrednost), gde je ključ 3-gram teksta T,
      a vrednost njegova pozicija u tom tekstu. Za prvi 3-gram datog teksta to bi izgledalo na
      sledeći način:
    </p>
    <Image src="/assets/lesson214/pic3.svg" className={classes.ml28} />
    <p className={classes.ml18}>Uradimo isti postupak za svaki 3-gram datog teksta:</p>
    <Image src="/assets/lesson214/pic4.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Zatim sortiramo ključeve (3-grame) na osnovu leksikografskog redosleda i dobijamo listu:
    </p>
    <Image src="/assets/lesson214/pic5.svg" className={classes.ml28} />
    <p className={classes.ml18}>Na sledećem primeru ćemo pokazati kako je koristimo.</p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson214/pic6.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Pretpostavimo da smo uzeli poslednji 3-gram šablona P. Želimo da nađemo njegovu poziciju u
      tekstu T pomoću liste koja predstavlja 3-gram indeks tog teksta:
    </p>
    <Image src="/assets/lesson214/pic7.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      To radimo koristeći <b>binarnu pretragu</b>:
    </p>
    <p className={classes.ml28}>korak1</p>
    <Image src="/assets/lesson214/pic8.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak2</p>
    <Image src="/assets/lesson214/pic9.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak3</p>
    <Image src="/assets/lesson214/pic10.svg" className={classes.ml38} />
    <p className={classes.ml18}>
      U Pythonu-u već postoji ugrađena funkcija za binarnu pretragu koju ćemo mi koristiti:
    </p>
    <p className={classes.ml28}>
      <b>bisect.bisect_left(a, x)</b> - najlevlja pozicija gde x može biti ubačen u a, tako da se
      održi redosled elemenata od a.
    </p>
    <p className={classes.ml28}>* za primenu ove funkcije niz a mora biti sortiran rastuće</p>
    <Image src="/assets/lesson214/pic11.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Pokazaćemo primenu date funkcije na prethodnom primeru, samo što ćemo ovog puta posmatrati
      3-gram GTG šablona P:
    </p>
    <Image src="/assets/lesson214/pic12.svg" className={classes.ml38} />

    <h2 className={classes.ml8}>Heš tabela</h2>
    <p className={classes.ml18}>
      Druga struktura jeste heš tabela koja se bazira na grupisanju podataka pomoću heš funkcije.
    </p>
    <p className={classes.ml18} />
    <p className={classes.ml18}>
      Formiraćemo heš tabelu za isti tekst T kao i u prethodnom primeru:
    </p>
    <Image src="/assets/lesson214/pic13.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Počinjemo sa heš tabelom koja se sastoji od niza praznih polja (polja su povezane liste, koje
      su na početku null):
    </p>
    <Image src="/assets/lesson214/pic14.svg" className={classes.ml28} />
    <p className={classes.ml18}>
      Dodavanje elemenata (3-grama iz teksta i njihovih pozicija) će se vršiti na sledeći način:
    </p>
    <p className={classes.ml18}>korak1</p>
    <Image src="/assets/lesson214/pic15.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak2</p>
    <Image src="/assets/lesson214/pic16.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak3</p>
    <Image src="/assets/lesson214/pic17.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak4</p>
    <Image src="/assets/lesson214/pic18.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak5</p>
    <Image src="/assets/lesson214/pic19.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak6</p>
    <Image src="/assets/lesson214/pic20.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak7</p>
    <Image src="/assets/lesson214/pic21.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak8</p>
    <Image src="/assets/lesson214/pic22.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak9</p>
    <Image src="/assets/lesson214/pic23.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak10</p>
    <Image src="/assets/lesson214/pic24.svg" className={classes.ml28} />
    <p className={classes.ml18}>korak11</p>
    <Image src="/assets/lesson214/pic25.svg" className={classes.ml28} />
    <p className={classes.ml18}>Na sledećem primeru ćemo pokazati kako koristimo ovu heš tabelu:</p>
    <p className={classes.ml18}>PRIMER</p>
    <Image src="/assets/lesson214/pic26.svg" className={classes.ml28} />
    <p className={classes.ml28}>
      Pretpostavimo da smo uzeli poslednji 3-gram šablona P i želimo da nađemo njegovu poziciju u
      tekstu T pomoću heš tabele koja predstavlja 3-gram indeks tog teksta:
    </p>
    <Image src="/assets/lesson214/pic27.svg" className={classes.ml38} />
    <p className={classes.ml28}>Pomoću heš funkcije određujemo kojem polju taj 3-gram pripada:</p>
    <Image src="/assets/lesson214/pic28.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Zatim pretražujemo to polje, tj povezanu listu sve dok ne pronađemo sve 3-grame koji se
      podudaraju sa njim:
    </p>
    <p className={classes.ml28}>korak1</p>
    <Image src="/assets/lesson214/pic29.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak2</p>
    <Image src="/assets/lesson214/pic30.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak3</p>
    <Image src="/assets/lesson214/pic31.svg" className={classes.ml38} />
    <p className={classes.ml28}>korak4</p>
    <Image src="/assets/lesson214/pic32.svg" className={classes.ml38} />
    <p className={classes.ml28}>
      Dolazimo do kraja liste, pa samim tim prestajemo sa daljom pretragom i vraćamo 3 indeksna
      pogotka 8, 9 i 10.
    </p>
    <p className={classes.ml18}>
      U Python-u koristimo rečnik jer on predstavlja implementaciju heš tabele. Rečnik se koristi na
      sledeći način:
    </p>
    <CodeEditor
      code={`
      t = ‘GTGCGTGTGGGGG’
      indeks = {‘GTG’: [0, 4, 6],‘TGC’: [1], ‘GCG’: [2],
                ‘CGT’: [3], ‘TGT’: [5], ‘TGG’: [7], 
                ‘GGG’: [8, 9, 10] }
      indeks[‘GGG’]
    `}
      result={`
    [8, 9, 10]`}
      customClass={classes.ml28}
    />
    <p className={classes.ml18}>
      U ovoj implementaciji detalji su sakriveni od nas, ne znamo koja se heš funkcija koristi, kao
      ni koliko polja ima ta heš tabela. O svemu tome brine Python, ono što je nama bitno jeste da
      kada korsitimo rečnik zapravo koristimo heš tabelu koju smo malo pre prikazali.
    </p>
    <h2>Implemetacija indeksa pomoću liste</h2>

    <p className={classes.ml8}>
      k-gram indeks teksta T kao lista parova (k-gram teksta T, pozicija početka tog k-grama u
      tekstu T)
    </p>
    <CodeEditor
      code={`
import bisect
import sys
class Indeks:
    def init(self, t, k):
        ''' Kreira indeks od svih k-grama '''
        self.k = k 
        self.indeks = []
        for i in range(len(t) - k + 1):  # za svaki k-gram
            self.indeks.append((t[i:i+k], i))  # dodajemo par (k-gram, poziciju njegvog početka)
        self.indeks.sort()  # sortiramo po k-gramima
    
    def pretrazi(self, p):
        ''' Vraća pogotke indeksa za prvi k-gram šablona P '''
        kgram = p[:self.k]  # prvi k-gram šablona P
        i = bisect.bisect_left(self.indeks, (kgram, -1))  # binarna pretraga
        pogodak_indeksa = []
        # idemo od mesta gde smo naišli na prvi pogodak sve do kraja liste ili dok ne naiđemo na različiti k-gram
        while i < len(self.indeks):
            if self.indeks[i][0] != kgram:
                break
            pogodak_indeksa.append(self.indeks[i][1])
            i += 1
        return pogodak_indeksa
    `}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>
      Kao što smo već i videli na primerima, ako je nešto pogodak indeksa, to ne mora značiti da će
      biti sigurno podudaranje šablona sa tekstom, stoga moramo izvršiti verifikaciju.
    </p>
    <CodeEditor
      code={`
def pretragaUzPomocIndeksa(p, t, indeks):
    k = indeks.k
    pozicije_pojavljivanja = []
    for i in indeks.pretrazi(p):
        if p[k:] == t[i + k : i + len(p)]:  # verifikacija da li se ostatak šablona P poklapa sa tekstom
            pozicije_pojavljivanja.append(i)
    return pozicije_pojavljivanja
    `}
      customClass={classes.ml18}
    />
    <CodeEditor
      code={`
t = 'ACTTGGAGATCTTTGAGGCTAGGTATTCGGGATCGAAGCTCATTTCGGGGATCGATTACGATATGGTGGGTATTCGGGA'
p = 'GGTATTCGGGA'
    `}
      customClass={classes.ml18}
    />
    <CodeEditor
      code={`
indeks = Indeks(t, 4)
print(pretragaUzPomocIndeksa(p, t, indeks))
    `}
      result={`
    [21, 68]`}
      customClass={classes.ml18}
    />
    <p className={classes.ml8}>Proveravamo da li je rešenje dobro:</p>
    <CodeEditor
      code={`
t[21:21+len(p)] == p
    `}
      result={`
    True`}
      customClass={classes.ml18}
    />
  </div>
);

export default Lesson214;
