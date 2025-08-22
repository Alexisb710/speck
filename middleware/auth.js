module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated() && req.isAuthenticated) {
      return next();
    } else {
      res.redirect("/");
    }
  },
};
