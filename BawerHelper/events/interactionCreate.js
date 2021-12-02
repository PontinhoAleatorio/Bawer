const client = require("../index");
const config = require("../acess/staffs/BawerStaffID/staffsID.json")
const Discord = require("discord.js")
client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {

        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
       
 const { bawerStaffsID } = require("../acess/staffs/BawerStaffID/staffsID.json");
 if (cmd) {
  if (cmd.staffsOnly) {
 if (!bawerStaffsID.includes(interaction.user.id)) {
  return interaction.followUp(`<:queboxta:905579842207109190> | Você é so mais uma pessoa não autorizada tentanto usar um comando que não pode usar.`);
 }}
 }
        if (!cmd)
            return interaction.followUp({ content: "<:queboxta:905579842207109190> | Não consigo executar este comando, tente novamente mais tarde." });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
   interaction.member = interaction.guild.members.cache.get(interaction.user.id);
  const firebase = require('firebase');
const database = firebase.database();

let user = interaction.user;


const embed2 = new Discord.MessageEmbed()
.setColor("#08ddf5")
.setTitle('Verificado')
.setDescription(`Você foi registrado com sucesso!`)
.setThumbnail("https://cdn.discordapp.com/avatars/867825474746843136/d9f5c6c3cd5db9b0dd42139d0bf6368f.webp?size=4096")

let bref = database.ref(`eco/${interaction.user.id}`)
let bref2 = database.ref(`logs/eco/${interaction.user.id}`)
database.ref(`eco/${interaction.user.id}`).once('value').then(async function(db) {
database.ref(`logs/eco/${interaction.user.id}`).once('value').then(async function(lg) {

if(db.val() === null){
bref.update({
//moedas e configs  
abelhas: 0,
flores: 0,  
braws: 0,
rubis: 0,
brilhos: 0,
mel: 0,
bolsa: 0,
margaridas: 0,
café: 0,
black: 'false',
motivBlack: 0,
timeout: 0,
})
if(db.val() === null){
bref2.update({
//configs logs  
compras: 0,
vizuLoja: 0,
fabricMel: 0,
floresColect: 0,
ganhos: 0,
gastos: 0,
vendas: 0,
planta: 0,
})

interaction.followUp({embeds: [embed2]})
return

}
}
if(db.val().black = 'true'){
  const embeduu = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle('BrawBan ;n;')
.setDescription(`\`${user.tag}\` esta banido, e não pode usar meus comandos`)
.setThumbnail("https://cdn.discordapp.com/attachments/858065911062855680/908736499120496720/1636729873666.png")
  return interaction.followUp({content: `${user}`, embeds: [embeduu]})
} 
})
})
        cmd.run(client, interaction, args);
    }
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: true });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
        
    }
});
