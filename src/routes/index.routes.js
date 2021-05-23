const { Router } = require("express");
const router = Router();
const { isAuthenticated } = require("../helpers/auth");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

const roomList = [
  "general",
  "doctor",
  "kimetsu",
  "naruto",
  "piece",
  "sao",
  "tokyo",
  "yakusoku"
];

router.get("/chat/:roomId", isAuthenticated, (req, res) => {
  const roomId = req.params.roomId;
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  console.log("/chat/" + roomId, params);
  if(!roomList.includes(roomId)){
    res.redirect("/");
  }
  res.render("chat/" + roomId, params);
  //}
});

module.exports = router;
