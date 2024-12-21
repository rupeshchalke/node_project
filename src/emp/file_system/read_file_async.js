function main(req, res){
const fs = require('fs');

let data = req.headers
console.log(data);

fs.readFile("./paragraph.txt","utf-8",(err, data) => {
  if (err){
    throw err;
  } else {
    console.log(data);
  }
});

res.send("⭐");

}

module.exports={
    main:main
  }
