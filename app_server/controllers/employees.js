/* GET 'home' page */
module.exports.homelist = function(req, res){
    res.render('index', { title: 'Home' });
};
/* GET 'Employee info' page */
module.exports.employeeInfo = function(req, res){
    res.render('index', { title: 'Employee info' });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('index', { title: 'Add review' });
};

