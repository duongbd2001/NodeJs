
const updateRouter = require('../routes/updateRoute');

function update(app){
    app.use('/update', updateRouter);
}

module.exports = update;