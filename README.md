# HANG-MAN GAME

This project is for Framer-Motion, React-Redux & Redux Toolkit learning purpose

## General Description

> Classic Hang-man game, a React-Redux application with multiple componenets, Material UI and framer-motion.

## Table of content

[General Description](#general-description)

[Technologies](#technologies)

[Project Structure](#project-structure)

[Instruction](#instruction)

[React + Vite](#react--vite)

## Technology

-   JavaScript
-   React + Vite
-   HTML / CSS
-   Material UI
-   Redux Toolkit & React-Redux
-   Framer-motion

## Project Structure

[src/](./src)

* [app/](./src/app)
  * [store.jsx](./src/app/store.jsx)
* [components/](./src/components)
  * [EndgamePopup.jsx](./src/components/EndgamePopup.jsx)
  * [Figure.jsx](./src/components/Figure.jsx)
  * [Header.jsx](./src/components/Header.jsx)
  * [Notification.jsx](./src/components/Notification.jsx)
  * [RepeatLetterPopup.jsx](./src/components/RepeatLetterPopup.jsx)
  * [Word.jsx](./src/components/Word.jsx)
  * [WrongLetters.jsx](./src/components/WrongLetters.jsx)
* [redux/](./src/redux)
  * [gameplaySlice.js](./src/redux/gameplaySlice.js)
  * [wordSlice.js](./src/redux/wordSlice.js)
* [App.css](./src/App.css)
* [App.jsx](./src/App.jsx)
* [main.jsx](./src/main.jsx)


## Instruction

1. Open your terminal and clone the repository with the following command:

```
git clone https://github.com/TinNguyen01600/Hangman_web
```

2. Install all the packages:

```
npm install
```

3. Start the application in your local machine:

```
npm run dev
```

\*\* Or simply access the deployed version on Netlify (https://tin-nguyen-hangman.netlify.app/).

<pre>
Package used:
- framer-motion
- reactjs-popup
- react-confetti-explosion
- @mui/icons-material
</pre>

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
