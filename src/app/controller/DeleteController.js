const Student = require('../model/Student');

class DeleteController{

    //[GET] /delete
    delete(req, res, next){
        Student.deleteOne({_id:req.params.id})
        .then(() => res.redirect('/home'))
        .catch(next => console.log(next));
    }
}

module.exports = new DeleteController;