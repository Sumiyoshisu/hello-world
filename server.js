onst Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login("NzYxMjYzNzg2NTE4NTExNjE2.X3YEJg.JdEpPo1V9rcsKe6Dj84QPTq-1AQ");
