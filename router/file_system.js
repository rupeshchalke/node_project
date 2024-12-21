module.exports=function(app)
{
    // app.get('/api/file_system/v1/read_file_sync/', function (req, res) {
    //     res.send('Hello World')
    //   })

      app.post('/file_system/write_file_async/', function(req, res){
        let x=require('../src/emp/file_system/write_file_async');
        x.main(req,res);
      })

      app.post('/file_system/write_file_sync/', function(req, res){
        let z=require('../src/emp/file_system/write_file_sync');
        z.main(req,res);
      })

      app.get('/file_system/read_file_async/', function(req, res){
        let A=require('../src/emp/file_system/read_file_async');
        A.main(req,res);
      })

      app.get('/file_system/read_file_sync/', function(req, res){
        let A=require('../src/emp/file_system/read_file_sync');
        A.main(req,res);
      })

      app.put('/file_system/readdir_async/', function(req, res){
        let y=require('../src/emp/file_system/readdir_async');
        y.main(req,res);
      })

      app.put('/file_system/rename_file/', function(req, res){
        let y=require('../src/emp/file_system/rename_file');
        y.main(req,res);
      })

      app.put('/file_system/append_file/', function(req, res){
        let y=require('../src/emp/file_system/append_file');
        y.main(req,res);
      })

      app.delete('/file_system/delete_file/', function(req, res){
        let y=require('../src/emp/file_system/delete_file');
        y.main(req,res);
      })

      app.post('/file_system/generate_multiple_files/', function(req, res){
        let z=require('../src/emp/file_system/generate_multiple_files');
        z.main(req,res);
      })



      












    }

