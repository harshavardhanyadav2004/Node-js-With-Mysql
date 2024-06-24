var mysql =  require("mysql2")
console.log("Connecting into the Database")
var cursor = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root',
        password : 'Harsha@2004',
        database : 'HARSHA_MAN'
    }
)
cursor.connect(
    function(err){
        if(err) throw err 
        console.log("Table connected Succesfully")
        cursor.query("DROP TABLE Students IF EXISTS",
            function(err , result){
                console.log("The result is dropped")
            }
        )
    }
)
console.log("The table Disconnected Succesfully")