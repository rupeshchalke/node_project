module.exports=function(app)
{
    app.post('/postgres/pg/', function(req, res){
        let x=require('../src/emp/pg_sqldb/pg.js');
        x.main(req,res);
      })

















}