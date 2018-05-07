var express = require('express');
var router = express.Router();



router.post('/login',
passport.authenticate('local', { successRedirect: '/',
                                 failureRedirect: '/login',
                               failureFlash: true })
);


router.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });
