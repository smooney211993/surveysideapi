const requireCredits = (req, res) => {
  if (req.user.credits < 1) {
    return res.status(400).json({ error: 'You do not have enough credits' });
    next();
  }
  next();
};

module.exports = requireCredits;
