class SearchController{

    //trang chu
    //[GET] /search
    searchDetail(req, res){
        res.render('home');
    }

    //trang search
    //[GET] /search/:slug
    search(req, res){
        res.render('search');
    }

}

module.exports = new SearchController;
