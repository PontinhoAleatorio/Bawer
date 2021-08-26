const Discord = require('discord.js');
const fetch = require('node-fetch')
                  // ^^^^^^^^^^^^
                 // npm i node-fetch
                 
module.exports = {
    name: 'iphonex',
    category: 'image',
    description: 'idk :/',
    usage: 'iphonex <user>',
    run: async (client, message, args) => {
        message.channel.startTyping();
        let mention = message.mentions.members.first();

        let m = await message.channel.send("**Por favor, espere...**");

        if (!mention) {
            m.edit("⚠ Por favor mencione alguém");
            return message.channel.stopTyping();
        }
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${mention.user.displayAvatarURL({ size: 1024 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "iphonex.png");
            await message.channel.send(attachment);
            message.channel.stopTyping();
            m.delete();
        } catch (e) {
            m.edit("⚠ Erro, tente novamente!");
            return message.channel.stopTyping();
        }
    }
};

module.exports.help = {
aliases: ["iphone", "celular", "cll",],
name: "iphone"
}