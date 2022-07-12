
const addNewRoute = require('../routes/addNewRoute');

function addNew(app){
    app.use('/add-new', addNewRoute);
}

module.exports = addNew;