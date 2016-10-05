const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('message', (message) => {
    const messageContent = message.content.toLowerCase();

    if (message.author.bot) return;

    if (messageContent.includes('moto')) {
        message.channel.sendMessage('In Moto We Trust!');
    }
});

bot.login('MY-SUPER-SECRET-API-KEY');
