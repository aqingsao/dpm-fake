
/*
 * GET home page.
 */

exports.index = function(req, res){
  setTimeout(function(){
    res.render('index', { title: 'Express' })
  }, 30000);
};
