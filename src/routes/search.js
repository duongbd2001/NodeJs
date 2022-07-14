
const searchRouter = require('../routes/searchRoute');

function homepage(app){

    app.use('/home', searchRouter);

}

module.exports = homepage;
