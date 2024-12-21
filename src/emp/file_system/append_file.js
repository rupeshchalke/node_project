function main(req, res){
    const fs = require('fs');
  
  let data = req.query
  console.log(data);
  
  fs.appendFile("file.txt",'first line added!','utf-8', err => {
if (err){
    throw err;
}
console.log("First line written.");

fs.appendFile("entry.txt",'\n second line appended.', err => {
    if (err){
        throw err;
    }
    console.log("second line appended.");
 });
});

res.send("merge");
  
  }
  
  
  module.exports={
    main:main
  }
  