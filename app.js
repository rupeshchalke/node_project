const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.post('/employee/',function(req, res){
//   console.log(req.body);
//   res.send(req.body)
// })


// app.put('/employee/:id/name',function(req, res){
//   console.log(req.params.id);
//   res.send(req.params.id)
//   // let input = req.query
// })

require ("./router") (app);













app.listen(9998, function(){
    console.log("server is running on port no:9998")
})


