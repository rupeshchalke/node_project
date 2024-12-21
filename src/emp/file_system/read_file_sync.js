function main(req, res){
    const fs = require('fs');
  
  let params = req.headers
  console.log(params);

  const data = fs.readFileSync("message.txt",{ encoding:'utf-8',flag:'r' });
  console.log("data",data);

  res.send("data");


  }


  
  
  
  module.exports={
    main:main
  }
  