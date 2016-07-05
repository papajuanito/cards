class Socket {
	constructor($rootScope) {
		"ngInject";
		this.socket = io.connect('http://192.168.0.2:3012');
		this.$rootScope = $rootScope; 
	}

	on(eventName, callback) {
		this.socket.on(eventName, (data) => {
			this.$rootScope.$apply(() => {
				callback(data);
			});
		});
	}

	emit(eventName, data, callback) {
		this.socket.emit(eventName, data, function() {
			console.log('here');
		});
	}
}

export default Socket;