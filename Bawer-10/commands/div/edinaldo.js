const jimp = require("jimp")
const Discord = require('discord.js')
const cooldowns = {}
const ms = require("ms")

exports.run = async (client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 100
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle(':negado: Muita Calma nessa hora amigão !!!')
  .setColor('#ff0000')
    .setImage('https://cdn.discordapp.com/attachments/755506991019065425/765688678801604659/purple_load.gif')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(` Espere um pouco para utilizar esse comando novamente`).then(msg=> {
    msg.delete({ timeout: 100 });
        })
       return;
    } else {
                 cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://pbs.twimg.com/media/EQIPgg3WoAAKG2Z?format=png&name=small")
        if (!args[0]) return message.reply("Escreva algo para o ednaldo mostrar.")
                        img.then(image => {
                          jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                       image.resize(885, 494)
                                           image.print(font, 300, 300, args.join(" "), 7000)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.lineReply({files: [{ attachment: i, name: "ednaldo.png"}]})
                })
            })
        })
    }

    
module.exports.help = {
	aliases: ["ednaldo"],
	name: "edinaldo"
}