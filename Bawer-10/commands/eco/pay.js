const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 





    const err = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setTitle("Eita um erro!")
    .addField("📥 __Como usar:__",`\`B!pay <@pessoa> <quantidade>\``, true)
    .addField("📤 __Ex:__",`\`B!pay @bawer 30\``,true)
    .addField("📦 __Permição necessária:__","\`Nenhuma\`",true)
    .setFooter('batata');



if(!isNaN(args[2])){
return message.reply(err)
}


  let user = message.author
  let author = message.mentions.users.first()
  
  
  if (author === (user)) return message.reply("❌**|** Você não pode pagar algo para si mesmo(a)")
  
  
  if(!author) return message.reply(err)
  
  
  
  let amount = args.join(" ").slice(22)
  if(!amount) return message.reply (err)
    if (isNaN(args.join(" ").slice(22))) return message.reply(err)
  let authorBalance = await db.fetch(`moedas_${user.id}`)
  if (authorBalance <(amount)) return message.reply("❌**|** Você precisa de mais Braws para pagar uma quantia que você não tem!")
  if(amount < 0){
    return message.reply("❌**|** Você precisa de mais de 0 Braws!")
  }
  const embedPago = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setTitle(':dollar: Pay')
    .setDescription(`> :dollar: ${message.author.username} Pagou **${amount}** Braws ao **${author.username}** com sucesso!`)
  db.add(`moedas_${author.id}`, amount);
  db.subtract(`moedas_${message.author.id}`, amount)

  message.channel.send(embedPago)
}
module.exports.help = {
	aliases: ["pagar"],
	name: "pay"
}