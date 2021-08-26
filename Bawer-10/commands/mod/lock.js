const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) =>{

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const lockchannelError = new MessageEmbed()
            .setDescription('Sinto muito mais você precisa da permissão de `GERENCIAR_CANAIS`!')
            .setColor("RANDOM")

            return message.channel.send(lockchannelError)
        }

        let channel = message.mentions.channels.first();
        let reason = args.join(" ") || 'Não sei, não quero saber e tenho raiva de quem sabe(motivo não definido)'

        if(channel) {
            reason = args.join(" ").slice(22) || 'Não sei, não quero saber e tenho raiva de quem sabe(motivo não definido)'
        } else (
            channel = message.channel
        )

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false) {
            const lockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} 💪😤 Ja estar fehado sua mosca sem asas.`)
            .setColor("RANDOM")

            return message.channel.send(lockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false })

        const embed = new MessageEmbed()
        .setTitle(`Canal trancado!!`)
        .setDescription(`**Canal:** ${channel} \n **Razão:** ${reason}`)
        .setColor("RANDOM")

        message.channel.send(embed)

    }
module.exports.help = {
	aliases: ["trancar"],
	name: "lock"
}