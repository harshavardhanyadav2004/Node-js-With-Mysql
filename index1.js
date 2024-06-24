var mysql = require("mysql2")
var connection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password :'Harsha@2004'
    }
);
connection.connect(
    function(err){
        if(err) throw err 
        console.log("Connected to the database using the node")
        connection.query("CREATE DATABASE HARSHA_MAN",
            function(err,result){
                if(err) throw err
                console.log("DataBase Created successfully")
            }
        )
    }
)
console.log("DataBase Created succesfully")