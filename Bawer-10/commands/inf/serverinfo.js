const Discord = require("discord.js"); 
 
exports.run = async (client, message, args) => {
 
    let serverembed = new Discord.MessageEmbed() 
    .setColor("#6400b6")
    .setTitle(message.guild.name + ` Server Info`)
    .addField(":gift: Nome", message.guild.name, )
    .addField(":id:  ID", message.guild.id, )
    .addField(`:pencil:  ID do proprietário do servidor`, `<@${message.guild.ownerID}>`, true)
    .addField(`:pencil:  Proprietário do servidorID`, message.guild.ownerID, true)
    .addField(':date: Server Criado em', message.guild.createdAt, true)
    .addField(`:closed_lock_with_key: Verificação de Servidor Level`, message.guild.verificationLevel, true)
    .addField(':man: Membros', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humanos | ${message.guild.memberCount} Total de Membros | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humanos`, true)
    .addField(':wrench:  Canais', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Chats de Voz | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Canais de Texto | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categorias | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Chats de Voz | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Canais de Texto | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categorias`, true)
    .addField(":inbox_tray:  Você Entrou", message.member.joinedAt)
    .setFooter(` • Autor ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
 
    message.lineReply(serverembed).then(m => m.delete({timeout: 16000}));
 
 }

 module.exports.help = {
	aliases: ["srvi", "infoserve"],
	name: "serverinfo"
}