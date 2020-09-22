const isAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(400).json({ error: 'Access Denied' });
  }
  next();
};

module.exports = isAuth;
