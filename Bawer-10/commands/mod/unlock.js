const { MessageEmbed } = require("discord.js")

 exports.run = async (client, message, args) =>{

        if(!message.member.hasPermission('MANAGE_CHANNELS')) {
            const unlockchannelError = new MessageEmbed()
            .setDescription('Sinto muito mais você precisa da permissão de `GERENCIAR_CANAIS`!')
            .setColor("RANDOM")

            return message.channel.send(unlockchannelError)
        }

        let channel = message.mentions.channels.first();
        let reason = args.join(" ") || 'Não sei, não quero saber e tenho raiva de quem sabe(motivo não definido)'

        if(channel) {
            reason = args.join(" ").slice(22) || 'Não sei, não quero saber e tenho raiva de quem sabe(motivo não definido)'
        } else (
            channel = message.channel
        )

        if(channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true) {
            const unlockchannelError2 = new MessageEmbed()
            .setDescription(`${channel} 💪😤 Ja estar aberto sua mosca sem asas.`)
            .setColor("RANDOM")

            return message.channel.send(unlockchannelError2)
        }

        channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: true })

        const embed = new MessageEmbed()
        .setTitle(`Canal destrancado!!`)
        .setDescription(`**Canal:** ${channel} \n **Razão:** ${reason}`)
        .setColor("RANDOM")

        message.channel.send(embed)

    }
module.exports.help = {
	aliases: ["destrancar"],
	name: "unlock"
}