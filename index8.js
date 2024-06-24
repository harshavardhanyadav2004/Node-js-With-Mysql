var mysql = require("mysql2")
console.log("Connecting into the mysql server ")
var connection = mysql.createConnection(
    {
        user : 'root',
        host : 'localhost',
        password : 'Harsha@2004',
        database :'HARSHA_MAN'
    }
)
connection.connect(
    function(err){
        if(err) throw err 
        console.log("Connection Established")
        connection.query("SELECT * FROM Students WHERE id = 1",
            function(err , result){
                console.log("Query Executed")
                if(err) throw err 
                console.log("Result is ",result)
            }
        )
    }
)