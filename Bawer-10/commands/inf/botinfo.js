const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#2f3136')
    .setDescription(`Brawer infor's ${message.author.username}`)
   .setThumbnail(`https://cdn.discordapp.com/avatars/805135276208422972/f5b4aa992ad6b1f5dc52ba39c670e27e.png?size=1024`)
    .setTimestamp()
    .setFooter(`Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: '<:Bawer:842704129230766100> | Bawer',
            value: `Ola! Eu me chamo Brawer(para os mais intimos braw rsrsrs) Sou um bot com 13 anos querendo apenas um pequeno reconhecimento no discord!`,

        },
        {
           name: '🔨 |Criador',
           value: `Meu cridor é o: Luakase._. 「𝗦𝗠𝗨𝗥𝗙𝗦」#3573`
        },
        {
            name: '<:Bawer2:842707952477667338> | Infos',
            value: `Meu ping atual é de: 🏓\`${client.ws.ping}\`ms
            💁‍♂️${client.guilds.cache.size} servidores
            💁‍♂️${client.channels.cache.size} canais
            💁‍♂️${client.users.cache.size} usuários
            💁‍♂️${client.commands.size} Comandos!`,

        },
        {
            name: 'Um servidor que eu recomendo!',
            value: `[Conversas Aleatorias!](https://discord.gg/c5ybpwvDeD) Um servidor onde tudo pode ser aleatorio! Seu servidor pode aparecer aqui também! Basta fazer algo super legal para mim!`,

        },
        {
            name: 'Website',
            value:`Hey ${message.author} você pode ver mais coisas em [website Bawer](https://sites.google.com/view/bawerwebsite/in%C3%ADcio?authuser=0)`,

        },
        
    )
    message.lineReply(embed);
}
module.exports.help = {
	aliases: ["btinfo", "bti"],
	name: "botinfo"
}