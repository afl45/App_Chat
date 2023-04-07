const express = require('express');
const session = require('express-session');
const router = new express.Router();
const User = require('../models/app_chatSchema');
const bcrypt = require('bcryptjs');
const path = require('path');
const http = require('http').createServer(router); 
const io = require('socket.io')(http);
const mongoose = require('mongoose');

router.use(session({
    resave: true,
    saveUninitialized: true,
    secret: '420stone',
}))

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/home.html'))
})

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/signup_page.html'))
})

router.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/signin_page.html'))
})

router.post('/signup', (req, res) => {
    const newuser = new User(req.body);
    let salt = bcrypt.genSaltSync(10);
    let hashp = bcrypt.hashSync(req.body.password , salt);
    newuser.password = hashp;
    newuser.save().then((u) => {
        console.log(u);
        res.sendFile(path.join(__dirname + '/../public/redirect_signup.html'))
    }).catch((error) => {
        res.status(400).send(error);
    })
})

router.post('/signin', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({email:email})
        .then( (user) => {
           console.log(req.session)
            if(bcrypt.compareSync(password, user.password)) {
                console.log('USER:',user.last_name)
                req.session.last_name = user.last_name
                req.session.first_name = user.first_name
                req.session.save()
                res.render('/../public/view/redirect2_name.ejs')
            }
        }).catch((error) => { 
            res.status(400).send(error);
        })
    })

module.exports = router;
