module.exports=function(app)
{
    app.post('/event_emitter/events_emit/', function(req, res){
        let x=require('../src/event_emitter/events_emit');
        x.main(req,res);
      })

















}