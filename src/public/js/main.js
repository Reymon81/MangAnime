//conexion de socket del cliente

$(function () {
  //obtengo toda la informacion del objeto usuario
  const userData = window.___DATA___;
  const socket = io();
  //obteniendo los datos del chat general
  const $messageForm = $("#message-form");
  const $messageBox = $("#message");
  const $chat = $("#chat");

  //obteniendo los datos del chat Naruto
  const $messageFormNaruto = $("#message-form-naruto");
  const $messageBoxNaruto = $("#message-naruto");
  const $chatNaruto = $("#chat-naruto");

  //obteniendo los datos del chat doctor stone
  const $messageFormDoctor = $("#message-form-doctor");
  const $messageBoxDoctor = $("#message-doctor");
  const $chatDoctor = $("#chat-doctor");

  socket.on("connect", function () {
    socket.emit("client connect", {
      nick: userData.nick,
      channel: window.location.pathname, // /chat/doctor
    });
  });

  // caja donde vamos a guardar los nicks
  const $usuarios = $("#usuarios");
  const getUsers = () =>
    [...$usuarios[0].querySelectorAll("strong")].map((el) =>
      el.textContent.trim()
    );
  const addUser = (user) => {
    const usuariosActuales = getUsers();
    if (!usuariosActuales.find((u) => u === user)) {
      const message = `<strong>${user}</strong><br/>`;
      $usuarios.append(message);
    }
  };
  const removeUser = (user) => {
    let isDeleted = false;
    [...$usuarios[0].children].forEach((element) => {
      if (isDeleted) {
        element.remove();
        isDeleted = false;
      }
      if (element.textContent === user) {
        element.remove();
        isDeleted = true;
      }
    });
  };
  socket.on("new client connect", function (data) {
    if (data.channel === window.location.pathname) {
      addUser(data.nick);
      socket.emit("connect saludo", userData);
    }
  });
  socket.on("send connect saludo", function (data) {
    if (data.nick !== userData.nick) {
      addUser(data.nick);
    }
  });
  window.byeSocket = function (e) {
    console.log("Bye bye", userData);
    socket.emit("send bye bye", {
      nick: userData.nick,
      channel: window.location.pathname,
    });
    window.location.pathname = "/users/logout";
  };
  window.addEventListener("beforeunload", window.byeSocket);
  socket.on("disconnect", function () {
    socket.emit("send bye bye", {
      nick: userData.nick,
      channel: window.location.pathname,
    });
  });
  socket.on("bye bye", function (data) {
    console.log(data);
    if (window.location.pathname === data.channel) {
      removeUser(data.nick);
    }
  });

  //obteniendo eventos chat general
  $messageForm.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message", {
      message: $messageBox.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBox.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    // $chat.append(userData.nick + data + "<br/>");
    $chat.append(message);
  });

  ////////////chat naruto /////////////

  //obteniendo eventos
  $messageFormNaruto.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-naruto", {
      message: $messageBoxNaruto.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxNaruto.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-naruto", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatNaruto.append(message);
  });

  ////////////chat doctor stone /////////////

  //obteniendo eventos
  $messageFormDoctor.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-doctor", {
      message: $messageBoxDoctor.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxDoctor.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-doctor", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatDoctor.append(message);
  });

  /////////chat kimetsu no yaiba////////////

  //obteniendo los datos del chat
  const $messageFormKimetsu = $("#message-form-kimetsu");
  const $messageBoxKimetsu = $("#message-kimetsu");
  const $chatKimetsu = $("#chat-kimetsu");

  //obteniendo eventos
  $messageFormKimetsu.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-kimetsu", {
      message: $messageBoxKimetsu.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxKimetsu.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-kimetsu", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatKimetsu.append(message);
  });

  /////////chat one piece////////////

  //obteniendo los datos del chat
  const $messageFormPiece = $("#message-form-piece");
  const $messageBoxPiece = $("#message-piece");
  const $chatPiece = $("#chat-piece");

  //obteniendo eventos
  $messageFormPiece.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-piece", {
      message: $messageBoxPiece.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxPiece.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-piece", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatPiece.append(message);
  });

  /////////chat sword art online////////////

  //obteniendo los datos del chat
  const $messageFormSao = $("#message-form-sao");
  const $messageBoxSao = $("#message-sao");
  const $chatSao = $("#chat-sao");

  //obteniendo eventos
  $messageFormSao.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-sao", {
      message: $messageBoxSao.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxSao.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-sao", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatSao.append(message);
  });

  /////////chat tokyo ghoul////////////

  //obteniendo los datos del chat
  const $messageFormTokyo = $("#message-form-tokyo");
  const $messageBoxTokyo = $("#message-tokyo");
  const $chatTokyo = $("#chat-tokyo");

  //obteniendo eventos
  $messageFormTokyo.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-tokyo", {
      message: $messageBoxTokyo.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxTokyo.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-tokyo", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatTokyo.append(message);
  });

  /////////chat yakusoku no neverland////////////

  //obteniendo los datos del chat
  const $messageFormYakusoku = $("#message-form-yakusoku");
  const $messageBoxYakusoku = $("#message-yakusoku");
  const $chatYakusoku = $("#chat-yakusoku");

  //obteniendo eventos
  $messageFormYakusoku.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-yakusoku", {
      message: $messageBoxYakusoku.val(),
      nick: userData.nick,
    });

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxYakusoku.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-yakusoku", function (data) {
    const message = `<strong>${data.nick}: </strong> <span>${data.message}</span> <br/>`;
    $chatYakusoku.append(message);
  });
});
