function main(req,res){

    const fs = require('fs');
    let rs = fs.createReadStream('./paragraph.txt');
    let ws = fs.createWriteStream('./duplicateparagraph2.txt');

    
    // var arr=[]
    rs.pipe(ws);




}

module.exports={
    main:main
}