const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "my-roles",
  run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    const embed = new MessageEmbed()
    .setTitle('Seus papéis')
    .setDescription(user.roles.cache.map(role => role.toString()).join(" ,"))
    .setColor("RANDOM")

    message.channel.send(embed)
  }
}
module.exports.help = {
	aliases: ["papeis"],
	name: "cargos"
}