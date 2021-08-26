const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let idiota = Math.round(Math.random() * 100)
 let mentionedUser = message.mentions.users.first() || message.author;
 let emoticon
    if(idiota > 60) {
      emoticon = ("😥");
    } else if(idiota>= 40) {
      emoticon = ("😐"); 
    } else {
      emoticon = ("😁"); 
    }
    let ballembed = new Discord.MessageEmbed()

 .setColor("RANDOM")
    .setDescription(`${emoticon}┃${mentionedUser} é ${idiota}% Idiota!`)

    message.channel.send(ballembed)


 }
module.exports.help = {
	aliases: ["ind"],
	name: "idiora"
}
