const Discord = require('discord.js')
exports.run = (client, message, args) => {
message.lineReply(new Discord.MessageEmbed()
.setColor('#2f3136')
.setDescription(`\`CPU:\` **${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%**\n\`Memoria:\` **${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB/100MB**\nUptime: **${require('ms')(client.uptime)}**\nPing: ${Math.round(
      client.ws.ping
    )}ms\n \`Linguagem:\` Javascript/Discord.js\n${client.guilds.cache.size} Servidores\n${client.users.cache.size} Membros`));
};
module.exports.help = {
	aliases: ["infos", "info"],
	name: "total"
}