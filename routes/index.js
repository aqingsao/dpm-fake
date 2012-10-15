
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
}

exports.dpmPayment = function(req, res, delay, e){
  var seconds = delay;
  console.log('Receive dpm payment, will wait ' + seconds +' seconds');
  var interval = 2;
  var waiting = setInterval(function(){
     seconds = seconds - interval;
     console.log(seconds + " seconds left");
     if(seconds <= 0){
       clearInterval(waiting);
       switch(e){
         case 303:
           res.redirect('http://localhost:8088/myaccount/paybill-receipt-cc?token=token&p=MTIzNDU2Nzg5MCw0NTYsMTAw');
           break;
         case true: 
           throw 'sth is broken';
         default:
           res.send(e,{status: e, title: "Something is broken"});
       }
     }
  }, interval * 1000);
};
