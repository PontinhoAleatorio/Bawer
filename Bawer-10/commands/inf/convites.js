const { MessageEmbed } = require("discord.js");

module.exports.help = {
    name: "invites",
    description: "",
    timeout: 10000,
    aliases: ["convites", "inv"],

    async run(client, message, args) {
        const member = message.mentions.members.first() || message.member;

        const invites = await message.guild.fetchInvites()
        let i = 0;
        const userInv = invites.filter(u => u.inviter && u.inviter.id === member.user.id)

        if (userInv.size <= 0) {
          return message.inlineReply(`${member} Você não tem invites`)
        }
        const invitecodes = userInv.map(x => x.code).join('\n')

        userInv.forEach(inv2 => {
            i += inv2.uses
        });

        const embed = new MessageEmbed()
            .setTitle(`${member.tag} Invites`)
            .addField("Usuários Convidados", i)
            .addField("Códigos dos Invites", invitecodes)
            .setColor("PURPLE")
            .setTimestamp()
            .setThumbnail(client.user.displayAvatarURL())
        message.channel.send(embed)
    }
}