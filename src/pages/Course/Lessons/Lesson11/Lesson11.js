import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson11 = () => (
  <div className={classes.root}>
    <h1>ISTORIJA I ZNAČAJ DNK SEKVENCIONIRANJA</h1>
    <p className={classes.indent1x}>
      Sekvencioniranje genoma počinje 1977. godine, kada su Volter Gilbert i Frederik Sanger razvili
      prvu metodu za DNK sekvencioniranje poznatu kao „metoda terminacije polimeraznih lanaca“. Ova
      pionirska tehnika, koju nazivamo još i Sangerovo sekvencioniranje ili prva generacija
      sekvencioniranja, bila je spora i skupa (oko 3 milijarde dolara po jednom ljudskom genomu).
    </p>
    <div className={classes.imgCenter}>
      <img alt="" src="/assets/lesson11/pic1.svg" className={classes.indent1x} />
    </div>
    <p className={classes.indent1x}>
      Ovako nešto ne sprečava biologe, koji 1990. godine poćinju Projekat ljudskog genoma, koji je
      bio vođen od strane Francisa Kolinsa, i koji predstavlja najveću saradnja za istraživački
      projekat iz biologije. Cij projekta je bio da se u narednih 15 godina sekvencionira ljudski
      genom i dostavi javnosti do 2005. godine.
    </p>
    <p className={classes.indent1x}>
      Godine 1997. Kreg Venter osniva privatnu kompaniju pod nazivom „Solara Genomics” koja je imala
      za cilj da sekvencionira ljudski genom pre nego što to urade kolege koji su vodili Projekat
      ljudskog genoma. Samim tim, trka za sekvenconiranje genoma počinje, što dovodi do toga da 5
      godina pre predviđenog datuma, 2000. godine, ljudski genom biva sekvencioniran.
    </p>
    <div className={classes.imgCenter}>
      <img alt="" src="/assets/lesson11/pic2.svg" className={classes.indent1x} />
    </div>
    <p className={classes.indent1x}>
      Nedugo nakon toga, biolozi počinju sekvencioniranje genoma drugih vrsta:
    </p>
    <div className={classes.imgCenter}>
      <img alt="" src="/assets/lesson11/pic3.svg" className={classes.indent1x} />
    </div>
    <p className={classes.indent1x}>
      Međutim, biolozi su hteli da sekvencioniraju na hiljade genoma, ali kako je tadašnja
      tehnologija bila spora i skupa, to nije bilo moguće. Kao razlog toga veliki broj kompanija
      širom sveta započinje trku za otkrićem tehnologije naredne (druge) generacije koja bi rešila
      ova dva velika problema. Uspevaju u tome 2007. godine, pri čemu značajno redukuju cenu i
      povećavaju brzinu i tačnost sekvencione tehnologije. Zahvaljujući tome, pored sekvencioniranja
      referentnog ljudskog genoma, dobijamo mogućnost sekvencioniranja ljudskog genoma pojedinca.
      Referentni genom predstavlja genom prosečnog čoveka. Kako želimo da nađemo razlike među
      ljudima, neophodno je da sekvencioniramo i genome pojedinaca, jer dva različita čoveka imaju
      približno 1 mutaciju (razliku) na 1000 nukleotida njihovog genoma, i ta jedna razlika može
      biti jako bitna jer može proizvesti oko 1000 genetskih bolesti.
    </p>

    <p className={classes.indent1x}>
      Mogućnost sekvencioniranja genoma pojedinaca imala je veliki uticaj na medicinu. Nikolas Voker
      je prva osoba kojoj je sekvencioniranje genoma spasilo život. On je prošao mnoge operacije jer
      doktori nisu uspeli da dijagnostikuju njegovo stanje. Nakon toga, 2010. godine, donose odluku
      da sekvencioniraju njegov genom i pronalaze retku mutaciju u njemu, na osnovu koje otkrivaju
      defekt u njegovom imunom sistemu. Kao rezultat, imunoterapija mu spašava život.
    </p>
    <p className={classes.indent1x}>
      Pad cene sekvencione tehnologije, koje je prikazana grafikom ispod, dovodi do toga da će
      sekvenioniranje genoma postati učestalo kao i rendgen.
    </p>
    <div className={classes.imgCenter}>
      <img alt="" src="/assets/lesson11/pic4.svg" className={classes.indent1x} />
    </div>
    <p className={classes.indent1x}>
      Kako bi ova genomska revolucija uspela, potrebno je razviti algoritamske tehnike za
      sekvencioniranje genoma. Neki od tih algoritama biće prikazani u ovom kursu.
    </p>
  </div>
);

export default Lesson11;
