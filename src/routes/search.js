
function route(app){
    
    app.get('/search', (req,res) =>{
        res.render('search');
    })
}

module.exports = route;

