const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bans",
    category: "extra",
    run: async (client, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.lineReply(`<a:estrelinha:852965890596405269> Os moderadores/adiministradores deste servidor ja baniu ${bans.size} membros `)
        })

    }
}
module.exports.help = {
	aliases: ["banimentos"],
	name: "bans"
}