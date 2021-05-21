//conexion de socket del servidor

module.exports = function(io) {

  io.on("connection", (socket) => {

    console.log("conectado", socket);
    //chat general
    socket.on("send message", function (data) {
      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit("new message", data);
    }); 

    //chat naruto
    socket.on("send message-naruto", function (data) {     
      io.sockets.emit("new message-naruto", data);
    });

    //chat doctor stone
    socket.on("send message-doctor", function (data) {
      io.sockets.emit("new message-doctor", data);
    });

    //chat kimetsu no yaiba
    socket.on("send message-kimetsu", function (data) {
      io.sockets.emit("new message-kimetsu", data);
    });

    //one piece
    socket.on("send message-piece", function (data) {
      io.sockets.emit("new message-piece", data);
    });

    //sword art online
    socket.on("send message-sao", function (data) {
      io.sockets.emit("new message-sao", data);
    });

    //tokyo ghoul
    socket.on("send message-tokyo", function (data) {
      io.sockets.emit("new message-tokyo", data);
    });

    //yakusoku no neverland
    socket.on("send message-yakusoku", function (data) {
      io.sockets.emit("new message-yakusoku", data);
    });
    ///

    socket.on("client connect", function (data) {
      console.log("client connect")
      console.log(data);
      io.sockets.emit("new client connect", data);
    });


  });

};