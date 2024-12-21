var Client = require('node-rest-client').Client;

var client = new Client();

// direct way
client.get("http://localhost:9998/file_system/read_file_async/", function (data, response) {
	// parsed response body as js object
	console.log(data);
	// raw response
	console.log(response);
});

// function main(req, res){
//     const fs = require('fs');
  
//   let data = req.body
//   console.log(data);
  
//   fs.writeFile("message.txt",JSON.stringify(data),(err)=>{
//      if(err){
//         res.send(Error);
//      }
     
//      else{ 
//         res.send("done")
//      }
//   });
  
//   }
  
  
  module.exports={
    main:main
  }