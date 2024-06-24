var connection = require("mysql2")
console.log("Connecting to the sql database using the node js")
var cursor = connection.createConnection(
    {
        host:'localhost',
        user : 'root',
        password : 'Harsha@2004',
        database:'HARSHA_MAN'
    }
)
cursor.connect(
    function(err){
        if (err) throw err 
        console.log("DataBase created succesfully in the java script")
        cursor.query(
            `CREATE TABLE Students(
                 id INTEGER,
                 name VARCHAR(255)
            
            )`,function(err,result){
                if (err) throw err 
                console.log("Created table succesfully in the database using node")
            }
        )
    }
)
console.log("Closed the database succesfully ")