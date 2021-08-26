const Discord = require('discord.js');

     exports.run = async (client, message, args) => {
        let clientGuilds = message.client.guilds.cache;
        let messageObj = Discord.Util.splitMessage(
            clientGuilds.map(g => '\`' + g.id + `\` **|** \`` + g.name + `\` **|** \`` + g.members.cache.size + '\` ') || 'None'
        );
        if (messageObj.length == 1) {
            message.channel.send(messageObj[0]);
        } else {
            for (i = 0; messageObj.length < i; i++) {
                message.channel.send(messageObj[i]);
            }
        }
    }
module.exports.help = {
	aliases: ["servidores", "svr"],
	name: "gulds"
}