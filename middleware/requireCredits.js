const requireCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).json({ error: 'You do not have enough credits' });
  }
  next();
};

module.exports = requireCredits;
