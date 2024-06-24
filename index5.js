var mysql = require("mysql2")
console.log("Connecting into the database ")
var connection =  mysql.createConnection(
    {
        host :'localhost',
        user : 'root',
        password : 'Harsha@2004',
        database : 'HARSHA_MAN'
    }
)
console.log("Connecting into the database")
connection.connect(
    function(err){
        if(err) throw err
        console.log("Database connection established succesfully ")
        connection.query("UPDATE Students SET name = 'KRISHNA' WHERE id = 1",
            function (err,result){
                if(err) throw err
                console.log("The Rows Updated in the table in the database",result.fieldCount)
            }
        )
        console.log("Table Updated")
    }
)