import React from 'react';
import classes from '../Lesson.module.scss';

const Lesson212 = () => (
  <div className={classes.root}>
    <h1>OFFLINE I ONLINE ALGORITMI</h1>
    <p className={classes.indent1x}>
      Upravo smo naučili da Boyer-Moore algoritam preprocesira šablon P i gradi nizove koji nam
      pomažu pri pretrazi šablona P u tekstu T. U ovom delu ćemo se fokusirati na{' '}
      <b>ideju preprocesiranja</b>.
    </p>
    <p className={classes.indent1x} />
    <p className={classes.indent1x}>
      Ako vam damo šablon P i tekst T, tada za njih možete pokrenuti naivni algoritam:
    </p>
    <img alt="" src="/assets/lesson212/pic1.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Ali ako vam damo šablon P bez teksta T, tada ništa ne možete uraditi dok ne dobijete tekst T
      jer naivni algoritam ne preprocesira šablon.
    </p>
    <img alt="" src="/assets/lesson212/pic2.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Sa druge strane, Boyer-Moore algoritam za to vreme može izvršiti preprocesiranje šablona P
      pomoću kojeg će izgraditi nizove i liste za pravila dobrog sufiksa i lošeg karaktera.
    </p>
    <img alt="" src="/assets/lesson212/pic3.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Kada dobijemo tekst T, tada koristimo te nizove i liste radi određivanja broja poravnanja koja
      preskačemo.
    </p>
    <img alt="" src="/assets/lesson212/pic4.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Stoga, ako smo u situaciji gde ćemo porediti <b> isti šablon P </b> sa{' '}
      <b> mnogo različitih tekstova </b>, tada najbolja opcija jeste Boyer-Moore algoritam baš zbog
      činjenice da će biti potrebno da izvršimo jedno preprocesiranje za taj šablon P koje ćemo
      koristiti za sve te tekstove.
    </p>
    <p className={classes.indent1x}>
      Mada, u našem slučaju, imaćemo mnogo različitih šablon koje ćemo porediti sa istim tekstom T.
      Na prvu će nam se činiti da ideja prerocesiranja svakog šablona, koji su mnogo manji od
      teksta, deluje bolje nego preprocesiranje teksta T jer on može biti dugačak i do 3 milijarde
      karaktera. Međutim, kako tih šablona možemo imati oko milion (pa čak i milijardu), a tekst je
      jedan, preprocesiranje teksta T će se ispostaviti kao bolja i brža opcija.
    </p>
    <p className={classes.indent1x}> </p>
    <p className={classes.indent1x}>
      Algoritmi koji koriste preprocesiranu verziju teksta T se zovu <b> offline algoritmi </b>, dok
      se oni algoritmi koji ne preprocesiraju tekst T zovu <b> online algoritmi</b>. Zapazimo da
      naziv algoritma ne zavisi od toga da li preprocesiramo šablon, već samo zavisi od toga da li
      preprocesiramo tekst.
    </p>
    <img alt="" src="/assets/lesson212/pic5.svg" className={classes.indent2x} />
    <p className={classes.indent1x}>
      Naivni algoritam, kao i Boyer-Moore algoritam su online algoritmi jer ne vrše preprocesiranje
      teksta.
    </p>
    <p className={classes.indent1x}>
      Za problem poravnanja očitavanja biće efikasnije da radimo preprocesiranje teksta, odnosno
      referentnog genoma, jer on je jedan (za određenu vrstu), dok očitavanja (šablona) možemo imati
      oko milion za svaku jedinku te vrste. Stoga, algoritam koji nam treba za dati problem jeste
      offline algoritam. Kako bismo to bolje dočarali posmatrajmo sledeću situaciju:
    </p>
    <p className={classes.indent2x}>
      Svake nedelje dobijamo skup sekvencioniranih očitavanja za različitog čoveka, a imamo jedan
      ljudski referenti genom (koji je dobijemđn u projektu ljudskog genoma). Želimo da odredimo
      pozicije tih očitavanja u odnosu na referenti genom.
    </p>
    <p className={classes.indent2x}>
      Ako bismo radili preprocesiranje šablona (očitavanja) onda bismo svake nedelje za određivanje
      pozicije dobijenih očitavanja, za svako to očitavanje, morali da radimo njegovo
      preprocesiranje. Sa druge strane, ako bismo radili preprocesiranje teksta (referentnog
      genoma), tada bismo jednom uradili preprocesiranje ljudskog referentog genoma i te rezultate
      koristitli svake nedelje za nova očitavanja.
    </p>
    <p className={classes.indent2x}>
      Međutim, može se desiti da se referentni genom izmeni (isprave se određene greške), ali to
      nisu drastične promene i te izmene se ne dešavaju često, možda jednom godišnje. Samim tim,
      preprocesiranje teksta se ispostavlja kao bolja i brža opcija.
    </p>
    <p className={classes.indent1x}>
      Do sada smo naučili naivni i Boyer-Moore algoritam. Kako su oni online algoritmi, a nama za
      problem poravnanja očitavanja treba offline algoritam onda ćemo u sledećem delu raditi
      algoritme koji će preprocesirati tekst.
    </p>
  </div>
);

export default Lesson212;
