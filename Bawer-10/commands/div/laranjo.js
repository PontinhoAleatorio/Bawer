const jimp = require("jimp")
const Discord = require('discord.js')
const cooldowns = {}
const ms = require("ms")

exports.run = async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 10000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle(':carregando: Muita Calma nessa hora amigão !!!')
  .setColor('#F500FF')
    .setThumbnail('https://cdn.discordapp.com/attachments/755506991019065425/765688678801604659/purple_load.gif')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(` Espere um pouco para utilizar esse comando novamente`).then(msg=> {
    msg.delete({ timeout: 600000 });
        })
       return;
    } else {
cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://cdn.discordapp.com/attachments/554048737648050179/610011657632219147/laranjo-meme-cke.jpg")
        let fimose = args.join(" ")
    const err = new Discord.MessageEmbed()
    .setColor('#b8fffa')
    .setDescription('A famosa laranja!')
    .setThumbnail('https://cdn.discordapp.com/avatars/805135276208422972/f5b4aa992ad6b1f5dc52ba39c670e27e.webp?size=4096')
    .setTitle("Como usar?<:Gato_sad3:845679501387759626>")
    .addField("📥 __Como usar:__",`\`.laranjo <texto>\``, true)
    .addField("📤 __Ex:__",`\`.laranjo amo batatas\``,true)
    .addField("🔁 __Aliases:__","\`laranja\`",true)
    .addField("📦 __Permição necessária:__","\`Nenhuma\`",true)
    .setFooter('hmmm');
if(!fimose) return message.reply(err)
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "laranjo.png"}]})
                })
            })
        })
    }
    
module.exports.help = {
	aliases: ["laranja"],
	name: "laranjo"
}