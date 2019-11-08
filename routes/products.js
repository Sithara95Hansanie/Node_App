var express = require('express');
var router = express.Router();
var connection =require('../config/connection');

 router.get('/getCategories', function(req, res, next) {

   connection.query('SELECT * FROM category',function(err,rows){
     if (err) throw err;
  
     console.log(rows);
     res.send(rows );
   })
   });

   router.get('/getMenuItems', function(req, res, next) {

    connection.query('SELECT * FROM menu_item',function(err,rows){
      if (err) throw err;
   
      console.log(rows);
      res.send(rows );
    })
    });


  

module.exports = router;
