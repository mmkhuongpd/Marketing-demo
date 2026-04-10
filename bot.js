const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error('Missing TELEGRAM_TOKEN');
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
`🤖 Welcome to AI Power Ups!

Tap a button below to explore:`,
  {
    reply_markup: {
      keyboard: [
        [{ text: "🎮 Play Test" }],
        [{ text: "🚀 Campaign" }, { text: "🤖 AI Features" }],
        [{ text: "🎰 AI Games" }, { text: "💬 Support" }]
      ],
      resize_keyboard: true,
      is_persistent: true
    }
  });
});
