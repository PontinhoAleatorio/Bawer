const { MessageEmbed } = require('discord.js');
client.on('messageDelete', async (message) => {
    const member = message.mentions.members.first()
    if (member) {
        if (member.id == message.author.id) return;
        if (message.author.bot) return;
        message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setTitle(`Ghost Ping >:C`)
                    .addField(`Author`, message.author.tag, true)
                    .addField(`Mensagem`, message.content, true)
                    .setColor("RED")
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
            ]
        }
        )
    }
})
