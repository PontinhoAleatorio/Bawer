const Discord = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
    name: 'presentation',
    category: 'diversão',
  run: async(client, message, args) => {
    let fimose = args.join(" ")
    const err = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setDescription('A Lisa Simpson estar mostrando seu trabalho para sua turma! Mais o que seria? Escolha você mesmo!')
    .setThumbnail('https://cdn.discordapp.com/avatars/805135276208422972/f5b4aa992ad6b1f5dc52ba39c670e27e.webp?size=4096')
    .setTitle("Como usar?<:Gato_sad3:845679501387759626>")
    .addField("📥 __Como usar:__",`\`.lisa <texto>\``, true)
    .addField("📤 __Ex:__",`\`.lisa amo batatas\``,true)
    .addField("🔁 __Aliases:__","\`apre | apresentação\`",true)
    .addField("📦 __Permição necessária:__","\`Nenhuma\`",true)
    .setFooter('hmmm');
if(!fimose) return message.reply(err)
        let image = await new DIG.LisaPresentation().getImage(fimose)
        let attach = new Discord.MessageAttachment(image, 'presentation.png');;
        message.lineReply(attach)
    }
}
module.exports.help = {
    aliases: ["apre","apresentação"],
    name: "lisa"
}