var apiai = require('apiai');

var app = apiai('<https://bots.dialogflow.com/skype/deb4be08-f0e4-4f62-affd-9f4591bf58c6/webhook>');

module.exports = {
  recognize: function(context, callback){
      var request = app.textRequest(context.message.text,{
          sessionId: Math.random()
      });

      request.on('response', function(response){
          var result = response.result;

          callback(null, {
              intent: result.metadatra.IntentName,
              score: result.score
          });
      });

      request.on('error', function(error){
        callback(error);
      });

      request.end();
  }
};

var intents = new builder.IntentDialog({
    recognizers: [
        apiaiRecognizer
    ],
    intentThreshold: 0.2,
    recognizeOrder: builder.recognizeOrder.series
});
