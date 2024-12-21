function main(req, res){
   
  const utils=require('../../utilities')
  const fs = require('fs');
  
  let data = req.body
  console.log(data);

  fs.writeFileSync("test.txt",JSON.stringify(data));

  res.send("done");


  }


  
  
  
  module.exports={
    main:main
  }
  