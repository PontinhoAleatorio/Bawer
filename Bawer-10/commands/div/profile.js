const Canvas = require('canvas');
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
    
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  const user = message.mentions.members.last() || message.member;

      let dinheiro = db.fetch(`moedas_${message.author.id}`)
      if(dinheiro === null) dinheiro = 0;
  
      let perfil1 = await db.fetch(`perfil_${message.author.id}`);
      if (perfil1 === null) perfil1 = 'https://imgur.com/TJe8unw.png'
  
    const canvas = Canvas.createCanvas(850, 500);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage(perfil1);
    
      
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#00ffff';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
        ctx.textAlign = "left";
        ctx.font = '50px arial';
  ctx.fillStyle = "rgb(15, 214, 253)";
ctx.fillText(`${message.author.username} \nBraws: ${dinheiro} `, 210, 80)

ctx.arc(100, 95, 85, 0, Math.PI * 2, true);
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = 6;
ctx.stroke();
ctx.closePath();
ctx.clip();

const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg'}));

ctx.drawImage(avatar, 15, 10, 175, 175);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), perfil1);
        message.lineReply(`${message.author}`, attachment);

}
module.exports.help = {
	aliases: ["perfil"],
	name: "profile"
}