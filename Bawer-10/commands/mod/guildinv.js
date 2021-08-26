 const { MessageEmbed } = require('discord.js');

     module.exports.run = async(bot, message, args) => {
    
        if(message.author.id !== '794400726315040778') return;

        if(!args[0]) return message.channel.send('❌')

        let guild = message.client.guilds.cache.get(args[0]);

        if(!guild) return message.channel.send('id')

        let inv; 
        inv = await guild.channels.cache.first().createInvite()

            const embed = new MessageEmbed()
              .setColor('#2F3136')
              .setDescription(`✅ | ${guild.name}: ${inv.url}`)

            message.channel.send(embed)
    }
  module.exports.help = {
	aliases: ["sri"],
	name: "guildinv"
}