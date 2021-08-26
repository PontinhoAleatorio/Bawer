const Discord = require("discord.js");

module.exports = {
  name: "say",
  //o bot fala sua msg!

  run: async(client, message, args) => {
    let msg = args.join(" "); //setando....

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${message.author} Você não possui a permissão **GERENCIAR MENSAGENS**!`);


    let fimose = args.join(" ")
    const err = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setDescription('Me faça falar algo super legal!')
    .setThumbnail('https://cdn.discordapp.com/avatars/805135276208422972/f5b4aa992ad6b1f5dc52ba39c670e27e.webp?size=4096')
    .setTitle("Como usar? <:Gato_sad3:845679501387759626>")
    .addField("📥 __Como usar:__",`\`B!say <texto>\``, true)
    .addField("📤 __Ex:__",`\`B!say amo batatas\``,true)
    .addField("🔁 __Aliases:__","\` falar \`",true)
    .addField("📦 __Permição necessária:__","\`GERENCIAR MENSAGENS\`",true)
    .setFooter('hmmm');

if(!fimose) return message.reply(err)
if (args.length !== 0) {
    if (message.content.indexOf("@everyone") > -1 || message.content.indexOf("@here") > -1) {
      message.channel.send("Sinto muito mais você não vai me fazer mencionar everyone/here")
       } else {
  message.lineReply(`*Mensagem enviada por: ${message.author}*

${msg}`)
}}
 //comando para o bot falar sua mensagem
  }
}

module.exports.help = {
	aliases: [ "falar"],
	name: "say"
}