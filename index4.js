var mysql = require("mysql2")
console.log("Connecting into the mysql server ")
var cursor = mysql.createConnection(
    {
        host : 'localhost',
        password : 'Harsha@2004',
        user :'root',
        database : 'HARSHA_MAN'

    }
)
console.log("Connecting into the database using the node module")
cursor.connect(
    function(err){
        if(err) throw err 
        console.log("Database created sucxcefully")
        var values = [
            ['1','Vardhan'],
           [ '2','Krishna']
        ]
        cursor.query("INSERT INTO Students (id,name) VALUES ?",[values],
            function(err,result){
                if(err) throw err 
                console.log("Inserted the values into the table succesfully ",result.affectedRows)
            }
        )
    }
)
console.log("Inserted multiple values into the database")
