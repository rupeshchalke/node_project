async function main(req,res){
    const pg=require('pg')
const { Client } = pg
 
const client = new Client({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'emp_db',
})


await client.connect()
const result = await client.query('Select * from emp_table;',[],(err,data)=>{
console.log(data.rows);

})
res.send(data)

// console.log(result)
}

main()