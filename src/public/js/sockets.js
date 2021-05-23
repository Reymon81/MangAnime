const Abuses = require("../../models/Abuse");
 const Messages = require("../../models/Messages");

const hideBadWord = (badWord) => {
  let word = "";
  for (let i = 0; i < badWord.length; i++) {
    word += "*";
  }
  return word;
};
const filteredMessage = async (data) => {
  const abuses = await Abuses.find({});
  const messageFiltered = abuses.reduce((acum, abuse) => {
    abuse=abuse.abuse.toLowerCase();
    return acum.replaceAll(abuse, hideBadWord(abuse));
    
  }, data.message);
  data.message = messageFiltered;
  return data;
};

//conexion de socket del servidor
module.exports = function (io) {
  io.on("connection", (socket) => {
    //chat general
    socket.on("send message", async function (data) {
      
      data = await filteredMessage(data);
      io.sockets.emit("new message", data);
    });

    //chat naruto
    socket.on("send message-naruto", async function (data) {
      data = await filteredMessage(data);
      message = new Messages(data);
      await message.save();
      io.sockets.emit("new message-naruto", data);
    });

    //chat doctor stone
    socket.on("send message-doctor", async function (data) {
      data = await filteredMessage(data);
      io.sockets.emit("new message-doctor", data);
    });

    //chat kimetsu no yaiba
    socket.on("send message-kimetsu", async function (data) {
      data = await filteredMessage(data);
      io.sockets.emit("new message-kimetsu", data);
    });

    //one piece
    socket.on("send message-piece", async function (data) {
      data = await filteredMessage(data);
      io.sockets.emit("new message-piece", data);
    });

    //sword art online
    socket.on("send message-sao", async function (data) {
      data = await filteredMessage(data);
      io.sockets.emit("new message-sao", data);
    });

    //tokyo ghoul
    socket.on("send message-tokyo", async function (data) {
      data = await filteredMessage(data);
      io.sockets.emit("new message-tokyo", data);
    });

    //yakusoku no neverland
    socket.on("send message-yakusoku", async function (data) {
      data = await filteredMessage(data);
      io.sockets.emit("new message-yakusoku", data);
    });

    socket.on("client connect", function (data) {
      console.log("client connect");
      io.sockets.emit("new client connect", data);
    });
    socket.on("connect saludo", function (data) {
      console.log("Saludando a usuario conectado.");
      io.sockets.emit("send connect saludo", data);
    });
    socket.on("disconnect", function (data) {
      console.log("DISCONNECT!", data);
    });
    socket.on("send bye bye", function (data) {
      console.log("send bye bye", data);
      io.sockets.emit("bye bye", data);
    });
  });
};
