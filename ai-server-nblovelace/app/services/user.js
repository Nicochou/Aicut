const db = require("../database/connexion");
//console.log(db);
//let result = {};
exports.getId = (Username, callback) => {
  db.query('SELECT id FROM `users` us WHERE us.username = '+'"'+Username+'"', function(err, rows, fields) {
    if (err) return callback(err);
    console.log(rows);
    if (rows.length > 0){
        callback(null, Object.values(rows[0]));
    }
    else{
        callback(null, null);
    }
    
    });
}