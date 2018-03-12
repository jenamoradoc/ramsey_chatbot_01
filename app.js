var restify = require('restify');
var builder = require('botbuilder');

var connector = new builder.ChatConnector({

});

//Aqui recive el mensaje del usuario y responde
var bot = new builder.UniversalBot(connector, function(session){
  session.send("You said: %s", session.message.text);
});

//Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});

server.post('/api/messages', connector.listen());
