const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(`Help Bawer's ${message.author}`)
    .setImage('https://cdn.discordapp.com/attachments/870785519158710312/870785644975251456/Central_De_Ajuda.png')
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: 'Todos os comandos no website',
            value: `[Meus comandos](https://sites.google.com/view/bawerwebsite/in%C3%ADcio/comandos?authuser=0)`,
            inline: true
        },
        {
            name: 'Me adicione!',
            value: `[Me adicione por aqui!](https://discord.com/oauth2/authorize?client_id=805135276208422972&scope=bot&permissions=805363838) [Entre em meu servidor para retirar duvidas!](https://discord.gg/583KNCh2Fk)`,
            inline: true
        },
    )
    message.lineReply(embed);
}


module.exports.help = {
	aliases: ["comandos", "commands", "ajuda"],
	name: "help"
}