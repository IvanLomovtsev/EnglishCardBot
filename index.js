const TelegramBot = require('node-telegram-bot-api');
const token = '5703342459:AAFCRNvDjaaMI51Et6Aav5AQ1Tzz8sNL60M';

const bot = new TelegramBot(token, {polling: true});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function(){
  let date = new Date();
  if((date.getMinutes())%2 === 1){
    let num = getRandomIntInclusive(1, 5);
    bot.sendPhoto('@egeintg', `cards/card${num}.png`);
  }
  if((date.getMinutes())%2 === 0){
    bot.sendPoll('@egeintg', 'Is Telegram great?', 
    ['Sure', 'Of course'], 
    {type:"quiz", correct_option_id:"0"});
  }
}, 60000);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет, Друг!!!');
    bot.sendPhoto(chatId, `cards/card1.png`);
})