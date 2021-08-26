const discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args, channel) => {

 let cat = await db.fetch(`gato_${message.author.id}`)
 if (cat === null) gato = 0; 0;
let catvida = await db.fetch(`catvida_${message.author.id}`)
if (catvida === null) catvida = 100;
let catforc = await db.fetch(`catforca_${message.author.id}`)
if (catforc === null) catforc = 1;
let levlcat = await db.fetch(`lvlc_${message.author.id}`)
if (levlcat === null) levlcat = 1;
let catimg = await db.fetch(`catimg_${message.author.id}`)
if (catimg === null) catimg = "https://media.discordapp.net/attachments/769548985035522049/770999250619334676/Design_sem_nome_6.png";
if(catforc > 3){ 
db.set(`catimg_${message.author.id}`,"https://media.discordapp.net/attachments/769548985035522049/770999254911156234/Design_sem_nome_7.png")
}




 //dog-configs
 let dog = await db.fetch(`dog_${message.author.id}`)
 if (dog === null) dog = 0;
let dogvida = await db.fetch(`dogvida_${message.author.id}`)
if (dogvida === null) dogvida = 100;
let dogforc = await db.fetch(`dogforca_${message.author.id}`)
if (dogforc === null) dogforc = 1;
let levl = await db.fetch(`lvl_${message.author.id}`)
if (levl === null) levl = 1;
let imgdog = await db.fetch(`dogimg_${message.author.id}`)
if (imgdog === null) imgdog = "https://media.discordapp.net/attachments/769548985035522049/770999245728645120/Design_sem_nome_8.png";
if(dogforc > 3){ 
db.set(`dogimg_${message.author.id}`,"https://media.discordapp.net/attachments/769548985035522049/770999257628672020/Design_sem_nome_9.png")
}




 let moedas = await db.fetch(`moedas_${message.author.id}`)
 if (moedas === null) moedas = 0; 



    const info = new discord.MessageEmbed()
    .setTitle(':info: Info!')
    .setDescription('> Digite o nome do pet que você deseja ver o info')
    .setColor('RED')
    .setFooter("Você tem 30 segundos!")
     message.channel.send(info)
     let filter = x => x.author.id === message.author.id 
     const job =  message.channel.createMessageCollector(filter, { time: 25000 });

//gato
     job.on('collect', m =>{
        if(m.content.toLowerCase().includes("cat") || m.content.toLowerCase().includes("gato")) {


job.stop()
   

if(cat < 1){ return message.reply('Você não tem `1` gato')
}



       const exam = new discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':tada: Cat-info!')
    .addField("Lvl:",`\`${levlcat}\``,true)
   .addField("Vida:",`\`${catvida}%\``,true)
   .addField("Força:",`\`${catforc}\``,true)
.setImage(catimg)
 message.channel.send(exam)


         
       }


//dog
 if(m.content.toLowerCase().includes("dog") || m.content.toLowerCase().includes("cachorro")) {


job.stop()
   

if(dog < 1){ return message.reply('Você não tem `1` cachorro')
}



       const exam = new discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(':tada: Dog-info!')
    .addField("Lvl:",`\`${levl}\``,true)
   .addField("Vida:",`\`${dogvida}%\``,true)
   .addField("Força:",`\`${dogforc}\``,true)
.setImage(imgdog)
 message.channel.send(exam)


         job.stop()
       }





     });






}
module.exports.help = {
    aliases: ["pet","pets","pt"],
    name: "pet-info"
}