# Connect Meteor Servers over DDP Connection

If you are following the Microservices architecture, then this is the must have package.

It connects different Meteor servers via DDP Connection. It also reconnects in case the connection disconnects.

# Usage

`` meteor add gunjansoni:ddpconnector``

In your lib folder, somewhere define a connection:

```
var url = "URL of the Meteor server to connect to";
serverConnection = new DDPConnector(url).getConnection();
```

We defined this in the lib folder so that the variable `serverConnection` could be used in both client & server.

Now, anywhere in client or server you can use this variable to call Methods or subscribe to publications from the remote Meteor server.

```
serverConnection.call("methodName", {method, params}, function(err, res) { // callback });
```
##  OR
```
serverConnection.subscribe("users", function() {
 // do something with the subscription
});
```

## API

- getConnection: A function that returns an instance of the connected server that helps calling methods, subscriptions, etc.
- getUrl: Get the URL of the Meteor server it is trying to connect to
- stop: A function that stops the connection
- startConnecting: A function start starts connecting to the Meteor Server


## For improving the package, please submit a pull request on the GitHub repo.
