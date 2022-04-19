
# React_final_exam

## task:

Build front-end skills sharing app. App must include:
  1. registration page.
  1. log in page.
  1. home page, there user can view his published skills. (Access only for clients)
  1. skills add page, there user can make new skill record. (Access only for clients)

# install

1. npm i
1. rename.env example to .env and enter your values

## how to start

1. npm start

## dependancies
- "react": "^18.0.0",
- "react-dom": "^18.0.0",
- "react-router-dom": "^5.3.0",
- "react-scripts": "5.0.1",
- "sass": "^1.50.0",
- "styled-components": "^5.3.5",
- "web-vitals": "^2.1.4"

## devDependencies

- "eslint": "^8.13.0",
- "eslint-config-prettier": "^8.5.0",
- "prettier": "^2.6.2"

## Not patched bugs:
- home page not display skills at first render, skills appear on home page screen only then  switching form add page to home page.

## Extra features:
- own realisation of modal screen
- own realisation of notification alert
- ability to change skill record on home screen (not makes changes at backend)
- footer
- own design

## Future features
- bug patching
- pagination
- save done skill record changes to local store and replace old records to new

---
---
# React Exam - final egzam description in lithuanian

- Due April 19, 2022 12:30 PM
- Instructions
- React atsiskaitymas

---

## Darysime tik frontend su React - backend'as yra pateiktas.

Apie React: Pradedame nuo create-react-app, įsidiegiame styled-components, arba modulini css (CSS frameworkų naudoti negalime), react-router-dom ir kitus reikalingus modulius. Būtina naudoti DotEnv. Dizainas nesvarbu, bet stenkitės išlaikyti bendrą tvarką.

---

BASE_URL = https://autumn-delicate-wilderness.glitch.me/

---

## Kokius puslapius sukurti?

### Register

Šis puslapis turės meniu juostą (logotipas, login ir register nuorodos), formą su el. paštu ir slaptažodžiu – įvedus kreipiasi į serverį (https://autumn-delicate-wilderness.glitch.me/v1/auth/register). Sėkminga ar nesėkminga registracija išmeta notificationą (įskaičiuoti visus įmanomus error handlingus). Serveris grąžina tik du: 200 arba 400.

### Login

Šis puslapis turės meniu juostą (logotipas, login ir register nuorodos), formą su el. paštu ir slaptažodžiu – įvedus kreipiasi į serverį (https://autumn-delicate-wilderness.glitch.me/v1/auth/login). Jei sėkmingai – nukreipia į Home, jei ne – išmetą notification klaidą (įskaičiuoti visus įmanomus error handlingus). Serveris grąžina tik du: 200 arba 400.

### Home (patekti galima tik prisijungus – router blocking)

Šis puslapis turės meniu juostą (logotipas, home ir add nuorodos <- skirtingai nei login/register puslapiuose) bei kortelėse (t.y. stačiakampiuose, dizainas nesvarbu) atvaizduos įrašus (atsisiųstus iš https://autumn-delicate-wilderness.glitch.me/v1/content/skills). Kol jie neužsikrovė – išmeta errorą. Jei nėra nei vieno įrašo – išmeta, kad nėra įrašų.

### Add (patekti galima tik prisijungus – router blocking)

Šis puslapis turės meniu juostą (logotipas, home ir add nuorodos) bei formą (t.y. title – input text ir description - textarea), kuriuos užpildžius – išsiųs į serverį (https://autumn-delicate-wilderness.glitch.me/v1/content/skills). Bet kokį atsaką, sėkmingą ar ne, atvaizduojame su notificationu.

## Užduoties įkėlimo instrukcijos

Instrukcijas, kaip valdyti GitHub repozitorijas rasite - https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories arba step-by-step žemiau.

- Sukurti GitHub repozitoriją.

Instrukcijas, kaip susikurti GitHub repozitoriją rasite - https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository

- Pakeitimus daryti atskiroje šakoje (pvz. dev), kad būtų galima sukurti Pull Request.

Kaip galima sukurti Pull Request galite sužinoti čia - https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

Naują šaką galima susikurti įvykdžius `git checkout -b dev` komandą terminale.

- Kuriant sistemą pakeitimus nuolatos saugoti su pakeitimus su prasmingomis "commit" žinutėmis.

- Pabaigus projektą patikrinti ar visi pakeitimai yra nusiųsti į GitHub, sukurti Pull Request per GitHub puslapį į pagrindinę šaką (`main` arba `master`) ir pateikti nuorodą šiame "assignment".

- Jeigu to padaryti nepavyks galite tiesiog įkelti archyvuotus failus.
