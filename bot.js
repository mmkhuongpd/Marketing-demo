const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error('Missing TELEGRAM_TOKEN');
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
`Get ready for Joker’s latest innovation — AI Power Ups Feature! 🤖✨

Turn every spin into a smarter, high-reward experience as AI enhancements optimize your gameplay for the highest possible payouts! 💸 With powerful smart boosts pushing your winning potential to the max, the thrill never stops. Stay tuned for 16 April 2026!🔥

🤖Types Of AI Power Ups Feature
1. Smart Reel Order : Reels rearrange to deliver the highest possible payout
2. Smart Wild Shift : Wild symbols move into the best paying positions
3. Smart Symbols Rotation : Outer symbols rotate into the most rewarding positions

#aipowerups #aifeature #gaming #mobilegaming #smartgaming`,
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
    }
  );
});

bot.on('message', (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text === "🎮 Play Test") {
    bot.sendMessage(
      chatId,
      "🎮 Play the test game here:\nhttps://your-joker-link.com"
    );
  } else if (text === "🚀 Campaign") {
    bot.sendMessage(
      chatId,
      "🚀 Explore the campaign page here:\nhttps://your-landing-page.com"
    );
  } else if (text === "🤖 AI Features") {
    bot.sendMessage(
      chatId,
`🤖 Types Of AI Power Ups Feature

1. Smart Reel Order : Reels rearrange to deliver the highest possible payout
2. Smart Wild Shift : Wild symbols move into the best paying positions
3. Smart Symbols Rotation : Outer symbols rotate into the most rewarding positions`
    );
  } else if (text === "🎰 AI Games") {
    bot.sendMessage(
      chatId,
      `🎰 AI Games

- Game 1
- Game 2
- Game 3`
    );
  } else if (text === "💬 Support") {
    bot.sendMessage(
      chatId,
      "💬 Contact support here:\nhttps://t.me/your_support"
    );
  }
});

console.log("Bot is running...");
