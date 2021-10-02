//const { user } = require("../../../server/models");
const db = require("../database/connexion");
//console.log(db);
//let result = {};
exports.recup = (Username, callback) => {
  db.query('SELECT * FROM `user-ml` ml WHERE ml.username = '+'"'+Username+'" ORDER BY ml.id DESC', function(err, rows, fields) {
    if (err) return callback(err);
    if (rows.length > 0){
        callback(null, Object.values(rows[0]));
    }
    else{
        callback(null, null);
    }
    
    });
}

//console.log(db);
exports.inte = (user, callback) => {
    user = Object.values(user);
    db.query('INSERT INTO `user-ml` (`id`, `username`, `nb_messages_total`, `nb_messages_subscriber`, `nb_messages_emot`) VALUES (NULL, '+'"'+user[0]+'"'+', '+'"'+user[1]+'"'+', '+'"'+user[2]+'"'+', '+'"'+user[3]+'"'+')', function(err, rows, fields) {
        if (err) return callback(err);
        callback(null, JSON.stringify(rows[0]));
      });
  }



//console.log(db);
exports.init = (Username, callback) => {
  db.query('INSERT INTO `user-ml` (`id`, `username`, `nb_messages_total`, `nb_messages_subscriber`, `nb_messages_emot`) VALUES (NULL, '+'"'+Username+'"'+', 0, 0, 0)', function(err, rows, fields) {
    if (err) return callback(err);
    callback(null, JSON.stringify(rows[0]));
    });
}