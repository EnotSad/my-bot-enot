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
        [{ text: 'Ровно столько, сколько ты можешь прятаться от комбата.', callback_data: '0_1' }],
        [{ text: 'Не больше, чем сказал ему врач.   ', callback_data: '0_2' }],
        [{ text: 'Сколько влезает в бочку.', callback_data: '0_3' }],
        [{ text: 'Бесконечно -_-.', callback_data: '0_4' }]
      ],
    right_answer: 4
  },
  {
    title:'Сколько раз за день Буря может показать что он пиздатый',
    buttons: [
        [{ text: '5', callback_data: '1_1' }],
        [{ text: 'OVER9999', callback_data: '1_2' }],
        [{ text: '16', callback_data: '1_3' }],
        [{ text: '0', callback_data: '1_4' }]
      ],
    right_answer: 2
  },
  {
    title:'Cколько лет Сяве',
    buttons: [
        [{ text: '15', callback_data: '2_1' }],
        [{ text: '<50', callback_data: '2_2' }],
        [{ text: '>50', callback_data: '2_3' }],
        [{ text: '19', callback_data: '2_4' }]
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

  bot.answerCallbackQuery(msg.id, 'Вы выбрали: '+ msg.data, true);
  newQuestion(msg);
});


