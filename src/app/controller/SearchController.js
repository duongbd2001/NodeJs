
const Student = require('../model/Student');
const {multipleMongooseToObject} = require('../../common/common');

class SearchController{

    //trang chu
    //[GET] /search
    searchDetail(req, res, next){

        //call back
        // Student.find({}, function(err, students){
        //     if (!err){
        //         res.json(students);
        //     }else{
        //         next(err);
        //     }
        // });

        //promises
        Student.find({})
            .then(students => {
                res.render('home',{
                    students: multipleMongooseToObject(students)
                })
            })
            .catch(next);

        // res.render('home');

    }

    //trang search
    //[GET] /search/:slug
    search(req, res){
        res.render('search');
    }

}

module.exports = new SearchController;
