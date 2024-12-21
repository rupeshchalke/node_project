function main(req, res){
const fs = require('fs');
  
  let data = req.body
  
  fs.readdir("./router",(err, data)=>{
    if (err) throw err;
    console.log(data);
  })
   res.send("done")
  }
  
  
  module.exports={
    main:main
  }
  