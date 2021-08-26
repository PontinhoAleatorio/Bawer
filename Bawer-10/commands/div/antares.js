const Discord = require("discord.js");

  exports.run = async (client, message, args) => {
 try {
 let name = ('Antares Junior');

 let avatar = {avatar: 'https://cdn.discordapp.com/attachments/870785519158710312/871028621043695626/Paradox_Live.png'}

 let batatinha = [
    'CPF cancelado!',
    'Queima ou não queima?',
    'Você vai morrer antes do natal!',
    'The maconha dead!',
    'Ele tomou?.... NA JACA!!...... no olho da jaca!',
    'Maconheiro safado!',
    'Hmmmmmm, tu queima né?',
    'Tu fumo hoje né?',
    'The maconha dead!',
    'Acunha Renato!',
    'Soletrando comm...',

];
let arg = batatinha[Math.floor(Math.random() * batatinha.length)]

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 });

 } catch (err) {
 message.reply('**Poxa ele ta dormindo agora :/**')
 }


}


module.exports.help = {
	aliases: ["anta", "at"],
	name: "antares"
}