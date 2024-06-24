var mysql = require("mysql2")
console.log("Connecting into the sql server")
var connection = mysql.createConnection(
    {
        user : 'root',
        host :  'localhost',
        password : 'Harsha@2004',
        database : 'HARSHA_MAN'
     }
)
console.log("CXonnecting into the database")
connection.connect(
    function(err){
        if(err) throw err 
        console.log("Connecting into the table")
        console.log("Inserting the single values in the table ")
        connection.query(
        "INSERT INTO Students (id,name) VALUES ('1','HarshaVardhan')",
        function(err,result){
            if(err) throw err 
            console.log("Inserted into the database succesfully using the node",result.affectedRows)
        }
            
        )
    }
)
console.log("Multiple Values are inserted succesfully ")
