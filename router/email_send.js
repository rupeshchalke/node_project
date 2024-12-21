module.exports=function(app)
{


      app.post('/email_sender/send_email/', function(req, res){
        let x=require('../src/email_sender/send_email');
        x.main(req,res);
      })



}