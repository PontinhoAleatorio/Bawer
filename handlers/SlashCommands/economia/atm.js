const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../embed")
module.exports = {
    name: "atm",
    description: "💸 | Veja seus Braws",
    type: 'CHAT_INPUT',
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro.',
        required: false,
    }],

    run: async (client, interaction, args) => {
    if(!interaction.guild) return interaction.followUp({ content: "<:queboxta:905579842207109190> Você so pode ver suas informações da economia em algum servidor"})
  
 const user = interaction.options.getUser('membro') || interaction.user

const firebase = require('firebase');
const database = firebase.database();
const embed2 = new MessageEmbed()
.setColor(c.color)

.setDescription(`<:bawer_demon:900143965897117797> | Usuário registrado na economia! Use o comando novamente :3`)
.setThumbnail(c.thumb)

let bref = database.ref(`eco/${user.id}`)

database.ref(`eco/${user.id}`).once('value').then(async function(db) {

if(db.val() === null){
bref.set({
//moedas e configs  
braws: 0,
rubis: 0,
brilhos: 0,
timeout: 0,
})

interaction.followUp({embeds: [embed2]})
return

} else {

var braw = db.val().braws
var rubis = db.val().rubis
var luz = db.val().brilhos

const embed = new MessageEmbed()
.setColor(c.color)
.setTitle(`<:bawer_demon:900143965897117797> | Atm`)
.setThumbnail(c.thumb2)
.setDescription(`> 💵 \`|\` Braws: \`${braw}\` \n> :heart: \`|\` Rubis: \`${rubis}\`\n> ✨ \`|\` Brilhos: \`${luz}\` `)


interaction.followUp({embeds: [embed]})
return
}
})
        
    },
};
