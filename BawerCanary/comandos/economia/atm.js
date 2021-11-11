const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.author;

let moedas = await db.fetch(`moedas_${user.id}`)
if(moedas === null) moedas = 0;
let rubis = await db.fetch(`rubis_${user.id}`)
if(rubis === null) rubis = 0;
let luz = await db.fetch(`luzes_${user.id}`)
if(luz === null) luz = 0;

message.lineReply(`:dollar: | Braws de ${user.username} **${moedas}** \n🤩 | Rubis: **${rubis}** \n✨ | Brilhos: **${luz}**`)

var canal = client.channels.cache.get("903820798882643978")

const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#b8fffa")
    .setTitle("Atm!")
    .setThumbnail(message.author.displayAvatarURL({dynamic : true}))
    .addField("Author ID", user.id, false)
    .addField("Braws atual do user:", moedas, false)
    .addField("Rubis:", rubis, true)
    .addField("Brilhos:", luz, true)
    .setTimestamp());
  
}
module.exports.help = {
aliases: ["money", "braws", "atm", "bal"],
name: "bal"
}
