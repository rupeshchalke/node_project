function getJwtToken(data){
    

    var token = jwt.sign(data, 'shhhjbfkdbfksycbklnkghh');

}


function verifyJwtToken(token){
    
}

module.exports={
getJwtToken,
verifyJwtToken
}