# meteor-ddpconnector
## Connect Meteor Servers over DDP Connection (Works on Galaxy)

If you have tried meteorhacks:cluster which is a great package, it does not work on Galaxy.

Now, why do we need this package on Galaxy. Microservices!

# Usage

`` meteor add gunjansoni:ddpconnector``

In your lib folder, somewhere use:

```
serverConnection = new DDPConnector("http://localhost:3000").getConnection();

// Anywhere in Client or Server, use

serverConnection.call("methodName", {method, params}, function(err, res) { // callbackurl });
 // OR
serverConnection.subscribe("users", function() {
 // do something with the subscription
});
	
```
