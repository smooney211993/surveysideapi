const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).send({ error: 'You must log in!' });
  }
};

module.exports = isAuth;
