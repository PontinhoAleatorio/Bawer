const Discord = require("discord.js");
const talkedRecently = new Set();

const db = require("quick.db")
 module.exports.run = async (client, message, args) => {


if (talkedRecently.has(message.author.id)) {
    message.reply(`<:emoji_9:856726945982316544> Espere um pouquinho até usar este comando novamente!`)
  
  } else {


 let moedas = await db.fetch(`moedas_${message.author.id}`)
 if (moedas === null) moedas = 0; 

if(moedas < 99){ return message.reply('Você não possui `100 Braws` para apostar')
}

var coi= Math.floor(Math.random() * 250) - 99;

const ajuda = new Discord.MessageEmbed()
.setColor("#b8fffa")
.setTitle("Aposta")
.setDescription(`<@${message.author.id}> apostou , e conseguiu ${coi} Braws`)


 db.add(`moedas_${message.author.id}`,coi)


message.channel.send(ajuda)
 }

  talkedRecently.add(message.author.id);
  setTimeout(() => {
      talkedRecently.delete(message.author.id);
  }, 13000);
 }
 module.exports.help = {
     aliases: ["apostar", "ap"],
     name: "ap"
 }