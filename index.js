const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios').default;

client.on('ready', () => {
  console.log(`Bot ON`); //avisa quando o bot está ON
});


client.on("message", async(message) => {
    if (message.content === 'got') {
        axios
        //gameofthrones API
          .get('https://game-of-thrones-quotes.herokuapp.com/v1/random')
          .then((res) => {
            const embedExemplo = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Citação - GOT')
            .setDescription(
              `
              **Citação:** ${res.data.sentence} \n**Nome:** ${res.data.character.name} \n**Casa:** ${res.data.character.house.name}`
              ,
            )
            .setImage('https://media.discordapp.net/attachments/852977947413446666/873032021293797447/caneca-porcelana-casas-game-of-thrones-game-of-thrones.png');
            message.channel.send(embedExemplo)
            
          })
          .catch((err) => {
            console.error('ERR:', err)
          })
    }
  });
  

//token dentro das ''
client.login('');