// ------ AFPA DWWM 2023 ---------------------------------------------------------------
//  Alan Férellec-Lozach
//  utilisation du module express-session
//  utilisation du module bcrypt pour crypter le mot de passe
//  utilisation du module express-mysql-session pour stocker une session dans mysql

require('./db/connect');
const AppChatRouter = require('./routers/routers_chat');
const express = require('express');
const session = require('express-session');
const memorystore = require('memorystore')(session);
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3030;

const myStorage = new memorystore()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// sert à récupérer les éléments du body.
app.use(express.urlencoded({ extended: true }))
app.use(AppChatRouter);
app.set('view engine','ejs');

app.use(session({
    store: myStorage,
    secret: '420stone',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 31536000 } //équivaut à 1 an : L'âge maximum du cookie en secondes (par exemple, 60*60*24*365ou 31536000 pour un an).
  }))

app.listen(port, () => {
console.log('ecoute sur le port: ',port);
});