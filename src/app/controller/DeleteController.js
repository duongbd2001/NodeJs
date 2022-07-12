
class DeleteController{

    //[GET] /delete
    delete(req, res){
        res.render('delete');
    }
}

module.exports = new DeleteController;