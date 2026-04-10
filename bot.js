const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_TOKEN;

if (!token) {
  throw new Error('Missing TELEGRAM_TOKEN');
}

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(
    chatId,
`Get ready for Joker’s latest innovation — AI Power Ups Feature! 🤖✨

Turn every spin into a smarter, high-reward experience as AI enhancements optimize your gameplay for the highest possible payouts! 💸 With powerful smart boosts pushing your winning potential to the max, the thrill never stops. Stay tuned for 16 April 2026! 🔥

🤖 Types Of AI Power Ups Feature
1. Smart Reel Order: Reels rearrange to deliver the highest possible payout
2. Smart Wild Shift: Wild symbols move into the best paying positions
3. Smart Symbols Rotation: Outer symbols rotate into the most rewarding positions

#aipowerups #aifeature #gaming #mobilegaming #smartgaming`,
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🎮 Play Now",
              url: "https://jokerofficial.net/game/allgames?filterby=2&orderby=1"
            }
          ],
          [
            {
              text: "✨ Explore",
              url: "https://ai-power-ups.web.app/"
            },
            {
              text: "🤖 AI Features",
              url: "https://www.canva.com/design/DAHGQlxPMks/ULsYi9QC9XV2Zmk9XCMUNg/view?utm_content=DAHGQlxPMks&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7f7143dccd"
            }
          ],
          [
            {
              text: "🎰 AI Games",
              url: "https://jokerofficial.net/game/allgames?filterby=2&orderby=1"
            }
          ]
        ]
      }
    }
  );

  await bot.sendMessage(chatId, "More:", {
    reply_markup: {
      keyboard: [
        [{ text: "🌐 Community" }]
      ],
      resize_keyboard: true,
      is_persistent: true
    }
  });
});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "🌐 Community") {
    await bot.sendMessage(
      chatId,
`🌐 Follow Joker Marketing:

Facebook:
https://www.facebook.com/jokermarketingg/

Instagram:
https://www.instagram.com/jokermarketing.official/

LinkedIn:
https://www.linkedin.com/company/jokerjoker/

YouTube:
https://www.youtube.com/@Joker_Marketing_`
    );
  }
});

console.log("Bot is running...");
