// all api 
module.exports=function(app){
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.post('/employee/',function(req, res){
    console.log(req.body);
    res.send(req.body)
  })
  
  
  // app.put('/employee/:id/name',function(req, res){
  //   console.log(req.params.id);
  //   res.send(req.params.id)
  //   // let input = req.query
  // })

}



















