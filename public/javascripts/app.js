var socket = io.connect('http://localhost:3000'); // Conection Socket for Real time

socket.on('UserState', function (data) {
    $('.connected-number').text(data);
});
