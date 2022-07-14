const { mongooseToObject } = require('../../common/common');
const Student = require('../model/Student');

class UpdateController {
    //[GET] /update/:id/edit
    update(req, res, next) {
        Student.findById(req.params.id)
            .then(student => res.render('update', {
                student: mongooseToObject(student)
            }))
            .catch(next);
    }

    //[POST] /update/:id/modify
    modify(req, res, next){
        Student.updateOne({_id: req.params.id}, req.body)
        .then(() => res.redirect('/home'))
        .catch(next);
    }
}

module.exports = new UpdateController;