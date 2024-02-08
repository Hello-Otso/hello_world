//npm init
//npm install pg

// require library pg - only one class Client
//alternative code: const {Client} = require('pg')

const Client = require ('pg').Client

//create a client object
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "test"
})

//connect to database
client.connect()
.then(() => console.log ("connected successfuly"))
//return table and print it to console:
.then(() => client.query("SELECT * FROM car"))
.then(results  => console.table(results.rows))
.catch(e => console.log(e))
//e = error
.finally(() => client.end())
//end the connection

//npm test = run

