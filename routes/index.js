
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
}

exports.dpmPayment = function(req, res){
  console.log('dpm payment waiting...');
  var seconds = 20;
  var interval = 2;
  var waiting = setInterval(function(){
     seconds = seconds - interval;
     console.log(seconds + " seconds left");
     if(seconds <= 0){
       clearInterval(waiting);
       res.redirect('http://localhost:8088/myaccount/paybill-receipt-cc?token=token&p=MTIzNDU2Nzg5MCw0NTYsMTAw');
     }
  }, interval * 1000);
};
