const Auth = (req, res, next) => {
  if (!req.session.userid) {
    return res.redirect("/signin");
  }
  next();
};

const noAuth = (req, res, next) => {
  if (req.session.userid) {
    return res.redirect("/");
  }
  next();
};

export { Auth, noAuth };

