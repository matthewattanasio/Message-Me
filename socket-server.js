var io = require('socket.io');

//create unique UUIDs for each user
function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

module.exports =  function (server) {
	const socketServer = io(server);
	const connections = [];

	socketServer.on('connection', socket => {
		connections.push(socket);
		var userId = generateUUID();

		socket.emit('start', {userId});

		socket.on('message', data => {
			connections.forEach(connectedSocket => {
				if (connectedSocket !== socket) {
					connectedSocket.emit('message', data);
				}
			});
		});

		socket.on('disconnect', () => {
			const index = connections.indexOf(socket);
			connections.splice(index, 1);
		});
	});
}
