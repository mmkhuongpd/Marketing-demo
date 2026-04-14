const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error('Missing TELEGRAM_TOKEN');
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendPhoto(
    chatId,
    "https://res.cloudinary.com/dvdq79xh8/image/upload/f_auto,q_auto/AI_hxlkw2", 
    {
      caption: `Get ready for Joker’s latest innovation — AI Power Ups Feature! 🤖✨

Turn every spin into a smarter, high-reward experience as AI enhancements optimize your gameplay for the highest possible payouts! 💸 With powerful smart boosts pushing your winning potential to the max, the thrill never stops. Stay tuned for 16 April 2026! 🔥

🤖 Types Of AI Power Ups Feature
1. Smart Reel Order: Reels rearrange to deliver the highest possible payout
2. Smart Wild Shift: Wild symbols move into the best paying positions
3. Smart Symbols Rotation: Outer symbols rotate into the most rewarding positions

💥 Unlock the power of AI gaming today! Click here to get started: https://jokergamingai.com/telebot

#aipowerups #aifeature #gaming #mobilegaming #smartgaming`,
      reply_markup: {
        inline_keyboard: [

          [
            {
              text: "✨ Explore",
              url: "https://jokergamingai.com/telebot"
            }
          ],
          [
            {
              text: "🔥 Join Telegram Group for Early Updates",
              url: "https://t.me/jokermarketingofficial"
            }
          ],
          [
             {
              text: "🤖 AI Features",
              url: "https://www.canva.com/design/DAHGQlxPMks/ULsYi9QC9XV2Zmk9XCMUNg/view"
            },
            {
              text: "🌐 Community",
              callback_data: "community_links"
            }
          ]
        ]
      }
    }
  );
});

bot.on("callback_query", async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "community_links") {
    await bot.answerCallbackQuery(query.id);

    await bot.sendMessage(
      chatId,
`🌐 Follow Joker Marketing:

Facebook:
https://www.facebook.com/jokermarketingg/

Instagram:
https://www.instagram.com/jokermarketing.official/

LinkedIn:
https://www.linkedin.com/company/jokerjoker/

Twitter:
https://x.com/_JokerMarketing

YouTube:
https://www.youtube.com/@Joker_Marketing_`
    );
  }
});

console.log("Bot is running...");
