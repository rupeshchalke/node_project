module.exports=function(app){
  require('./employee')(app);
  require('./file_system')(app);
  require('./mongodb')(app);
  require('./postgres')(app);
  require('./communication')(app);
  require('./email_send')(app);
  require('./joi_validator')(app);
  require('./emit_events')(app);
  require('./stream')(app);
  require('./utilities')(app);
  require('./authentication')(app);







}


