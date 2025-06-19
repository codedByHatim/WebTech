module.exports = (req, res, next) => {
  const isAdmin = true; // mock admin check
  if (!isAdmin) {
    return res.status(403).send('Forbidden');
  }
  next();
};
