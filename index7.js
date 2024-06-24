const { connect } = require("http2")
var mysql = require("mysql2")
console.log("Connecting into the Mysql Database")
var connection = mysql.createConnection(
    {
        host : 'localhost',
        user : 'root', 
        database : 'HARSHA_MAN',
        password : 'Harsha@2004'
    }
)
connection.connect(
    function(err){
        if(err) throw err 
        console.log("DataBase connected Successfully")
        connection.query("SELECT * FROM Students",
            function(err ,result ){
                if (err) throw err 
                console.log("Connection Established")
                console.log(result)
        })
    }
)
console.log("Database Closefd Succefully")