// students table name
async function main(req,res){
    console.log("Create")
    const {id,rollno,name,city} = req.body;
    const pg = require("pg");
    const { Client } = pg;
    const client = new Client({
    user: 'user_rupesh',
    password: 'user_rupesh',
    host: 'localhost',
    port: 5432,
    database: 'emp_db',
    })
    await client.connect();
    await client.query('INSERT INTO students(id,name,) VALUES($1,$2)', [id,name],async function(err,data){
        if(err){
            console.log("Error",err);
            res.send(`ERROR in inserting the vlaue:-  ${err}`);
        } else{
            console.log(data.rows,'Created');
            // res.send(data.rows);
            res.send("Value Inserted Sucessfully!!");
        }
        await client.end();
    });
    // console.log(result);
    
}

module.exports={
    main
}