var mysql = require('mysql')
var db;
var settings={
    host     : "localhost",
    user     : "root",
    password : "",
    database : "foodapp"
  
  
};
function connectionDatabase(){
    if(!db){
        db=mysql.createConnection(settings);

        db.connect(function(err){
            if(!err){
                console.log("congratz")
            }else{
                console.log("dead")
            }
        })
    }
    return db;
}
module.exports=connectionDatabase();