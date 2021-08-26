const discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args, channel) => {

 let gato = await db.fetch(`gato_${message.author.id}`)
 if (gato === null) gato = 0;
 let dog = await db.fetch(`dog_${message.author.id}`)
 if (dog === null) dog = 0;
 let moedas = await db.fetch(`moedas_${message.author.id}`)
 if (moedas === null) moedas = 0; 



    const info = new discord.MessageEmbed()
    .setTitle(':info: Compras!')
    .setDescription('> :din: **O que você deseja?**\nPets: cachorro,gato\n*Digite qual pet você deseja ter__(Sem acentos, símbolos e espaços!__)*')
    .setColor('#b8fffa')
    .setFooter("Você tem 30 segundos!")
     message.channel.send(info)
     let filter = x => x.author.id === message.author.id 
     const job =  message.channel.createMessageCollector(filter, { time: 25000 });

//gato
     job.on('collect', m =>{
       if(m.content.toLowerCase().includes("gato")) {
 job.stop()

 if(gato > 0){ return message.reply('Você já possui `1` gato')
}

if(moedas < 100){ return message.reply('Você não possui `100` Braws para realizar essa compra ;-;')
}
       const exam = new discord.MessageEmbed()
    .setColor('#b8fffa')
    .setTitle(':tada: Compras!')
    .setDescription(`> <@${message.author.id}> Comprou um gato por 100 Braws`)
    
db.subtract(`moedas_${message.author.id}`,100)
db.add(`gato_${message.author.id}`,1)

 message.channel.send(exam)


         
       }


//dog
 if(m.content.toLowerCase().includes("dog") || m.content.toLowerCase().includes("cachorro")) {


job.stop()
   

if(dog > 0){ return message.reply('Você já possui `1` cachorro')
}

 
if(moedas < 100){ return message.reply('Você não possui `100` Braws para realizar essa compra ;-;')
}


       const exam = new discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':tada: Compras!')
    .setDescription(`> <@${message.author.id}> Comprou um cachorrinho por 100 Braws`)
    
db.subtract(`moedas_${message.author.id}`,100)
db.add(`dog_${message.author.id}`,1)

 message.channel.send(exam)


         job.stop()
       }





     });






}
module.exports.help = {
    aliases: ["cm"],
    name: "comprar"
}
