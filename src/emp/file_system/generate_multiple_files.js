function main(req, res){
    const fs = require('fs');
  
  let data = req.body
  console.log(data);

  for (let i=0; i<1; i++){
  data["index"] = i;

  fs.writeFile(`index.txt_${i}`,JSON.stringify(data),(err)=>{
    if(err){
       console.log("Multiple files are not created");
    }
  });
}

  res.send("Files created successfully");

  }
  
  module.exports={
    main:main
  }
  