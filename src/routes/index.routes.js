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
  console.log("/chat/general", params);
  res.render("chat/general", params);
  //}
});

//direccion para el chat naruto
router.get("/chat/naruto", (req, res) => {
  res.render("chat/naruto");
});

//direccion para el chat doctor stone
router.get("/chat/doctor", (req, res) => {
  res.render("chat/doctor");
});

//direccion para el chat kimetsu no yaiba
router.get("/chat/kimetsu", (req, res) => {
  res.render("chat/kimetsu");
});

//direccion para el chat one piece
router.get("/chat/piece", (req, res) => {
  res.render("chat/piece");
});

//direccion para el chat sword art online
router.get("/chat/sao", (req, res) => {
  res.render("chat/sao");
});

//direccion para el chat tokyo ghoul
router.get("/chat/tokyo", (req, res) => {
  res.render("chat/tokyo");
});

//direccion para el chat yakusoku no neverland
router.get("/chat/yakusoku", (req, res) => {
  res.render("chat/yakusoku");
});

module.exports = router;
