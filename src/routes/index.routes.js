const { Router } = require("express");
const router = Router();
const { isAuthenticated } = require("../helpers/auth");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

//direccion para el chat general
router.get("/chat/general", (req, res) => {
  //if(isAuthenticated){
  // const params = { user: { nick: req.user?.nick } };
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/general", params);
  //}
});

//direccion para el chat 

router.get("/chat/naruto", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/naruto",params);
});

//direccion para el chat doctor stone
router.get("/chat/doctor", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/doctor", params);
});

//direccion para el chat kimetsu no yaiba
router.get("/chat/kimetsu", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/kimetsu", params);
});

//direccion para el chat one piece
router.get("/chat/piece", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/piece", params);
});

//direccion para el chat sword art online
router.get("/chat/sao", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/sao", params);
});

//direccion para el chat tokyo ghoul
router.get("/chat/tokyo", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/tokyo", params);
});

//direccion para el chat yakusoku no neverland
router.get("/chat/yakusoku", (req, res) => {
  const params = { user: JSON.stringify(req.user), nick: req.user?.nick };
  res.render("chat/yakusoku", params);
});

module.exports = router;
