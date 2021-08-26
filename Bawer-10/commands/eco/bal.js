const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

let moedas = await db.fetch(`moedas_${message.author.id}`)
if(moedas === null) moedas = 0;


const cu = new Discord.MessageEmbed()
.setTitle(`<:braw:852967009025261569> Braws de ${message.author.username}`)
.setDescription(moedas)
.setColor("BLUE")
message.lineReply(cu)
  
}
module.exports.help = {
aliases: ["money", "braws", "atm", "bal"],
name: "bal"
}