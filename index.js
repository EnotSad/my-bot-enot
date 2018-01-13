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
    title:'Сколько параметров можно передать функции ?',
    buttons: [
        [{ text: 'Ровно столько, сколько указано в определении функции.', callback_data: '0_1' }],
        [{ text: 'Сколько указано в определении функции или меньше.', callback_data: '0_2' }],
        [{ text: 'Сколько указано в определении функции или больше.', callback_data: '0_3' }],
        [{ text: 'Любое количество.', callback_data: '0_4' }]
      ],
    right_answer: 4
  },
  {
    title:'Чему равна переменная name?\nvar name = "пупкин".replace("п", "д")',
    buttons: [
        [{ text: 'дудкин', callback_data: '1_1' }],
        [{ text: 'дупкин', callback_data: '1_2' }],
        [{ text: 'пупкин', callback_data: '1_3' }],
        [{ text: 'ляпкин-тяпкин', callback_data: '1_4' }]
      ],
    right_answer: 2
  },
  {
    title:'Чему равно 0 || "" || 2 || true ?',
    buttons: [
        [{ text: '0', callback_data: '2_1' }],
        [{ text: '""', callback_data: '2_2' }],
        [{ text: '2', callback_data: '2_3' }],
        [{ text: 'true', callback_data: '2_4' }]
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


