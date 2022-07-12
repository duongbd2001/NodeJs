
const searchRouter = require('../routes/searchRoute');

function homepage(app){

    app.use('/search', searchRouter);

}

module.exports = homepage;
