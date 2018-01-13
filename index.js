var TelegramBot = require('node-telegram-bot-api')
    TOKEN = '507418737:AAHmDGQ5U_0oV-vnsre_Q84JjTSww8xyEwk';


var bot = new TelegramBot (TOKEN, {polling: true});

var chel = bot.onText


if chel in (Привет):
    bot.onText ('Привет', msg => {
        var id = msg.from.id;
        bot.sendMessage(msg.chat.id, 'Привет, как тебя зовут')
})





