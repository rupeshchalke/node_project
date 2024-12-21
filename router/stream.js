module.exports=function(app)
{
    app.get('/Streams/chunked/', function(req, res){
        let x=require('../src/Streams/chunked');
        x.main(req,res);
      })

      app.get('/Streams/writeStream/', function(req, res){
        let x=require('../src/Streams/writeStream');
        x.main(req,res);
      })

      app.get('/Streams/read_pipe/', function(req, res){
        let x=require('../src/Streams/read_pipe');
        x.main(req,res);
      })

















}