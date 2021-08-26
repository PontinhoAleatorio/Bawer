const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

    exports.run = async (client, message, args) => {
      if(!args.slice(0).join(" ")) 
     message.lineReply("💁‍♂️ | Por favor mande alguma coisa para o fazer um tweet")
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${args.join(' ')}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Tweet!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })
    }
module.exports.help = {
	aliases: ["cancelar"],
	name: "tweet"
}