const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user-info",
    category: "extra",
    run: async (client, message, args) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:729181184193462285> online";
                break;
            case "dnd":
                status = "<:dnd:729181212530442311> dnd";
                break;
            case "idle":
                status = "<:idle:729181121933475931> idle";
                break;
            case "offline":
                status = "<:offline:729181162182017051> offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} stats`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nome: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "#️⃣ Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "🆔 ID: ",
                    value: user.user.id,
                },
                {
                    name: "Status atual: ",
                    value: status,
                    inline: true
                },
                {
                    name: "Atividade: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `O usuário não está jogando!`,
                    inline: true
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Data de criação: ',
                    value: user.user.createdAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: 'Data de entrada: ',
                    value: user.joinedAt.toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: 'Funções do usuário: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )

        await message.lineReply(embed)

    }
}

module.exports.help = {
	aliases: ["infoperfil", "uf"],
	name: "userinfo"
}