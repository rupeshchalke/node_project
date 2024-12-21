function main(req, res){
    const fs = require('fs');
  
  let data = req.query
  console.log(data);
  
  fs.unlink("entry.txt",(err)=>{
  if (err){
    throw err;
  }

  console.log("File is deleted.");

  });

  res.send("💨")

}
  
  
  module.exports={
    main:main
  }
  