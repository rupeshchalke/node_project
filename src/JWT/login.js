function main(req,res){

    var jwt = require('jsonwebtoken');
    const required = req.body.name;
    // console.log();
    res.send('hii');



    

}

module.exports={
    main:main
}