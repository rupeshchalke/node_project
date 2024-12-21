module.exports=function(app)
{
    app.get('/utilities/uuid/', function(req, res){
        let x=require('../src/utilities/uuid');
        x.main(req,res);
      })





    }