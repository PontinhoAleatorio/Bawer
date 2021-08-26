const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'give-role',
    run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`Você não tem permissão de Gerenciar_Mensagens`).then(m => m.delete({ timeout: 16000 }));

        if (!args[0] || !args[1]) return message.channel.send("Uso incorreto, é `<@username || user id> <role name || id>`").then(m => m.delete({ timeout: 16000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole) return message.channel.send('O usuário já tem essa função').then(m => m.delete({ timeout: 16000 }));

             const embed = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`${message.author} adicionou um novo cargo ${roleName} para ${member.user}`)
                 .setColor('#f09aff')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

            return member.roles.add(roleName).then(() => message.channel.send(embed));
        } catch (e) {
            return message.channel.send('Tente dar uma função que existe da próxima vez ...').then(m => m.delete({ timeout: 16000 })).then(() => console.log(e))
        }
    }
}

module.exports.help = {
	aliases: ["giverole", "addcargo"],
	name: "addrole"
}