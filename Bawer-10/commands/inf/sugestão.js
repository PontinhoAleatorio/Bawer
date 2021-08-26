const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
let canal = client.channels.cache.get("806232119809802290")
let bug = args.join(' ');
if(!bug) {
return message.channel.send({embed: {
description: "Diga a sugestão!",
color: "RED"
}
});
}
let embed = new Discord.MessageEmbed()
.setTitle("Nova sugestão :heart:")
.setThumbnail(client.user.displayAvatarURL())
.addField("Servidor que de onde veio", `${message.guild.name}`)
.addField("Envida por", `${message.author.tag}`)
.addField("Menção", `${message.author}`)
.addField("ID de quem mandou", `${message.author.id}`)
.addField("Sugestão", `\`${bug}\``)
.setColor([255,182,193])
canal.send(embed)

message.channel.send({embed: {
description: ":heart: Sua sugestão foi computada e enviada para minha equipe, muito obrigada!",
color: "#b8fffa"
}
});
}
module.exports.help = {
	aliases: ["segestao", "segerir"],
	name: "sugestão"
}