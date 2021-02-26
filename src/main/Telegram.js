const TelegramBot = require("node-telegram-bot-api");
const CONFIG = require("../../config/config");
const telegramBot = new TelegramBot(CONFIG.TELEGRAM.TOKEN, {});

const Telegram = {
  send(message) {
    telegramBot.sendMessage(CONFIG.TELEGRAM.CHAT, message);
  },
};

module.exports = Telegram;
