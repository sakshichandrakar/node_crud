const mysql = require('mysql2');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"constructions",
    port:3306,
    multipleStatements:true
});

module.exports = pool.promise();