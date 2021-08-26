const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

   var list = [
     'https://i.imgur.com/YbNv10F.gif',
     'https://i.imgur.com/IgGumrf.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863443954674171934/download.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863443975850426368/House_Of_The_Screeching_Goatman___Photo.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444003865100328/DRAMAtical_Murder_Anime_Reviews.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444039613153310/darling_in_the_franxx_zero_two_kiss_hiro_gif.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444070373523466/YURI_ON_ICE.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444101256970261/moshi_moshi_discovered_by_nanz_on_We_Heart_It.gif'
];
    var list1 = [
     'https://i.imgur.com/YbNv10F.gif',
     'https://i.imgur.com/IgGumrf.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863443954674171934/download.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863443975850426368/House_Of_The_Screeching_Goatman___Photo.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444003865100328/DRAMAtical_Murder_Anime_Reviews.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444039613153310/darling_in_the_franxx_zero_two_kiss_hiro_gif.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444070373523466/YURI_ON_ICE.gif',
     'https://cdn.discordapp.com/attachments/863443895823106089/863444101256970261/moshi_moshi_discovered_by_nanz_on_We_Heart_It.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()
   
   const err = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setDescription('Beije o seu/sua webnamorada(o)!')
    .setThumbnail('https://cdn.discordapp.com/avatars/805135276208422972/f5b4aa992ad6b1f5dc52ba39c670e27e.webp?size=4096')
    .setTitle("Como usar?<:Gato_sad3:845679501387759626>")
    .addField("📥 __Como usar:__",`\`.kiss <@user>\``, true)
    .addField("📤 __Ex:__",`\`B!kiss <@Bawer>\``,true)
    .addField("🔁 __Aliases:__","\`beijo | beijar\`",true)
    .addField("📦 __Permição necessária:__","\`Nenhuma\`",true)
    .setFooter('hmmm');

    
   if(!user) return message.lineReply(err)

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`😚 **${message.author.username} roubou um beijo de ${user.username}!**`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!', bot.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`😘 **${user.username} retribuiu o beijo de ${message.author.username}!**`, avatar1)
      .setFooter('Beijinho 😳', user.displayAvatarURL())
      .setImage(rand1)

   await message.channel.send(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.channel.send(embed2)
         }
      })
   });
}

module.exports.help = {
	aliases: ["beijo", "beijar"],
	name: "kiss"
}