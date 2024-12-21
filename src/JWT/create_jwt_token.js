var jwt = require('jsonwebtoken');

function main(req,res){


// const login = jwt.sign({
//     exp: Math.floor(Date.now() / 1000) + (60 * 60),
//     data: 'foobar'
//   }, 'secret');

const name = "rupesh";
var token = jwt.sign(name, 'shhhhh');
 
  res.send(token);
  console.log('token');



}

module.exports={
    main:main
}