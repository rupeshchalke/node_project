function main(req,res){

    const { v4: uuidv4 } = require('uuid');

    let x=uuidv4();
    console.log(x);
    res.send(x)







}

module.exports={
    main:main
}