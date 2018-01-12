const TelegramBot = require('node-telegram-bot-api')



const TOKEN = '507418737:AAHmDGQ5U_0oV-vnsre_Q84JjTSww8xyEwk'


const bot = new TelegramBot (TOKEN, {polling: true})

bot.on ('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from HEROKU')
})





