const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {

    console.log('i'm ready for duty!');

});

client.on('message', message => {

   if (message.content === 'ping') {

      message.reply('pong')

   };

});

client.login(process.env.BOT_TOKEN);
