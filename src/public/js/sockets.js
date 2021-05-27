const Abuses = require("../../models/Abuse");
const Messages = require("../../models/Messages");
const MessagesNaruto = require("../../models/MessagesNaruto");
const MessagesDoctor = require("../../models/MessagesDoctor");
const MessagesKimetsu = require("../../models/MessagesKimetsu");
const MessagesPiece = require("../../models/MessagesPiece");
const MessagesSao = require("../../models/MessagesSao");
const MessagesTokyo = require("../../models/MessagesTokyo");
const MessagesYakusoku = require("../../models/MessagesYakusoku");

 //recorro una palabra y sustituyo cada caracter por *
const hideBadWord = (badWord) => {
  let word = "";
  for (let i = 0; i < badWord.length; i++) {
    word += "*";
  }
  return word;
};

//leo el mensaje del cliente y comparo las palabras con la de la lista de insultos de bd
//si alguna palabra coincide la sustituyo por los asteriscos
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
      //filtro el mensaje para que no haya palabras malsonantes
      data = await filteredMessage(data);
      //creo un nuevo mensaje para guardarlo en una lista de mongodb
      message = new Messages(data);
      try {
        //guardo el mensaje y el nick en la lista del chat mongodb
        await message.save();
        //envio el mensaje recibido a todos los clientes
        io.sockets.emit("new message", data);
      } catch (error) {
        console.log(error);
      }
    });

    //chat naruto
    socket.on("send message-naruto", async function (data) {
     data = await filteredMessage(data);
     message = new MessagesNaruto(data);
     try {
       await message.save();
       io.sockets.emit("new message-naruto", data);
     } catch (error) {
       console.log(error);
     }
           
    });

    //chat doctor stone
    socket.on("send message-doctor", async function (data) {
      data = await filteredMessage(data);
      message = new MessagesDoctor(data);
      try {
        await message.save();
        io.sockets.emit("new message-doctor", data);
      } catch (error) {
        console.log(error);
      }
    });

    //chat kimetsu no yaiba
    socket.on("send message-kimetsu", async function (data) {
      data = await filteredMessage(data);
      message = new MessagesKimetsu(data);
      try {
        await message.save();
        io.sockets.emit("new message-kimetsu", data);
      } catch (error) {
        console.log(error);
      }
    });

    //one piece
    socket.on("send message-piece", async function (data) {
      data = await filteredMessage(data);
      message = new MessagesPiece(data);
      try {
        await message.save();
        io.sockets.emit("new message-piece", data);
      } catch (error) {
        console.log(error);
      }
    });

    //sword art online
    socket.on("send message-sao", async function (data) {
      data = await filteredMessage(data);
      message = new MessagesSao(data);
      try {
        await message.save();
        io.sockets.emit("new message-sao", data);
      } catch (error) {
        console.log(error);
      }
    });

    //tokyo ghoul
    socket.on("send message-tokyo", async function (data) {
      data = await filteredMessage(data);
      message = new MessagesTokyo(data);
      try {
        await message.save();
        io.sockets.emit("new message-tokyo", data);
      } catch (error) {
        console.log(error);
      }
    });

    //yakusoku no neverland
    socket.on("send message-yakusoku", async function (data) {
      data = await filteredMessage(data);
      message = new MessagesYakusoku(data);
      try {
        await message.save();
        io.sockets.emit("new message-yakusoku", data);
      } catch (error) {
        console.log(error);
      }
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
