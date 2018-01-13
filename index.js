var TelegramBot = require('node-telegram-bot-api')
    TOKEN = '507418737:AAHmDGQ5U_0oV-vnsre_Q84JjTSww8xyEwk';


var bot = new TelegramBot (TOKEN, {polling: true});



bot.onText (/Привет/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'Привет, как тебя зовут')
})
bot.onText (/БГУИР/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'У БГУИРа одна потеха, сосать х.. у Политеха')})
bot.onText (/Политех/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'Политех? Туда ещё поступают?')})
bot.onText (/Смол/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'Он ведь не говорит р')})
bot.onText (/Юнкевич/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'Недозамок')})
bot.onText (/Какое сейчас время\?/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'BQADAgADeAcAAlOx9wOjY2jpAAHq9DUC')})
bot.onText (/Батька/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'Я обворовал магазин, что мне делать?')})
bot.onText (/Гейб/, msg => {
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'CAADAgADIAAD4KV4BXGhwOaE5M7QAg')})


})





