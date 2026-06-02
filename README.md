# Flux Tafelconfigurator Demo

Author: Rick Daalhuizen

Het doel van dit project is om een parametrische 3D-tafelconfigurator te bouwen en te kunnen demo-en.

De gebruiker kan met deze demo blad-afmetingen, bladvorm, pootmodel en materiaal aanpassen.

### Aanpak

Alle configuratie staat centraal in één context als source-of-truth. Voor de bladvorm gebruik ik `ExtrudeGeometry`, zodat één geometry zowel rechthoekig als rond afdekt.

### In scope
- Gebruiker kan kiezen tussen 2 pootmodellen (Ankara, San Diego)
- Afmetingen van het tafelblad zijn aanpasbaar
- Selecteren tussen een rechthoekige en ronde tafel
- Materiaal aanpassen op tafelblad

### Buiten scope
- Prijsoverzicht met berekening
- Animaties
- Opslaan/laden van gekozen opties
- Data ophalen uit een backend

### UX/UI
- Sticky 3D viewer links, configuratiepaneel rechts
- 3 inputvelden voor tafelblad-afmetingen: lengte, breedte, dikte (met min/max validatie)
- 2 buttons voor tafelvorm: rond, rechthoekig
- 2 buttons voor pootmodel: Ankara, San Diego
- 2 buttons voor materiaal: eiken, walnoot

### Stack
- React met Vite als build tool
- R3F als React-wrapper voor Three.js
- @react-three/drei voor scene helpers (camera, lighting, shadows)

### Uitvoeren van applicatie
```bash
pnpm install
pnpm dev
```
