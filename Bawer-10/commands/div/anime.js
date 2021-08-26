//LETS GET STARTED
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
    
    
    
    if(!args.length) {
      return message.channel.send("Por favor, dê o nome do anime")
    }


      let msg = await message.channel.send("Buscando as informações....")
    

    try {

    let body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)
    body = await body.json()

  
     
    
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.slug)
        .setColor("RED")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Avaliações", body.data[0].attributes.averageRating)
        .addField("TOTAL EPISÓDIOS", body.data[0].attributes.episodeCount)
        //.setImage(body.data[0].attributes.coverImage.large)
        //try it
        
        
        message.channel.send(embed)
        msg.delete();
    
          

      } catch (err) {
        msg.delete();
     
         return message.channel.send("Incapaz de encontrar este anime");
       }               
                       
    
  }




module.exports.help = {
	aliases: ["animeinfo"],
	name: "anime"
}