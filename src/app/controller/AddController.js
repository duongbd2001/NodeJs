const Student = require('../model/Student');

class AddController {
    //[GET] /add-new
    addNew(req, res) {
        res.render('addNew');
    }

    //[POST] /add-new/create
    create(req, res, error) {
        const newStudent = new Student(req.body);
        newStudent.save()
            .then(() => res.redirect('/home')) 
            .catch(error => { console.log(error) });
    }
}

module.exports = new AddController;