const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error('Missing TELEGRAM_TOKEN');
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    await bot.sendMessage(
      chatId,
      `🔥 Joker AI Power Ups is coming!

Turn every spin into a smarter, high-reward experience with AI enhancements optimizing your gameplay for maximum payouts. 💸

🤖 Features:
• Smart Reel Order  
• Smart Wild Shift  
• Smart Symbols Rotation  

🚀 Try it now:
https://jokergamingai.com/telebot

#aipowerups #aifeature #gaming #smartgaming`,
      {
        disable_web_page_preview: false,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '✨ Explore',
                url: 'https://jokergamingai.com/telebot'
              }
            ],
            [
              {
                text: '🔥 Join Telegram for Early Updates',
                url: 'https://t.me/jokermarketingofficial'
              }
            ],
            [
              {
                text: '🤖 AI Features',
                url: 'https://www.canva.com/design/DAHGQlxPMks/ULsYi9QC9XV2Zmk9XCMUNg/view'
              },
              {
                text: '🌐 Community',
                callback_data: 'community_links'
              }
            ]
          ]
        }
      }
    );
  } catch (error) {
    console.error('Error sending message:', error);
  }
});

bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  try {
    if (data === 'community_links') {
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
  } catch (error) {
    console.error('Error handling callback:', error);
  }
});

console.log('Bot is running...');
