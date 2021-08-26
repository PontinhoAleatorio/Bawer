const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

   var list = [
     'https://i.imgur.com/28zzdho.gif',
     'https://i.imgur.com/5ULGhAn.gif',
     'https://i.imgur.com/VV8f9TC.gif',
     'https://i.imgur.com/P3pdnij.gif'
];
    var list1 = [
     'https://i.imgur.com/28zzdho.gif',
     'https://i.imgur.com/5ULGhAn.gif',
     'https://i.imgur.com/VV8f9TC.gif',
     'https://i.imgur.com/P3pdnij.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

    
    if(!user) {
        return message.channel.send(`${message.author} você tem que mencionar um membro para dançar!`)
    }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`💃 **${message.author.username} Estar dançando com ${user.username}!**`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para dançar junto!', client.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`😘 **${user.username} estar dançando com ${message.author.username}!**`, avatar1)
      .setFooter('Dance! 💃', user.displayAvatarURL())
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
	aliases: ["dançar"],
	name: "dance"
}