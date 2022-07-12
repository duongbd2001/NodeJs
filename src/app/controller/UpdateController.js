
class UpdateController{
    //[GET] /update
    update(req, res){
        res.render('update');
    }
}

module.exports = new UpdateController;