import React from 'react';
import CodeEditor from '../../../../components/CodeEditor';
import classes from '../Lesson.module.scss';

const Lesson34 = () => (
  <div className={classes.root}>
    <h1>OJLEROVA TEOREMA</h1>
    <p className={classes.indent1x}>PROBLEM KENIGSBERŠKIH MOSTOVA</p>
    <p className={classes.indent2x}>
      Preko reke Pregel koja protiče kroz Kenigsberg (nekada u Pruskoj, danas pod imenom
      Kalinjingrad u Rusiji) i koju dva ostrva dele na dva rukavca, postoji sedam mostova koji
      povezuju ostrva i obale reke, kao što je prikazano na slici ispod. Stanovnici grada su dugo
      bili okpirani sledećim pitanjem: Da li je moguće preći sve mostove ne prelazeći ni preko
      jednog mosta dva ili više puta?
    </p>
    <img alt="" src="/assets/lesson34/pic1.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Ojler je u problemu kenigsberških mostova tražio put koji će preći preko svakog mosta tačno
      jednom, ali i koji će <b>početi i završiti se u istom mestu</b>. Odnosno, on je tražio ciklus
      grafa koji će posetiti svaku njegovu granu tačno jednom. Shodno tome, umesto problema Ojlerove
      putanje, posmatraćemo sledeći problem:
    </p>
    <p className={classes.indent1x}>PROBLEM OJLEROVOG CIKLUSA</p>
    <p className={classes.indent2x}>ulaz: graf Graf</p>
    <p className={classes.indent2x}>
      izlaz: niska Ciklus koja predstavlja ciklus tog grafa i koja posećuje svaku njegovu granu
      tačno jednom
    </p>
    <p className={classes.indent1x}>
      Ovo neće predstavljati problem jer postoji jako mala razlika između nalaženja Ojlerovog
      ciklusa i nalaženja Ojlerove putanje. Kada naučimo kako nalazimo ciklus, naučićemo i kako
      nalazimo putanju koja odgovara tom ciklusu.
    </p>
    <p className={classes.indent1x}>
      <span className={classes.red}>Definicija.</span> Graf u kojem postoji Ojlerov ciklus nazivamo{' '}
      <b>Ojlerovim grafom</b>.
    </p>
    <p className={classes.indent1x}>
      Počećemo od sledećih primera i pitanja da li ovi grafovi sadrže Ojlerov ciklus, tj. da li su
      oni Ojlerovi grafovi:
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Ono što možemo zaključiti iz datih primera jeste da ako graf <b>nije balansiran</b>, odnosno
      ako postoji čvor u tom grafu za koji važi da je broj njegovih ulaznih grana nije jednak broju
      njegovih izlaznih grana, onda taj graf ne može biti Ojlerov. Samim tim, imamo da važi: ako je
      graf Ojlerov, onda je on i balansiran.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ono što nas zanima jeste da li će važiti obrnuti smer, tj. da li će važiti da ako je graf
      balansiran (i naravno povezan, tj. za svaka dva čvora postoji putanja koja ih povezuje), da je
      on onda i Ojlerov. Ovaj smer predstavlja <b>Ojlerovu teoremu</b>, koju ćemo pokazati pomoću
      sledećeg primera:
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <p className={classes.indent2x}>
      Pretpostavimo da imamo mrava, koji nasumično ide kroz balansiran graf:
    </p>
    <img alt="" src="/assets/lesson34/pic5.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>I koji ne sme da poseti jednu granu dva puta.</p>
    <p className={classes.indent2x}>
      Kako mrav ide nasumično, tako postoji velika šansa da u nekom trenutku ostane zaglavljen.
      Posmatrajmo jednu moguću putanju kojom bi mrav išao:
    </p>
    <img alt="" src="/assets/lesson34/pic6.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ovaj problem rešavamo tako što dopuštamo mravu da počne iz drugog čvora putanje koju je već
      formirao, i to iz onog čvora te putanje koji ima neposećene izlazne grane. U ovom slučaju, to
      bi bio sledeći čvor (zeleni čvor):
    </p>
    <img alt="" src="/assets/lesson34/pic7.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Nakon što pronađemo novi početni čvor, mrav prvo mora obići putanju koju je prethodno obišao:
    </p>
    <p className={classes.indent2x}>korak1</p>
    <img alt="" src="/assets/lesson34/pic8.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak2</p>
    <img alt="" src="/assets/lesson34/pic9.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak3</p>
    <img alt="" src="/assets/lesson34/pic10.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak4</p>
    <img alt="" src="/assets/lesson34/pic11.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak5</p>
    <img alt="" src="/assets/lesson34/pic12.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak6</p>
    <img alt="" src="/assets/lesson34/pic13.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak7</p>
    <img alt="" src="/assets/lesson34/pic14.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak8</p>
    <img alt="" src="/assets/lesson34/pic15.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak9</p>
    <img alt="" src="/assets/lesson34/pic16.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak10</p>
    <img alt="" src="/assets/lesson34/pic17.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak11</p>
    <img alt="" src="/assets/lesson34/pic18.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak12</p>
    <img alt="" src="/assets/lesson34/pic19.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak13</p>
    <img alt="" src="/assets/lesson34/pic20.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak14</p>
    <img alt="" src="/assets/lesson34/pic21.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak15</p>
    <img alt="" src="/assets/lesson34/pic22.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak16</p>
    <img alt="" src="/assets/lesson34/pic23.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak17</p>
    <img alt="" src="/assets/lesson34/pic24.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak18</p>
    <img alt="" src="/assets/lesson34/pic25.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak19</p>
    <img alt="" src="/assets/lesson34/pic26.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak20</p>
    <img alt="" src="/assets/lesson34/pic27.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak21</p>
    <img alt="" src="/assets/lesson34/pic28.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak22</p>
    <img alt="" src="/assets/lesson34/pic29.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>korak23</p>
    <img alt="" src="/assets/lesson34/pic30.svg" className={classes.indent3x} />
    <p className={classes.indent1x}>
      Na osnovu ovog primera možemo napisati algoritam za pronalazak Ojlerovog cilkusa.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      De Brujinov graf nije balansiran. Da bismo u njemu mogli pronaći Ojlerov ciklus, a zatim i
      Ojlerovu putanju, moramo dodati jednu granu koja će povezati njegov prvi i poslednji čvor, tj.
      koja će povezati dva čvora tog grafa od kojih jedan nema nijednu ulaznu granu (početni čvor),
      dok drugi nema nijednu izlaznu granu (krajnji čvor). Kako to radimo pokazaćemo na sledećem
      primeru:
    </p>
    <p className={classes.indent1x}>PRIMER</p>
    <img alt="" src="/assets/lesson34/pic31.svg" className={classes.indent2x} />
    <p className={classes.indent2x}>
      Dobijeni De Brujinov graf postaje balansiran dodavanjem sledeće grane (jer za sve čvorove važi
      da imaju jednak broj ulaznih i izlaznih grana, sem za početni i krajnji čvor):
    </p>
    <img alt="" src="/assets/lesson34/pic32.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Sada će svaki čvor imati jednak broj ulaznih i izlaznih grana, tj. dati graf će biti
      balansiran, pa će u njemu postojati Ojlerov ciklus:
    </p>
    <img alt="" src="/assets/lesson34/pic33.svg" className={classes.indent3x} />
    <p className={classes.indent2x}>
      Ojlerovu putanju dobijamo tako što obrišemo granu koju smo prethodno dodali:
    </p>
    <img alt="" src="/assets/lesson34/pic34.svg" className={classes.indent3x} />
    <h2 className={classes.indent1x}>
      Implementacija algoritma koji pronalazi Ojlerovu putanju u De Brujinovom grafu
    </h2>
    <p className={classes.indent2x}>
      Za početak, potrebno je pripremiti odgovarajuću klasu Graf koja će čuvati graf, definisan
      listom susedstva, i pomoćne funkcije koje će biti korišćene za pronalaženje puteva. Zatim se
      strukturi Graf dodaje funkcija koja pronalazi Ojlerov ciklus. Da bi u grafu postojao Ojlerov
      ciklus, polazeći od bilo kog čvora, čvorovi čiji ulazni i izlazni stepeni su različiti se
      povezuju dodatnom granom kako bi razlika u stepenima bila uklonjena.
    </p>
    <CodeEditor
      code={`
    class Graf:
        # Konstruktor grafa, koji za argument dobija listu susedstva
        def __init__(self, listaSuseda):
            self.listaSuseda  = listaSuseda 
            
        # Metod vraca listu susednih čvorova zadatog čvora v, uključujući potencijalne duplikate
        def vrati_susede(self, v):
            return self.listaSuseda[v]
        
        # Metod računa izlazni stepen čvora v (broj grana koje izlaze iz čvora v)
        def izlazi_stepen(self, v):
            return len(self.listaSuseda[v])
        
        # Metod računa ulazni stepen čvora v (broj grana koje ulaze u čvor v)
        def ulazni_stepen(self, v):
            stepen = 0
            for w, susedi in self.listaSuseda.items():
                for u in susedi:
                    if u == v:
                        stepen += 1
                        
            return stepen
        
        # Metod vraća sve izlazne grane iz čvora v ka susedima w u obliku uređenog para (v, w)
        def izlazne_grane(self, v):
            return [(v, w) for w in self.vrati_susede(v)]
        
        # Metod vraća sve grane koje postoje u grafu u obliku uređenih parova (u, v)
        def sve_grane(self):
            grane = []
            
            for w in self.listaSuseda :
                grane += self.izlazne_grane(w)
                
            return grane
        
        # Metod vraća listu čvorova čiji se ulazni stepen razlikuje od izlaznog stepena
        def vrati_nebalansirane_cvorove(self):
            nebalansirani_cvorovi = []
            for w in self.listaSuseda :
                in_deg = self.ulazni_stepen(w)
                out_deg = self.izlazi_stepen(w)
                
                if in_deg != out_deg:
                    nebalansirani_cvorovi.append(w)
                    
            return nebalansirani_cvorovi
        
        # Metod pronalazi dva nebalansirana čvora i povezuje ih granom tako da više ni jedan
        # čvor u grafu nema ulazni stepen različit od izlaznog
        def napravi_balansiran_graf(self):
            nebalansirani_cvorovi = self.vrati_nebalansirane_cvorove()
            
            if len(nebalansirani_cvorovi) != 2:
                return None
            
            [u, v] = nebalansirani_cvorovi
            
            if self.ulazni_stepen(u) > self.izlazi_stepen(u):
                self.listaSuseda[u].append(v)
            else:
                self.listaSuseda[v].append(u)
                
        # Metod vraća sve neobiđene grane iz čvora v, 
        # u odnosu na skup svih neobiđenih grana u grafu
        def vrati_neposecene_grane(self, v, neposecene_grane):       
            return [edge for edge in neposecene_grane if edge[0] == v];
        
        # Metod proverava da li iz zadatog čvora v ima neobiđenih grana
        def postoje_neposecene_grane(self, v, neposecene_grane):
            return len(self.vrati_neposecene_grane(v, neposecene_grane)) > 0
                
        # Metod pronalazi Ojlerov ciklus u grafu
        def ojlerov_ciklus(self):
            # Odabira se proizvoljni polazni čvor
            trenutni_cvor = list(self.listaSuseda.keys())[0]
            
            neposecene_grane = self.sve_grane()
            
            # Polazni čvor se dodaje u ciklus
            ciklus = [trenutni_cvor]
            
            # Dok postoje neobiđene grane u grafu...
            while len(neposecene_grane) > 0:
                
                # Od polaznog čvora se obilaze susedi dok iz čvora postoje neobiđene grane...
                while self.postoje_neposecene_grane(trenutni_cvor, neposecene_grane):
                    
                    # Odabira se proizvoljna neobiđena grana iz čvora,
                    neposecena_grana_iz_trenutnog_cvora = self.vrati_neposecene_grane(trenutni_cvor, neposecene_grane)
                    odabrani_cvor = neposecena_grana_iz_trenutnog_cvora[0]
                    (u, v) = odabrani_cvor
                    
                    # odabrana grana se uklanja iz liste neobiđenih grana,
                    neposecene_grane.remove(odabrani_cvor)
                    
                    # tekući ciklus se proširuje i pretraga se nastavlja
                    # od susednog čvora
                    trenutni_cvor = v
                    ciklus.append(v)
                    
                # Pronađeni ciklus se rotira tako da čvor koji se nalazi u ciklusu
                # a iz koga postoje neobiđene grane postane čvor od koga ciklus počinje
                for i in range(len(ciklus)):
                    v = ciklus[i]
                    if self.postoje_neposecene_grane(v, neposecene_grane):
                        ciklus = ciklus[i:-1] + ciklus[:i + 1]
                        
                    trenutni_cvor = v
                    
            return ciklus
    `}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
    # Primer pronalaženja Ojlerovog ciklusa u proizvoljnom grafu
    g = Graf ({
        'A': ['B'],
        'B': ['C', 'E'],
        'C': ['D'],
        'D': ['A', 'B'],
        'E': ['G', 'F'],
        'F': ['D','E'],
        'G': ['F']
    })

    g.napravi_balansiran_graf()
    g.ojlerov_ciklus()
    `}
      result={`
    ['E', 'G', 'F', 'D', 'A', 'B', 'C', 'D', 'B', 'E', 'F', 'E']
    `}
      customClass={classes.indent2x}
    />
    <p className={classes.indent2x}>
      Konačno, od sekvence (ili sekvenci) je potrebno konstruisati De Bruijnov graf koji će
      naslediti sve osobine grafa ali će listu susedstva konstruisati pomoću k-grama.
    </p>
    <CodeEditor
      code={`
    class DeBruijn(Graf):
        def __init__(self, k, ocitavanja):
            kgrami = []
            listaSuseda = {}
            for ocitavanje in ocitavanja:
                n = len(ocitavanje)
    
                for i in range(0, n - k + 1):
                    kgram = ocitavanje[i: i + k]
                    
                    # u => v
                    # kgram = ATG
                    # u = AT, v = TG
                    u = kgram[:-1]
                    v = kgram[1:]
                    
                    if u not in listaSuseda:
                        listaSuseda[u] = [v]
                    else:
                        listaSuseda[u].append(v)
                        
                    if v not in listaSuseda:
                        listaSuseda[v] = []
                        
            self.listaSuseda = listaSuseda
    `}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
    # Primer konstrukcije De Bruijnovog grafa i pronalaženja Ojlerovog ciklusa
    ocitavanja = ['TAATGCCATGGGATGTT']
    k = 3
    
    dg = DeBruijn(k, ocitavanja)
    dg.listaSuseda  
    `}
      result={`
    {'AA': ['AT'],
     'AT': ['TG', 'TG', 'TG'],
     'CA': ['AT'],
     'CC': ['CA'],
     'GA': ['AT'],
     'GC': ['CC'],
     'GG': ['GG', 'GA'],
     'GT': ['TT'],
     'TA': ['AA'],
     'TG': ['GC', 'GG', 'GT'],
     'TT': []}
    `}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
    dg.napravi_balansiran_graf()
    ciklus = dg.ojlerov_ciklus()
    ciklus  
    `}
      result={`
    ['TA',
     'AA',
     'AT',
     'TG',
     'GC',
     'CC',
     'CA',
     'AT',
     'TG',
     'GG',
     'GG',
     'GA',
     'AT',
     'TG',
     'GT',
     'TT',
     'TA']
    `}
      customClass={classes.indent2x}
    />
    <CodeEditor
      code={`
    # Rekonstrukcija sekvence od pronađenog Ojlerovog ciklusa

    # Prvi čvor u ciklusu
    sekv = ciklus[0]
    
    # Od svakog slecećeg čvora uzima se samo poslednji karakter.
    # Prolazi se kroz sve čvorove u ciklusu osim poslednjeg, koji zatvara ciklus
    for i in range(1,len(ciklus) - 1):
        sekv += ciklus[i][-1]
    
    sekv  
    `}
      result={`
    'TAATGCCATGGGATGTT'
    `}
      customClass={classes.indent2x}
    />
  </div>
);

export default Lesson34;
