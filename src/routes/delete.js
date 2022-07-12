const deleteRouter = require('../routes/deleteRoute');

function Delete(app){
    app.use('/delete', deleteRouter);
}

module.exports = Delete;