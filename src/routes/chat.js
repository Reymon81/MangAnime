const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../helpers/auth");

router.get("/chat", isAuthenticated, (req, res) => {
  //const params = { user: { email: req.user.email, nick: req.user.nick } };
  // const params = { user: { nick: req.user?.nick } };
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  console.log(params.nick, "connect to MangAnime");
  res.render("chat/chat", params);
});

module.exports = router;
