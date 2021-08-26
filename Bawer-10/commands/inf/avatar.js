const Discord = require("discord.js")
exports.run = async (client, message, args) => {



let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author; //Este let pega o Avatar por Menção e por ID, E se não menciona nem por ID de ninguém ele mostrara o seu Avatar.



let avatar = user.displayAvatarURL({ dynamic: true, size: 4096 }) //Mostra o Avatar do Usuário em GIF ou PNG em uma Qualidade boa.


 const embed = new Discord.MessageEmbed()
.setAuthor(`Avatar de ${user.username}`)
.setDescription(`**[Você pode baixar por aqui](${avatar})**`)
//Isso será para Baixar o Avatar pelo Link.
.setImage(avatar)
.setColor("#b8fffa") 

message.lineReply(embed)
}


//Name mais aliases
module.exports.help = {
	aliases: ["av"],
	name: "avatar"
}

//da like no video Koroi (Se da merda, é só excluir essa linha!)