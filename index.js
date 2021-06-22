const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); 
require("discord-reply")

const client = new Discord.Client(); //Criação de um novo Client

const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
 
//////////////////////////MENSAGENS ESCONDIDAS//////////////////////////////

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Quem é o criador da bawer?") message.lineReply("<:emoji_11:856727021320798209>**Meu criador**<:emoji_11:856727021320798209> \n\nMeu criador é o <@!839595775729860659>/Hey Pontinho's \n\n<a:emoji_8:856723381231157288>**Onde tiro minhas duvidas?**<a:emoji_8:856723381231157288> \n\nVocê pode tirar suas duvidas em meu servidor! Ja estar nele? Otimo! Agora va no chat <#814220424510570556>")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Nada aqui") message.lineReply("Nada aqui")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Alguem me da braws?") message.lineReply("<:emoji_17:856727209564569670> | **Que feio!** Pare de mendigar Braws! Pegue seu B!daily \n<:emoji_15:856727163436007485> | **Ja pegou seu daily?** Então aposte e ganhe mais Braws! B!apostar")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Ai, eu queria tanto uma batata") message.lineReply("Eu tbm ._.")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Antares") message.lineReply("O que você quer com meu amigo?")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "<@!839595775729860659>") message.lineReply("<:emoji_12:856727057391288390>")
  }
})
//////////////////////////MENSAGENS ESCONDIDAS//////////////////////////////

//////////////////////////SHARDS//////////////////////////////
client.on("shardReady", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`<:emoji_16:856727189368864768> A shard **#${shard}** foi ligada com sucesso!`)
 })

client.on("shardReconnecting", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`<:emoji_16:856727189368864768> A shard **#${shard}** estar sendo reconectada!`)
 })

 client.on("shardDisconnecting", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`A shard **#${shard}** foi desconectada temporariamente!`)
 })

 client.on("shardResume", async shard => {
  const channel = client.channels.cache.get("819270572994855003")
  channel.send(`<:emoji_16:856727189368864768> A shard **#${shard}** foi reconectada com sucesso!`)
 })
//////////////////////////SHARDS//////////////////////////////

//////////////////////////AUTO ROLE//////////////////////////////

//////////////////////////STATUS//////////////////////////////
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
//////////////////////////STATUS//////////////////////////////


//////////////////////////MENÇÃO//////////////////////////////
client.on("message", async message => {
   let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`]
        
        mention.find(mention => {
            
                if (message.content === mention) { //agora o bot responde a menção se ele estiver com algum apelido
            
                    message.lineReply(`<a:emoji_7:856723333450170389> Hey ${message.author}, meu prefixo é **${config.prefix}** ultilize **${config.prefix}help** para receber ajuda!`)
            }
      })
 })
//////////////////////////MENÇÃO//////////////////////////////

//////////////////////////PASTA DE COMANDOS//////////////////////////////
client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
     

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();
    

    try {
        const commandFile = require(`./handlers/commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
      message.channel.send({embed: {
        description: `<:emoji_15:856727163436007485> Não consegui encontrar o comando \`${command}\` em meus comandos <a:emoji_8:856723381231157288> Digite ${config.prefix}help para ver meus comandos`,
        color: "#ff0000"
      }}).then(m => m.delete({timeout: 9000}));
    console.error('Erro:' + err);
  }
});


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token 
