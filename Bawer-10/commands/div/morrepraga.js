const discord = require('discord.js')
const Canvas = require('canvas')


 exports.run = async (client, message, args) => {

    const canvas = Canvas.createCanvas(900, 550)
    const ctx = canvas.getContext("2d")

      let avt = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

      const user = message.mentions.users.first()

      let avatar = avt.avatarURL({ dynamic: true, format: "png", size: 1024 });

    if(!user) {
      return message.channel.send(`${message.author}, você precisa mencionar alguém!`)
    }

    const bg = await 
    Canvas.loadImage("https://cdn.discordapp.com/attachments/832989366833512471/866698207915540510/1814.png")
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

    const TargetAvatar = await Canvas.loadImage(`${avatar}`)
    ctx.drawImage(TargetAvatar, 106, 155, 275, 275)

        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'sucumba.png')
        return message.lineReply(attachment)

    }

module.exports.help = {
	aliases: ["praga"],
	name: "morrepraga"
}