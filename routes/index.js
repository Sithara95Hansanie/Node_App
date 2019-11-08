var express = require('express');
var router = express.Router();
var connection =require('../config/connection');
/* GET home page. */
//  router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
//  });

 router.get('/getUsers', function(req, res, next) {

   connection.query('SELECT * FROM user',function(err,rows){
     if (err) throw err;
  
     console.log(rows);
     res.send(rows );
   })
   });
   router.get('/getPatient', function(req, res, next) {

    connection.query('SELECT * FROM Patient',function(err,rows){
      if (err) throw err;
   
      console.log(rows);
      res.send(rows );
    })
    });
 
//  router.post('/registerUser',function(req,res){
//   const userdata ={
//     f_name:req.body.f_name,
//     l_name:req.body.l_name,
//     email:req.body.email,
//     password:req.body.password,
//     mobile:req.body.mobile,
//     address:req.body.address,
//   }
//   connection.query("INSERT INTO user SET ?", userdata,function(err,res){
//     if(err)throw err;
//     res.redirect('/');
//   })
//   console.log(userdata);
//   res.send("data inserted")
// });
  //  router.post('/registerUser', function(req, res, next) {
  //   connection.query('INSERT INTO user(f_name,l_name,email,password,mobile,address)VALUES ('+ req.body.f_Name + '',''+ req.body.l_name +'',''+ req.body.email +'',''+ req.body.password +'',''+ req.body.mobile +'',''+ req.body.address +')',function(err,res){
  //     if (err) throw err; 
  //     console.log("res");
  //     res.send("data inserted")
  //   })
  //   });

  // router.getUserList= function(req, res, next) {
  //   console.log("user list load")
  //   connection.query('SELECT * FROM user',function(err,rows){
  //     if (err) throw err;
    
  //     console.log(rows);
  //     res.render('index', { users: rows });
  //   })
  //   };
  
  router.post('/registerUser',function(req,res){
    //exports.register = function(req,res){
       console.log("req",req.body);
      //var today = new Date();
      var userdata={
        "f_name":req.body.f_name,
        "l_name":req.body.l_name,
        "email":req.body.email,
        "password":req.body.password,
        "mobile":req.body.mobile,
        "address":req.body.address,
        //"updated_at":today,
       // "created_at":today
      }
      connection.query('INSERT INTO user SET ?',userdata, function (error, results, fields) {
      if (error) {
        console.log("error ",error);
        res.send({
          "code":400,
          "failed":"error "
        })
      }else{
        console.log('The solution is: ', results);
        res.send({
          "code":200,
          "success":"user registered sucessfully"
            });
      }
      });
    }
    );
module.exports = router;
