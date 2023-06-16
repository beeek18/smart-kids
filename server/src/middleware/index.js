function pathMiddleware(req, res, next) {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session?.user;
  next();
}

function isAuth(req, res, next) {
  if (req.session?.user?.id) return next();
  return res.sendStatus(403);
}

function notAuth(req, res, next) {
  if (!req.session?.user?.id) return next();
  return res.sendStatus(403);
}

module.exports = { pathMiddleware, isAuth, notAuth };
