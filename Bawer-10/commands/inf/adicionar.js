const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
  .setColor([255,182,193])
  .setDescription("**Me adicione em seu servidor**")
  .addField("Link:", "[Me adicione](https://discord.com/oauth2/authorize?client_id=805135276208422972&scope=bot&permissions=805363838)")
  .addField("Discord", "Entre no meu Discord de Suporte clicando [Aqui](https://discord.gg/CtbSbn78uF)")
  .addField("Site", "O site ainda estar sendo criado [site](https://sites.google.com/view/bawerwebsite/in%C3%ADcio?authuser=0)")
  .setFooter(`Comando solicitado por: ${message.author.tag}`)
  .setTimestamp();
  
  message.lineReply(embed)

}

module.exports.help = {
	aliases: ["invit"],
	name: "adicionar"
}