const Discord = require("discord.js");
const c = require("../../img")
module.exports = {
    name: "ping",
    description: "🏓 | Ping Pong",
    type: 'CHAT_INPUT',


    run: async (client, interaction, args) => {
      
  const embed = new Discord.MessageEmbed()
  .setTitle("🏓 | Pong! Estou ativa! UwU")
  .setColor("#b8fffa") 
  .setThumbnail(c.thumb)
  .addField("Latência da API:", `${Math.round(client.ws.ping)}ms`, true)


      interaction.followUp({embeds: [embed]})
   }}
