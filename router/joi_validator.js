module.exports=function(app)
{
app.get('/validation/joi_validation/', function(req, res){
    let A=require('../src/validation/joi_validation');
    A.main(req,res);
  })







}

