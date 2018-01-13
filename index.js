var TelegramBot = require('node-telegram-bot-api')
    TOKEN = '507418737:AAHmDGQ5U_0oV-vnsre_Q84JjTSww8xyEwk';


var bot = new TelegramBot (TOKEN, {polling: true});


    
    
bot.onText (/Привет/, msg =>{
    var id = msg.from.id;
    bot.sendMessage(msg.chat.id, 'Привет, как тебя зовут')})
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
bot.onText (/Какое сейчас время?/, msg => {
    var id = msg.from.id;
    bot.sendSticker(msg.chat.id, 'BQADAgADeAcAAlOx9wOjY2jpAAHq9DUC')})
bot.onText (/Батька/, msg => {
    var id = msg.from.id;
    bot.sendSticker(msg.chat.id, 'CAADAgADDgADkWgMAAF4a15udbXbSwI')})
bot.onText (/Гейб/, msg => {
    var id = msg.from.id;
    bot.sendSticker(msg.chat.id, 'CAADAgADIAAD4KV4BXGhwOaE5M7QAg')})

var questions = [
  {
    title:'Сколько Моня может выпить колы ?',
    buttons: [
        [{ text: 'Ровно столько, сколько ты можешь прятаться от комбата.' }],
        [{ text: 'Не больше, чем сказал ему врач.'}],
        [{ text: 'Сколько влезает в бочку.'}],
        [{ text: 'Бесконечно -_-.'}]
      ],
    right_answer: 4
  },
  {
    title:'Сколько раз за день Буря может показать что он пиздатый',
    buttons: [
        [{ text: '5' }],
        [{ text: 'OVER9999'}],
        [{ text: '16' }],
        [{ text: '0' }]
      ],
    right_answer: 2
  },
  {
    title:'Сколько лет Сяве',
    buttons: [
        [{ text: '15'}],
        [{ text: '<50' }],
        [{ text: '>50' }],
        [{ text: '19' }]
      ],
    right_answer: 3
  },
];

function getRandomQuestion(){
  return questions[Math.floor(Math.random()*questions.length)];
}

function newQuestion(msg){
  var arr = getRandomQuestion();
  var text = arr.title;
  var options = {
    reply_markup: JSON.stringify({
      inline_keyboard: arr.buttons,
      parse_mode: 'Markdown'
    })
  };
  chat = msg.hasOwnProperty('chat') ? msg.chat.id : msg.from.id;
  bot.sendMessage(chat, text, options);
}

bot.onText(/\/start_test/, function (msg, match) {
  newQuestion(msg);
});

bot.on('callback_query', function (msg) {
  var answer = msg.data.split('_');
  var index = answer[0];
  var button = answer[1];

  if (questions[index].right_answer==button) {
    bot.sendMessage(msg.from.id, 'Ответ верный ✅');
  } else {
    bot.sendMessage(msg.from.id, 'Ответ неверный ❌');
  }

  
  newQuestion(msg);
});


