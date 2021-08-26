const db = require('quick.db')
const Discord = require('discord.js')
const talkedRecently = new Set();
exports.run = async (client, message, args) => {

if (talkedRecently.has(message.author.id)) {
    message.lineReply(`**Você ja recebeu seu diario hoje!**`)
  
  } else {

  var dailyradom = Math.floor(Math.random() * 5000) + 6000;

  let dinheiroDoAuthor = await db.fetch(`moedas_${message.author.id}`);
  if (dinheiroDoAuthor === null) dinheiroDoAuthor = 0;

  
  
  let dinheiroAtual = Math.floor((dinheiroDoAuthor) + (dailyradom))
  
  const dailyEmbed = new Discord.MessageEmbed()
    .setColor("#b8fffa")
    .setTitle("Diario")
    .setDescription(`<@${message.author.id}> Você resgatou seu diario e conseguiu ${dailyradom} Braws!`)
    message.lineReply(dailyEmbed)
    db.add(`moedas_${message.author.id}`, dailyradom)
}

  talkedRecently.add(message.author.id);
  setTimeout(() => {
      talkedRecently.delete(message.author.id);
  }, 86400000);

}
  module.exports.help = {
    aliases: ["dailt",'diario','bdai'],
    name: "daily"
}