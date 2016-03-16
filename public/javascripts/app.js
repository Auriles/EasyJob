var socket = io.connect('http://localhost:80'); // Connection Socket for Real time

socket.on('UserState', function (data) {
    $('.connected-number').text(data);
});
