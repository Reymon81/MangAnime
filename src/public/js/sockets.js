//conexion de socket del servidor

module.exports = function(io) {
  io.on("connection", (socket) => {
    console.log("nuevo usuario conectado");

    socket.on("send message", function (data) {
      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message", data);
    });
  });

  /////////////////chat naruto/////////////////
  io.on("connection", (socket) => {
    //console.log("nuevo usuario conectado");

    socket.on("send message-naruto", function (data) {
      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-naruto", data);
    });
  });

  /////////////////chat doctor stone///////////
  io.on("connection", (socket) => {
    //console.log("nuevo usuario conectado");

    socket.on("send message-doctor", function (data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-doctor", data);
    });
  });

  /////////////////chat kimetsu no yaiba///////////
  io.on("connection", (socket) => {
   // console.log("nuevo usuario conectado");

    socket.on("send message-kimetsu", function (data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-kimetsu", data);
    });
  });

  /////////////////one piece///////////
  io.on("connection", (socket) => {
   //console.log("nuevo usuario conectado");

    socket.on("send message-piece", function (data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-piece", data);
    });
  });

  /////////////////sword art online///////////
  io.on("connection", (socket) => {
    //console.log("nuevo usuario conectado");

    socket.on("send message-sao", function (data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-sao", data);
    });
  });

  /////////////////tokyo ghoul///////////
  io.on("connection", (socket) => {
    //console.log("nuevo usuario conectado");

    socket.on("send message-tokyo", function (data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-tokyo", data);
    });
  });

  /////////////////yakusoku no neverland///////////
  io.on("connection", (socket) => {
   // console.log("nuevo usuario conectado");

    socket.on("send message-yakusoku", function (data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message-yakusoku", data);
    });
  });
};