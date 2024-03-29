# PG6301 eksamen <Chat app>

[Heroku](https://pg6301konte-jonashagelid.herokuapp.com/)
[Test rapport](link til testrapport)
[Github](https://github.com/kristiania-pg6301-2022/pg6301konte-jonashagelid)

## Tips

* Bruk versjoner av alle dependencies som vi brukte på forelesningene. Det skjer hele tiden endringer i JavaScript-land og noen ganger vil siste versjon oppføre seg forskjellig - ikke kast bort verdifull eksamenstid. Du kan kopiere package.json fra innlevering eller en øving
* Spesielt: React 18 kom i løpet av semesteret. Alt vi har vist er på React 17. Kjør på React 17 nå med mindre du har brukt en del tid på versjon 18 den siste måneden. Det er vesentlige problemer!
* Start med å løse det kritiske: Deployment til Heroku
* Ikke bli sittende med ting du ikke får til mens det er enklere ting du kunne ha gjort. Spesielt tester har overraskende mye vrient med seg. Legg det til siden og løs andre ting om du har problemer
* Les de funksjonelle kravene grundig og test at løsningen din oppfyller dem
* Les læringsmålene beskrevet i eksamensteksten grundig og sjekk at løsningen din demonstrere at du behersker disse

Dette er versjonene vi brukte under forelesningene om som er validert som ok:

```
"jest": "^27.5.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.2.2"
```


## Egenutfylling av funksjonelle krav

* [ ] *Anonyme brukere skal ikke kunne se chatloggen, men skal kunne logge seg inn*
  * **
* [x] *Brukere kan logge seg inn. Det anbefales at du implementerer at brukerne logger seg inn med Google, men andre
  mekanismer er også akseptabeltt*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] *En bruker som er logget inn kan se på sin profilside (userinfo fra Google)*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] *Innloggede brukere skal kunne sende chatmeldinger*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*  
* [x] *Meldinger som sendes inn skal lagres i Mongodb*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [ ] *Innloggede brukere skal kunne se chatmeldinger umiddelbart. Bruk websockets for å hente oppdateringer*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] *Chatmeldinger skal inneholde navnet på brukeren som skrev dem. Navnet skal hentes fra identity provider (Google, Active
  Directory)*
  * *Appen husker dårlig og glemmer å legge til navn etter refresh*
* [x] *Brukere skal forbli logget inn når de refresher websiden*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] *Alle feil fra serves skal presenteres til bruker på en pen måte, med mulighet for brukeren til å prøve igjen*
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
  

## Egenutfylling av tekniske krav

* [x] Oppsett av package.json, parcel, express, prettier
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] React Router
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Express app
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Kommunikasjon mellom frontend (React) og backend (Express)
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] Deployment til Heroku
  * *Heroku klarer av en eller annen grunn ikke å laste inn eller sende meldinger til mongodb, dette fungerer helt fint i local, men rakk ikke å finne ut hva som var problemet på heroku*
* [x] Bruk av MongoDB
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [x] OpenID Connect
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [ ] Web Sockets
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
* [ ] Jest med dokumentert testdekning
  * *beskriv eventuelle mangler eller problemer for delvis uttelling*
 
