var con = require("mysql2")
console.log("Connecting to the mysql server")
var cursor = con.createConnection(
    {
        user:'root',
        host:'localhost',
        password:"Harsha@2004"
    }
)
cursor.connect(
    function(err){
        if(err) throw err 
        console.log("Connection established succesfully to then database in the node!!");
    }
)
console.log("Closed the connection successfully to the database")