const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../acess/BawerTester/acess/embeds/embed.js")
const staffsID = require("../../acess/BawerHelper/staffs/BawerStaffsID/staffsID.js")
module.exports = {
    name: "reseteco",
    description: "🚓 | Usuarios que quebram regras devem ter a economia restada ;w;",
    type: 'CHAT_INPUT',
    staffsOnly: true,
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Qual o meliante?',
        required: false,
    },
    ],

run: async (client, interaction, args) => {
  
const user = interaction.options.getUser('membro') || interaction.user

const firebase = require('firebase');
const database = firebase.database();
 
let pessoal = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`)
.once('value').then(async function(pas) {

pessoal.update({
braws: 0,
rubis: 0,
brilhos: 0,
timeout: 0,
})

const cu = new MessageEmbed()
.setColor(c.color)
.setThumbnail(c.thumb4)
.setTitle('Usuario punidx :heart:')
.setDescription(`\`${user.tag}\` teve a economia resetada!`)
interaction.followUp({embeds: [cu]})
})

    },
};
