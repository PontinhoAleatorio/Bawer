const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

   var list = [
    'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
    'https://media.giphy.com/media/ewHSMEx2TtEo8/giphy.gif',
    'https://media.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif',
    'https://media.giphy.com/media/vFxJ3RuSKRIfS/giphy.gif',
    'https://media.giphy.com/media/vFxJ3RuSKRIfS/giphy.gif',
    'https://media.giphy.com/media/VWRGVjCo3Xcac/giphy.gif',
    'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
    'https://media.giphy.com/media/ZkiIapyGO0u6Q/giphy.gif',
    'https://media.giphy.com/media/mJWDiMyXuWG8U/giphy.gif',
    'https://media.giphy.com/media/XOxay70W2WHbq/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif',
    'https://media.giphy.com/media/OQ7phVSLg3xio/giphy.gif',
    'https://media.giphy.com/media/ylqr4JvFaZqnK/giphy.gif',
    'https://media.giphy.com/media/Tx2XJj2niahby/giphy.gif'
];
    var list1 = [
    'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
    'https://media.giphy.com/media/ewHSMEx2TtEo8/giphy.gif',
    'https://media.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif',
    'https://media.giphy.com/media/vFxJ3RuSKRIfS/giphy.gif',
    'https://media.giphy.com/media/VWRGVjCo3Xcac/giphy.gif',
    'https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
    'https://media.giphy.com/media/ZkiIapyGO0u6Q/giphy.gif',
    'https://media.giphy.com/media/mJWDiMyXuWG8U/giphy.gif',
    'https://media.giphy.com/media/XOxay70W2WHbq/giphy.gif',
    'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
    'https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.gif',
    'https://media.giphy.com/media/OQ7phVSLg3xio/giphy.gif',
    'https://media.giphy.com/media/ylqr4JvFaZqnK/giphy.gif',
    'https://media.giphy.com/media/Tx2XJj2niahby/giphy.gif'
]
   var rand = list[Math.floor(Math.random() * list.length)]
   var rand1 = list1[Math.floor(Math.random() * list1.length)]
   let user = message.mentions.users.first()

    
    if(!user) {
        return message.channel.send(`${message.author} você tem que mencionar um membro para bater!`)
    }

   let avatar = message.author.displayAvatarURL({ format: 'png' })
   let avatar1 = user.displayAvatarURL({ format: 'png' })
   const embed = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(` **${message.author.username} deu um tapa em${user.username}!**`, avatar)
      .setImage(rand)
      .setFooter('Clique em 🔁 para dar um tapa nele!', bot.user.displayAvatarURL())

   const embed2 = new Discord.MessageEmbed()
      .setColor('#b8fffa')
      .setDescription(`😘 **${user.username} Devolveu o tapa para ${message.author.username}!**`, avatar1)
      .setFooter('Tome nos beiço', user.displayAvatarURL())
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
	aliases: ["bater"],
	name: "slap"
}