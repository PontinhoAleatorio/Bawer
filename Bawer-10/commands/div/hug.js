const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

   var list = [
     'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif','https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif','https://media.giphy.com/media/143v0Z4767T15e/giphy.gif','https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif','https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif','https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif','https://media.giphy.com/media/LScnoPBUqI7bMwQOdf/giphy.gif','https://media.giphy.com/media/bJQZwn5Er70Iw/giphy.gif','https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif','https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif','https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif','https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif','https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif','https://media.giphy.com/media/JLovyTOWK4cuc/giphy.gif','https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif','https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif','https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif','https://media.giphy.com/media/GcJN2Dz5XMDeM/giphy.gif','https://media.giphy.com/media/1434tCcpb5B7EI/giphy.gif','https://media.giphy.com/media/HgG94OVFjDR4s/giphy.gif'
];
    var list1 = [
     'https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif','https://media.giphy.com/media/GMFUrC8E8aWoo/giphy.gif','https://media.giphy.com/media/143v0Z4767T15e/giphy.gif','https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif','https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif','https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif','https://media.giphy.com/media/LScnoPBUqI7bMwQOdf/giphy.gif','https://media.giphy.com/media/bJQZwn5Er70Iw/giphy.gif','https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif','https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif','https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif','https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif','https://media.giphy.com/media/fLv2F5rMY2YWk/giphy.gif','https://media.giphy.com/media/JLovyTOWK4cuc/giphy.gif','https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif','https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif','https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif','https://media.giphy.com/media/GcJN2Dz5XMDeM/giphy.gif','https://media.giphy.com/media/1434tCcpb5B7EI/giphy.gif','https://media.giphy.com/media/HgG94OVFjDR4s/giphy.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

   const err = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setDescription('Um abraço web!')
    .setThumbnail('https://cdn.discordapp.com/avatars/805135276208422972/f5b4aa992ad6b1f5dc52ba39c670e27e.webp?size=4096')
    .setTitle("Como usar?<:Gato_sad3:845679501387759626>")
    .addField("📥 __Como usar:__",`\`B!hug <@user>\``, true)
    .addField("📤 __Ex:__",`\`.hug <@Bawer>\``,true)
    .addField("🔁 __Aliases:__","\`abraço | abraçar\`",true)
    .addField("📦 __Permição necessária:__","\`Nenhuma\`",true)
    .setFooter('hmmm');

    
   if(!user) return message.lineReply(err)

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`😚 **${message.author.username} deu um abraço em ${user.username}!**`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para retribuir!', user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`😘 **${user.username} retribuiu o abraço de ${message.author.username}!**`, avatar1)
      .setFooter('Abraço', user.displayAvatarURL())
      .setImage(rand1)

   await message.lineReply(embed).then(msg => {
      msg.react('🔁')
      msg.awaitReactions((reaction, user) => {
         if (message.mentions.users.first().id !== user.id) return

         if (reaction.emoji.name === '🔁') {
            return message.lineReply(embed2)
         }
      })
   });
}

module.exports.help = {
    aliases: ["abraço", "abraçar"],
    name: "hug"
}