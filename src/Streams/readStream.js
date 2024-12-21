function main(req,res){

    const fs = require('fs');
    let rs = fs.createReadStream('./paragraph.txt');

    
    // var arr=[]
    rs.on('data',function(chunk){
        // console.log(chunk.toString());
        // arr.push(chunk)
        console.log(chunk.toString().length);
    });

    rs.on('end',function(){
        // console.log(arr.length);
        
        console.log("file read successfully");
    });




}

module.exports={
    main:main
}