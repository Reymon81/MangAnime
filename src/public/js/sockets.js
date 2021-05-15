//conexion de socket del servidor

module.exports = function(io) {
  
  io.on("connection", (socket) => {
    console.log("nuevo usuario conectado");
    
    socket.on('send message', function(data) {
      //console.log(data);

      //cuando el servidor recibe el mensaje de un cliente, lo reenvia a todos los clientes
      io.sockets.emit('new message', data);
    })
  });
};