const { connect } = require("http2")
var mysql = require("mysql2")
console.log("Connecting into the mysql server")
var connection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'Harsha@2004',
        database : 'HARSHA_MAN'
    }
)
console.log("Connecting into the database")
connection.connect(
    function(err){
        if(err) throw err 
        console.log("Connection established")
        connection.query("DELETE FROM Students WHERE name = 'Harsha'",
            function(err , result){
                if(err) throw err 
                console.log("The Affected rowws After performing the delete operaions ",result.affectedRows,result.fieldCount)
            }
        )
    }
)
