function main(req, res){
    const fs = require('fs');
  
  let data = req.query
  console.log(data);
  
  fs.rename("message.txt","count.txt",(err)=>{
     if(err){
        res.send("Error");
     }
     
     else{ 
        res.send("done")
     }
  });
  
  }
  
  
  module.exports={
    main:main
  }
  