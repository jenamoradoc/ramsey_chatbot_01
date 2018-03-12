intents.matches('restaurant.menu', '/restaurant.menus');

bot.dialog('/', intents);

//manejo del intent restaurant.menus
bot.dialog('/restaurant.menus',[
    function(session, args, next){
        var cards = [];

        menus.forEach(function(menu){
          var card = new builder.HeroCard(session)
          .title(menu.name)
          .subtitle(menu.subtittle)
          .text(menu.text)
          .images([
            builder.CardAction.
          ])
          .buttons([
              builder.CardAction.OpenUrl(session)
          ]);

          cards.push(card);
        })

        var reply = new builder.Message(session)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachment(cards);

        session.endDialog(reply);
    }
]);
