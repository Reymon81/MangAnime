//conexion de socket del cliente

$(function(){
    
    const socket = io();
    //obteniendo los datos
    const $messageForm = $('#message-form');
    const $messageBox = $('#message'); 
    const $chat = $('#chat');
   
    
    //obteniendo eventos
    $messageForm.submit( e => { 
        //evito que se refresque la pantalla cuando se envian mensajes
        e.preventDefault();
        socket.emit("send message", $messageBox.val());
        //console.log($messageBox.val());

        //vaciamos la barra de texto para escribir un mensaje nuevo
        $messageBox.val('');
    }); 

    //el cliente recibe todos los mensajes que envia el servidor
    socket.on('new message', function(data) {
        $chat.append(data + '<br/>');
    });

})