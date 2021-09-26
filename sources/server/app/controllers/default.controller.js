exports.testSuccess = (req, res) => {
    res.send().status(200);
  };
  
exports.testError = (req, res) => {
    res.send().status(400);
};

exports.testAuthorize = (req, res) => {
    res.send().status(401);
};