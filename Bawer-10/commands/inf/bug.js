const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
let canal = client.channels.cache.get("806232119809802290")
let bug = args.join(' ');
if(!bug) {
return message.channel.send({embed: {
description: "Descreva o bug encontrado!",
color: "RED"
}
});
}
let embed = new Discord.MessageEmbed()
.setTitle("Novo Bug reportado")
.setThumbnail(client.user.displayAvatarURL())
.addField("Servidor que reportou", `${message.guild.name}`)
.addField("Reportado por", `${message.author.tag}`)
.addField("Menção", `${message.author}`)
.addField("ID de quem reportou", `${message.author.id}`)
.addField("Bug", `\`${bug}\``)
.setColor([255,182,193])
canal.send(embed)

message.lineReply({embed: {
description: ":heart: Seu bug foi computado e enviado para minha equipe, muito obrigada!",
color: "#b8fffa"
}
});
}
module.exports.help = {
	aliases: ["reportbug"],
	name: "bug"
}