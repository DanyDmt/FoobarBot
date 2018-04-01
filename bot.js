const Discord = require('discord.js');
const client = new Discord.Client();

/* Commandes pratique */
client.on('message', message => {
  if (message.content.startsWith('Salut')) {
    message.reply("yo");
    console.log('${client}')
  }
});
client.on('message', message => {
  if (message.content.startsWith('Tu vas bien ?')) {
    message.reply("oui et toi ?");
    console.log('${client}')
  }
});
client.on('message', message => {
  if (message.content.startsWith('Que fait tu ?')) {
    message.reply("j'admire mon créateur. :smile:");
    console.log('${client}')
  }
});
client.on('message', message => {
  if (message.content.startsWith('Version')) {
    message.reply("je suis qu'une version 1.0.0, mais j'évolurait dans le temps.");
    console.log('${client}')
  }
});

client.on('ready', () => {
   console.log('Connexion reussi!'); 
});

client.login('TON_TOKEN');
