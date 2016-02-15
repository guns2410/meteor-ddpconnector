// DDP Connector
DDPConnector = function (url, options = {}) {
	this.url = url;
	this.ddpOptions = options.ddpOptions || {};
	this.timeout = options.timeout || 5 * 1000;

	this.connection = DDP.connect(this.url, this.ddpOptions);
	this.connection.disconnect();
	this.startConnecting();
};

DDPConnector.prototype.getConnection = function () {
	return this.connection;
};

DDPConnector.prototype.getUrl = function () {
	return this.url;
};

DDPConnector.prototype.startConnecting = function () {
	var self = this;
	var connected = false;
	setConnectionIfNeeded();

	this.timeoutHandler = Meteor.setInterval(setConnectionIfNeeded, self.timeout);

	function setConnectionIfNeeded () {
		var status = self.connection.status();
		var isOffline = connected && status.status == "offline";
		if (!status.connected && !isOffline) {
			self.connection.reconnect({ url: self.url });
			connected = true;
		}
	}
};

DDPConnector.prototype.stop = function () {
	Meteor.clearTimeout(this.timeoutHandler);
};
