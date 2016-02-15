Package.describe({
	name         : 'gunjansoni:ddpconnector',
	version      : '0.0.1',
	summary      : 'Connect Meteor Servers over DDP Connection (Works on Galaxy)',
	git          : 'https://github.com/guns2410/meteor-ddpconnector',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.1');
	api.use('ecmascript');
	api.use('ddp');
	api.addFiles('ddpconnector.js');
	api.export("DDPConnector");
});

Package.onTest(function (api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('gunjansoni:ddpconnector');
	api.addFiles('ddpconnector-tests.js');
});
