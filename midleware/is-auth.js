module.exports = (req, res, next) => {
  if(!req.session.isLoggedIn) {
    return res.redirect('/login'); //user does not able to add product without logedIn
  }
  next();
}



  


  