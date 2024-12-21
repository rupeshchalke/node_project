function main(req, res){
  const fs = require('fs');

let data = req.body
console.log(data);

fs.writeFile("message.txt",JSON.stringify(data),(err)=>{
   if(err){
      res.send(Error);
   }
   
   else{ 
      res.send("done")
   }
});

}


module.exports={
  main:main
}
