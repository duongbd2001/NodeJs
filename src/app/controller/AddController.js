
class AddController{
    //[GET] /add-new
    addNew(req, res){
        res.render('addNew');
    }
}

module.exports = new AddController;