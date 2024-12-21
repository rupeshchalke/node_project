module.exports=function(app)
{
      app.post('/mongodb/create_file/', function(req, res){
        let x=require('../src/mongodb/create_file');
        x.main(req,res);
      })

      app.put('/mongodb/update_file/', function(req, res){
        let y=require('../src/mongodb/update_file');
        y.main(req,res);
      })

      app.delete('/mongodb/delete_file/', function(req, res){
        let y=require('../src/mongodb/delete_file');
        y.main(req,res);
      })

      app.get('/mongodb/read_file/', function(req, res){
        let z=require('../src/mongodb/read_file');
        z.main(req,res);
      })















}