module.exports=function(app)
{
app.post('/api_internal_communication/call_other_api/', function(req, res){

    let x=require('../src/api_internal_communication/call_other_api');
    x.main(req,res);
  })





}