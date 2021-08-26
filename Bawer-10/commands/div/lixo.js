const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
    name: 'trash',
    category: 'fun',
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'trash.png');;
        message.lineReply(attach)
    }
}
module.exports.help = {
    aliases: ["lixeira"],
    name: "lixo"
}