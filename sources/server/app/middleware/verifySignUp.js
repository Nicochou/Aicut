const db = require("../../models");
const ROLES = db.ROLES;
const User = db.user;


checkDuplicateUsernameorEmail = (req, res, next) => {
	// Username
	User.findOne({
		where: {
			username: req.body.username
		}
	}).then(user => {
		if(user){
			res.status(400).send({
				message: ("Failed! le username est déjà utilisé")
			});

			return;
		}

		// Email
		User.findOne({
			where: {
				email: req.body.email
			}
		}).then(user => {
			if (user){
				res.status(400).send({
					message: ("Failed, le mail est déjà utilisé")
				})
				return;
			}
			next();
		});
	});
};


checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};


checkSamePassword = (req, res, next) => {
	// password min 6 chars
	if(!req.body.password || req.body.passwordCheck < 6){
		return res.status(400).send({
			message: "Erreur, veuillez saisir un mot de passe avec au moins 6 caractères"
		});
	}

	// check password
	if(!req.body.passwordCheck || req.body.password != req.body.passwordCheck){
		return res.status(400).send({
			message : "Erreur, les mots de passes ne sont pas identiques"
		})
	}
	next();
};


const verifySignUp = {
  checkDuplicateUsernameorEmail: checkDuplicateUsernameorEmail,
  checkRolesExisted: checkRolesExisted,
  checkSamePassword: checkSamePassword
};

module.exports = verifySignUp;