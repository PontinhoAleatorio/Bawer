const Discord = require("discord.js")
const db = require("quick.db")
const ownerID = '794400726315040778';

module.exports.run = async (scott, message, args) => {

    console.log(`Comando de removerbot ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    if (message.author.id !== ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setColor("0x36393e")
        .setTimestamp()
        .setDescription("<:Bawer_rage:842703847067353108> Pelo visto você não é o meu desenvolvedor.")).then(m => m.delete(5000))
    var error17 = new Discord.MessageEmbed().setColor("36393e")
        .setTimestamp()
        .setDescription('💁‍♂️ Por favor, digite um \`ID\` **válido**.')
        .setColor("#00BFFF")

    if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    scott.guilds.cache.get(args[0]).leave();
    const embed = new Discord.MessageEmbed()
        .setColor("#00BFFF")
        .setTimestamp()
        .setDescription(`<:Bawer:842704129230766100>
         Acabei de sai do servidor com o id: \`ID\` **[${args[0]}]**`)
    message.channel.send(embed);
}

module.exports.help = {
	aliases: ["rev"],
	name: "remove"
}
