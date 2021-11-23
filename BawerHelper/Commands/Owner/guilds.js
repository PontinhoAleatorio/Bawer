const Discord = require("discord.js");
const c = require("../../infs.js")
const id = '794400726315040778';
module.exports = {
    name: "serverlist",
    aliases: ["lsx-sv"],

  run: async (client, message, args) =>  {

if (message.author.id !== ownerID) return;

const guild = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(30);
const  = new Discord.MessageEmbed()
.setDescription(guild.map((guild, index) => `#**${index + 1}**  \`${guild.name}\` | ${guild.memberCount} Membros | \`${guild.id}\``).join('\n'))
.setColor(c.color)
.setThumbnail(c.thumb)

message.reply({embeds: [footer]});
}
}
