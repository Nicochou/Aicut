const db = require("./connexion");
console.log(db);
let result = {};
db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
    result = rows;
    });
  module.exports = result;