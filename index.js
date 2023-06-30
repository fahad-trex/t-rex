const { Bot } = require("@telegram/bot-api");
const netlify = require("netlify");

const bot = new Bot(process.env.BOT_TOKEN);

bot.on("message", async (msg) => {
  if (msg.text === "/start") {
    await bot.sendMessage(msg.chat.id, "Welcome to the T-Rex game!");
  } else if (msg.text === "/play") {
    await bot.sendMessage(msg.chat.id, "Start playing!");
  }
});

netlify.start();
