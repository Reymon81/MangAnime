const express = require('express');
const router = express.Router();

router.get('/chat', (req, res) => {
  //const params = { user: { email: req.user.email, nick: req.user.nick } };
  const params = { user: { nick: req.user.nick } };
  res.render("chat/chat", params);
});


module.exports = router;