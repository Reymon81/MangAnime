//socket del servidor

const Abuses = require("../../models/Abuse");
const Messages = require("../../models/Messages");
const MessagesNaruto = require("../../models/MessagesNaruto");
const MessagesDoctor = require("../../models/MessagesDoctor");
const MessagesKimetsu = require("../../models/MessagesKimetsu");
const MessagesPiece = require("../../models/MessagesPiece");
const MessagesSao = require("../../models/MessagesSao");
const MessagesTokyo = require("../../models/MessagesTokyo");
const MessagesYakusoku = require("../../models/MessagesYakusoku");
const sessionHelper = require("../../helpers/session") ;


//rooms contiene un array por chat donde se guardaran los usuarios conectados
const rooms = {
  general: [],
  doctor: [],
  kimetsu: [],
  naruto: [],
  piece: [],
  sao: [],
  tokyo: [],
  yakusoku: [],
};

//funcion para añadir un usuario a una sala determinada
function addUserToRoom(userName, roomName){
  console.log(userName, "ha entrado en el chat", roomName);
  rooms[roomName].push(userName);
}

//funcion para eliminar un usuario de una sala determinada
function removeUserToRoom(userName, roomName) {
  //devuelve un booleano, si es true lo deja como estaba, si es false borra el usuario del array
  rooms[roomName] = rooms[roomName].filter((item) => item !== userName);
}


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

    let user;

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

    //////////// CONEXIONES Y DESCONEXIONES //////////////

    socket.on("client connect", function (data) {
      console.log("client connect");
      user = data;
      addUserToRoom(data.nick, data.channel);
      io.sockets.emit("refresh channel", rooms);
      io.sockets.emit("new client connect", data);
    });

    socket.on("disconnect", function () {
      console.log("Se ha desconectado", user.nick, "del chat", user.channel);
      removeUserToRoom(user.nick, user.channel);
      io.sockets.emit("refresh channel", rooms);
      io.sockets.emit("client disconnect", user);
    });

    socket.on("send bye bye", function (data) {
      sessionHelper.desactivateSession(data.nick);    
      console.log(data.nick, "ha realizado un logout");
      io.sockets.emit("bye bye", data);
    });
  });
};
