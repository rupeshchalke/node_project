module.exports=function(app)
{

app.get('/JWT/login/', function(req, res){
    let A=require('../src/JWT/login');
    A.main(req,res);
  })

  app.get('/JWT/create_jwt_token/', function(req, res){
    let A=require('../src/JWT/create_jwt_token');
    A.main(req,res);
  })

  app.get('/JWT/verify_jwt_token/', function(req, res){
    let A=require('../src/JWT/verify_jwt_token');
    A.main(req,res);
  })





}