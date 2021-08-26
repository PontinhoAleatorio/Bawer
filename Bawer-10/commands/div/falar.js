const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');

exports.run = async (client, message, args)=> {
        if (!args[0]) return message.lineReply('Mencione alguém!')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.lineReply(`Não foi possível encontrar este usuário!`)
        if (args.length !== 0) {
    if (message.content.indexOf("@everyone") > -1 || message.content.indexOf("@here") > -1) {
      message.lineReply("Nunca vou marcar everyone/here meu anjo")
       } else {
  message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(1).join(' '))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
}}
    }
module.exports.help = {
	aliases: ["copiar"],
	name: "falar"
}