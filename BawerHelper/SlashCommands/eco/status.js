const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "status",
    description: "🚓 | Estatisticas da economia",
    type: 'CHAT_INPUT',
    staffsOnly: true,
    options: [{
        name: 'user',
        type: 'USER',
        description: '🚓 | User ID',
        required: false,
    }],

    run: async (client, interaction, args) => {
    if(!interaction.guild) return interaction.followUp({ content: "<:queboxta:905579842207109190> Você so pode ver suas informações da economia em algum servidor"})
  
 const user = interaction.options.getUser('user') || interaction.user;

const firebase = require('firebase');
const database = firebase.database();
const embed2 = new MessageEmbed()
.setColor(c.color)
.setTitle('Estou verificando algo...')
.setDescription(`<:bawer_demon:900143965897117797> | Usuário registrado na economia! Use o comando novamente :3`)
.setThumbnail(c.thumb)

let bref = database.ref(`eco/${user.id}`)
let bref2 = database.ref(`logs/eco${user.id}`)

database.ref(`eco/${user.id}`).once('value').then(async function(db) {
database.ref(`logs/eco/${user.id}`).once('value').then(async function(lg) {

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
black: 0,
motivBlack: 0,
timeout: 0,
})
if(lg.val() === null){
bref2.update({
//configs logs  
compras: 0,
vizuLoja: 0,
fabricMel: 0,
floresColect: 0,
vendas: 0,
})

interaction.followUp({embeds: [embed2]})
return

}
} 
if(db.val() == null){
  return interaction.followUp(`${user.tag} não esta registrado em minha database, peça que ele use um comando meu de economia`)
} else {

var braw = db.val().braws
var rubis = db.val().rubis
var luz = db.val().brilhos
var abelhas = db.val().abelhas
var mel = db.val().mel
var caf = db.val().café
var flores = db.val().flores
var marg = db.val().margaridas
var crp = lg.val().compras
var vlg = lg.val().vizuLoja
var flco = lg.val().floresColect
var fbm = lg.val().fabricMel
var ven = lg.val().vendas


const embed = new MessageEmbed()
.setColor("#2f3136")
.setTitle(`Status ${user.tag}`)
.setDescription(`\`\`\`Aqui você pode ver os status da sua economia ${user.tag}\`\`\`
**Select Menu**
\`\`\`Selecione a opção que você quer ver da sua economia\`\`\``)

let status = new MessageActionRow().addComponents( new MessageSelectMenu()
.setCustomId('menu')
.setPlaceholder(`Clique aqui`) 
.addOptions([
{
label: `atm`,
description: `Seu atm/balance/money`,
emoji: '915053215718965298',
value: 'atm',
},

{
label: 'logs',
description: `Seus logs na economia`,
emoji: '<:suquinho:915052991038492722>',
value: 'log',
},
{
label: `Request`,
description: `Resetar a economia do user`,
emoji: '<:caf:915054924432289812>',
value: 'req',
},

])
);


return interaction.followUp({embeds: [embed], components: [status]}).then(msg => {

const filtro = (interaction) => 
interaction.isSelectMenu()
const coletor = msg.createMessageComponentCollector({
filtro
});

coletor.on('collect', async (collected) => {
if(collected.user.id != interaction.user.id) return collected.reply({ content: `Você não pode mexer nisto.`, ephemeral: true });
let valor = collected.values[0]
collected.deferUpdate()

if (valor === 'atm') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

var braw = db.val().braws
var rubis = db.val().rubis
var luz = db.val().brilhos
var abelhas = db.val().abelhas
var mel = db.val().mel
var flores = db.val().flores
var marg = db.val().margaridas
var caf = db.val().café

const embed2 = new MessageEmbed()
.setColor(c.color)
.setTitle(`Atm`)
.setThumbnail(c.thumb2)
.setDescription(`**Atm geral:**
\`\`\`💵 | Braws: ${braw} \n❤️ | Rubis: ${rubis}\n✨ | Brilhos: ${luz}\`\`\`
**Atm da colmeia:**
🐝Abelhas: \`\`\`${abelhas}\`\`\` 
🥀Flores: \`\`\`${flores}\`\`\` <:mel:915066016613159013> Mels: \`\`\`${mel}\`\`\` 
🌻 Margaridas: \`\`\`${marg}\`\`\` <:caf:915054958515220532> Café: \`\`\`${caf}\`\`\``)

msg.edit({embeds: [embed2]})
})
}

if (valor === 'log') {

let eu = database.ref(`logs/eco/${user.id}`)
database.ref(`logs/eco/${user.id}`).once('value').then(async function(lg) {

var crp = lg.val().compras
var vlg = lg.val().vizuLoja
var flco = lg.val().floresColect
var fbm = lg.val().fabricMel
var ven = lg.val().vendas
var gan = lg.val().ganhos
var gas = lg.val().gastos

const embed3 = new MessageEmbed()
.setColor(c.color2)
.setThumbnail(c.thumb)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`Logs`)
.setDescription(`
**Compras:**
\`\`\`${crp}\`\`\`
**Ganhos:**
\`\`\`${gan}\`\`\`
**Gastos:**
\`\`\`${gas}\`\`\`
**Vizualizações da loja:**
\`\`\`${vlg}\`\`\`
**Vezes que coletou margaridas:**
\`\`\`${flco}\`\`\`
**Vezes que fabricou mel:**
\`\`\`${fbm}\`\`\`
**Vendas:**
\`\`\`${ven}\`\`\``)

msg.edit({embeds: [embed3]})

})
}
if (valor === 'req') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {


const err = new MessageEmbed()
.setColor(c.color2)
.setThumbnail(c.thumb4)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`Request BRBRES`)
.setDescription(`Você esta fazendo uma request BRBRES(braws, rubis e brilhos reset)
**O que iremos resetar:**
\`\`\`Tudo que você possui na economia!\`\`\`
**BRBRES:**
\`\`\`Apos a request teremos um prazo do reset de 7 dias, apos o reset não tenha sido feito, você poderá fazer o request de novo\`\`\`
**"Não quero mais o reset":**
\`\`\`Entre em meu servidor de suporte, abra um ticket com a staff, e peça para não resetarem.\`\`\``)

let rquest = new MessageActionRow().addComponents( new MessageSelectMenu()
.setCustomId('menu')
.setPlaceholder(`Clique aqui`) 
.addOptions([
{
label: `Request`,
description: `Mandar a request`,
emoji: '<:caf:915054924432289812>',
value: 'req',
},

])
);

msg.reply({embeds: [err], ephemeral: true, components: [rquest]}).then(msg => {

const filtro = (interaction) => 
interaction.isSelectMenu()
const coletor = msg.createMessageComponentCollector({
filtro
});

coletor.on('collect', async (collected) => {
if(collected.user.id != interaction.user.id) return collected.reply({ content: `Você não pode mexer nisto.`, ephemeral: true });
let valor = collected.values[0]
collected.deferUpdate()

if (valor === 'req') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

eu.update({
abelhas: 0,
flores: 0,  
braws: 0,
rubis: 0,
brilhos: 0,
mel: 0,
bolsa: 0,
café: 0,
margaridas: 0,
plant: "off",
timeout: 0,
})

msg.reply(`Prontinho!`).then(msg => {
  let canal = client.channels.cache.find(c => c.id === '915380865658413056')
  canal.send(`${interaction.user.tag}[${interaction.user.id}] resetou a economia de: ${user.tag}[${user.id}]`)
})
})
}

})
})

})
}


})
})
}
})
})
        
    },
};
