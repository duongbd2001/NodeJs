const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const handlebars = require('express-handlebars');
const path = require('path');

//import controller
const route = require('./routes/search.js');
const home = require('./routes/home.js');

const port = 8086;
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '\\resourses\\views'));
app.use(express.static(path.join( __dirname , 'public')));

route(app);
home(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
