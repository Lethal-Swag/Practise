const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;
const User = require('./Model');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/New', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//set template
app.set('view engine', 'ejs');
//use directory
app.use('/public', express.static('public'));
//set directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    User.find( {} , (err,doc)=> { 
        if(err) { return res.json(err) ;}
        else { res.render('index' , { record : doc } );}
    })
})

app.post('/', async (req, res) => {
    try {
        await new User({
            iName: req.body.InputName,
            iProfile: req.body.InputProfile,
            iReview: req.body.InputReview

        }).save();
        res.redirect("http://localhost:3000/#ReviewSection");
    }
    catch (error) {
        res.status(505);
    }
});


app.listen(port, () => {
    console.log(" :: We're at 3000 now :: ");
})

module.exports = app;