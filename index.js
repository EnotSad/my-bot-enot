var TelegramBot = require('node-telegram-bot-api')
    TOKEN = '507418737:AAHmDGQ5U_0oV-vnsre_Q84JjTSww8xyEwk';


var bot = new TelegramBot (TOKEN, {polling: true});

bot.on ('message', function(msg) {
    var id = msg.from.id;
    var priem = msg.text
    if priem in 'Привет':
        bot.sendMessage(msg.chat.id, 'Привет, как тебя зовут')
})





