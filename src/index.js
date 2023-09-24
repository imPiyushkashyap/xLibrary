
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const TOKEN = process.env.TOKEN;
const bot = new TelegramBot(TOKEN, { polling: true });

// const mess 

const button = {
  reply_markup: {
    keyboard: [["Soucre code"], ["GENRE"], ["Reach out"]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

const tele = {
  reply_markup: {
    keyboard: [
      ["Computer Networking", "History of Computer"],
      ["Biography", "Web 3"],
      ["Back to Main Menu"],
    ],
  
  },
};

bot.on("message", (message) => {
  
  const chatId = message.chat.id;
  const messageText = message.text;

  if (messageText === "Source code") {
    bot.sendMessage(chatId, "Program line ==> https://github.com/imPiyushkashyap/xLibrary");
  } else if (messageText === "GENRE") {
    bot.sendMessage(chatId, "Select a genre:", tele);
  } else if (messageText === "Computer Networking") {
    bot.sendMessage(chatId, " here you go:");
  } else if (messageText === "History of computer") {
    bot.sendMessage(chatId, "here you go:");
  } else if (messageText === "Biography") {
    bot.sendMessage(chatId, "here you go:");
  } else if (messageText === "Web 3 ") {
    bot.sendMessage(chatId, " here you go:");
  } else if (messageText === "Back to Main Menu") {
    bot.sendMessage(chatId, "Main Menu:", button);
  } else if (messageText === "Reach out") {
    bot.sendMessage(chatId, "You can reach out to us at @imPiyushKashyap");
  } else {
    bot.sendMessage(chatId, "It makes no sense to me!", button);
  }
});
 
