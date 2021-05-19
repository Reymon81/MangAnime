//conexion de socket del cliente

$(function () {
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
    socket.emit("send message-naruto", $messageBoxNaruto.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxNaruto.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-naruto", function (data) {
    $chatNaruto.append(data + "<br/>");
  });

  ////////////chat doctor stone /////////////

  //obteniendo eventos
  $messageFormDoctor.submit((e) => {
    //evito que se refresque la pantalla cuando se envian mensajes
    e.preventDefault();
    socket.emit("send message-doctor", $messageBoxDoctor.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxDoctor.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-doctor", function (data) {
    $chatDoctor.append(data + "<br/>");
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
    socket.emit("send message-kimetsu", $messageBoxKimetsu.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxKimetsu.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-kimetsu", function (data) {
    $chatKimetsu.append(data + "<br/>");
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
    socket.emit("send message-piece", $messageBoxPiece.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxPiece.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-piece", function (data) {
    $chatPiece.append(data + "<br/>");
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
    socket.emit("send message-sao", $messageBoxSao.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxSao.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-sao", function (data) {
    $chatSao.append(data + "<br/>");
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
    socket.emit("send message-tokyo", $messageBoxTokyo.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxTokyo.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-tokyo", function (data) {
    $chatTokyo.append(data + "<br/>");
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
    socket.emit("send message-yakusoku", $messageBoxYakusoku.val());

    //vaciamos la barra de texto para escribir un mensaje nuevo
    $messageBoxYakusoku.val("");
  });

  //el cliente recibe todos los mensajes que envia el servidor
  socket.on("new message-yakusoku", function (data) {
    $chatYakusoku.append(data + "<br/>");
  });
});
