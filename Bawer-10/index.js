const Discord = require("discord.js");
require("discord-reply")
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config")
const express = require('express');
const ms = require('ms')
const cooldowns = {}


//24h on
const app = express();
app.get("/", (request, response) => {
console.log("Ping recebido!")
response.sendStatus(200);
});
app.listen(process.env.PORT)

//configs
client.commands = new Discord.Collection();
client.cooldown = new Discord.Collection();
client.aliases = new Discord.Collection();
client.request = new (require("rss-parser"))();


client.on("ready", async () => {
  client.api.applications(client.user.id).commands.post({
    data: {
      name: "teste",
description: "teste"
    }
  });
});
client.ws.on('INTERACTION_CREATE', async (interaction) => {
  const command = interaction.data.name.toLowerCase();
  const args = interaction.data.options
  if (command === 'slash'){
    client.api.interactions(interaction.id, interaction.token).callback.post({
      data: {
        type: 4,
        data: {
          content: `Comando de teste`
        }
      }
    })
  }
})



client.config = {
TOKEN: config.token,
prefix: config.prefix,
color: config.color,
cooldown: 15000
}

const init = (dir, log) => {
fs.readdir(dir, (err, files) => {
if (err) return console.error(err);
console.log(log.replace('{files}', files.length));
files.forEach(f => {
if (!f.endsWith(".js")) return;
let command = require(`${dir}${f}`);
client.commands.set(command.help.name, command);
command.help.aliases.forEach(alias => {
client.aliases.set(alias, command.help.name);
});
});
});
}

init("./commands/", '[LOG] Iniciando {files} pastas [SRC]');
init("./commands/div/", '[LOG] Iniciando {files} comandos de diversão [SRC]');
init("./commands/inf/", '[LOG] Iniciando {files} comandos de infrmações [SRC]');
init("./commands/eco/", '[LOG] Iniciando {files} comandos de economia [SRC]');
init("./commands/mod/", '[LOG] Iniciando {files} comandos de moderação [SRC]');


fs.readdir('./events/', (err, evtFiles) => {
console.log(`[LOG] Carregando ${evtFiles.length} eventos.[CARREGAMENTO]`);
evtFiles.forEach(file => {
const eventName = file.split('.')[0];
const event = require(`./events/${file}`);
client.on(eventName, event.bind(null, client));
});
})




//event message
client.on("message", async (message) => {
if (!message.guild || message.author.bot) return;
if (!message.content.startsWith(client.config.prefix)) return;
let args = message.content.slice(client.config.prefix.length).trim().split(" ");
let command = args.shift().toLowerCase();
const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
if (!cmd) return;
cmd.run(client, message, args);
console.log(`${message.author.tag} Usou o comando de ${command}`)
});

client.on("shardReady", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`A shard **#${shard}** foi ligada com sucesso!`)
 })

client.on("shardReconnecting", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`A shard **#${shard}** estar sendo reconectada!`)
 })

 client.on("shardDisconnecting", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`A shard **#${shard}** foi desconectada temporariamente!`)
 })

 client.on("shardResume", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(` A shard **#${shard}** foi reconectada com sucesso!`)
 })

client.on("message", async message => {
   let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`]
        
        mention.find(mention => {
            
                if (message.content === mention) { //agora o bot responde a menção se ele estiver com algum apelido
            
                    message.lineReply(`Ola! ${message.author}, meu prefixo é **${config.prefix}** ultilize **${config.prefix}help** para receber ajuda!`)
            }
      })
 })

 client.on('ready', () => {
	let activities = [
			`Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais`,
      `${client.users.cache.size} usuários`,
      `${config.prefix}daily ja recebeu seu diario hoje?`,
      `❤️ obrigada aos ${client.users.cache.size} usuários que me usam`,
      `❤️${client.guilds.cache.size} servidores espalhando alegria :)`,
      `Meu prefixo atual é: ${config.prefix}`
		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'WATCHING'
			}),
		9000
	);
	client.user.setStatus('online').catch(console.error);
	console.log('Estou Online!');
});


//config.token
client.login(client.config.TOKEN);


