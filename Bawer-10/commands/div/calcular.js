const math = require('mathjs');

const Discord = require('discord.js');

 exports.run = async (client, message, args) => {

        if(!args[0]) return message.channel.send('Por favor, forneça uma pergunta');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Por favor, forneça uma pergunta ** válida **')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculadora')
        .addField('Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Responda', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
module.exports.help = {
	aliases: ["calc"],
	name: "calcular"
}