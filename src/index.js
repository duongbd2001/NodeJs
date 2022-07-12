
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const handlebars = require('express-handlebars');
const path = require('path');

//import controller
//home page controller
const homepage = require('../src/routes/search');
//add new controller
const addNew = require('../src/routes/addNew');
//update controller
const update = require('../src/routes/update');
//delete controller
const Delete = require('../src/routes/delete');

const port = 8086;
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//Template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'mainn'}));      //set default layout
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname + '\\resourses\\views'));
app.use(express.static(path.join( __dirname , 'public')));

homepage(app);
addNew(app);
update(app);
Delete(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
