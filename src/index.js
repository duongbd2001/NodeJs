const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const handlebars = require('express-handlebars');
// const { path } = require("express/lib/application");
const path = require('path');

const port = 8086
const app = express()

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(__dirname);

app.get('/', (req,res) =>{
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
