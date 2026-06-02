# Flux Tafelconfigurator Demo

Author: Rick Daalhuizen

Het doel van dit project is om een parametrische 3D-tafelconfigurator te bouwen en te kunnen demo-en.

De gebruiker kan met deze demo blad-afmetingen, bladvorm, pootmodel en materiaal aanpassen.

### Aanpak

Het idee is om 1 centraal config te hebben waarbij afmetingen, vorm en materiaal op 1 plek staan.
We gebruiken dit als source-of-truth. Hierdoor hoeven we niet in verschillende bestanden iets aan te passen wanneer er iets verandert.

In de praktijk zal er ook data over het product uit de backend worden opgehaald. De admin heeft verschillende opties die op een bepaalde manier getoond moeten worden.
Een centraal config sluit hierop aan. Vervolgens kan deze data worden gebruikt als we later iets aan de winkelwagen willen toevoegen (wat buiten scope is voor nu).

Voor de bladvorm gebruik ik `ExtrudeGeometry`. Zo heb ik maar 1 geometry voor zowel rechthoekig als rond, i.p.v. 2 verschillende, en is het makkelijk uit te breiden als jullie andere vormen willen.

### In scope
- Gebruiker kan kiezen tussen 2 pootmodellen
- Afmetingen van het tafelblad zijn aanpasbaar
- Selecteren tussen een rechthoekige en ronde tafel
- Materiaal aanpassen op tafelblad

### Buiten scope
- Prijsoverzicht met berekening (valt buiten het doel van de demo)
- Animaties (niet relevant voor het tonen van de aanpak)
- State management voor opslaan/laden van gekozen opties
- Laden van data uit een backend. Config is nu statisch, maar makkelijk aanpasbaar (zie Aanpak)
- Design UI/UX (voor nu praktische laten)

### UX/UI
- Sidebar met form
- 3 input velden voor tafelblad-afmetingen: lengte, breedte, dikte (met min en max)
- 2 buttons voor tafelvorm: rond, rechthoekig
- 2 buttons voor pootmodel: enkelpoot, vierpoot

### Stack
- React met Vite als build tool
- R3F als React-wrapper voor Three.js
- @react-three/drei voor scene helpers (camera, lighting, shadows)

### Uitvoeren van applicatie
```bash
pnpm install
pnpm dev
```