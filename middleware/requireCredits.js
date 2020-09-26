const requireCredits = (req, res) => {
  if (req.user.credits < 1) {
    return res.status(403).json({ error: 'You do not have enough credits' });
  }
  next();
};

module.exports = requireCredits;
