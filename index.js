const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client

const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

 client.on('messageDelete', async (message, oldMessage, newMessage) => {
       
  if(message.author.bot) return;
     const embed = new Discord.MessageEmbed()
     .setTitle('Mensagem excluida')
     .setDescription(`o usuario: ${message.author} apagou uma mensagem no canal ${message.channel}
 Mensagem: \`\`\` ${message.content} \`\`\``)    
      .setColor('BLACK')
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL())

     let channel = message.guild.channels.cache.get('847932249604620348')
     if (!channel) return;
     channel.send(embed)
 })

client.on('messageUpdate', async (message, oldMessage, newMessage) => {
       
  if(message.author.bot) return;
     const embed = new Discord.MessageEmbed()
     .setTitle('Mensagem editada')
     .setDescription(`o usuario: ${message.author} apagou uma mensagem no canal ${message.channel}
 Mensagem antiga: \`\`\` ${message.content || 'Anexo'} \`\`\`
 Mensagem nova: \`\`\` ${oldMessage.content || 'Anexo'} \`\`\``)    
      .setColor('RANDOM')
     let channel = message.guild.channels.cache.get('847932249604620348')
     if (!channel) return;
     channel.send(embed)
 })
 

client.on("ready", () => {
  var rei = client.channels.cache.get("819270572994855003");//caso não tenha cria um com o nome status 
  
  let reimsg = new Discord.MessageEmbed()
  .setTitle(`🚀 Acabei de ser reiniciada!`)
  .setDescription(`🌬 **Estou em:** ${client.guilds.cache.size} servidores!
  
  👣 **Cuidando de:** ${client.users.cache.size} usuários.`)
  .setFooter(`Reiniciada em: `)
  .setColor("RANDOM")
  .setTimestamp();

  rei.send(reimsg)
})

//////////////////////////MENSAGENS ESCONDIDAS//////////////////////////////

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "carrinho") message.channel.send("<a:carrinho:851089197637173258>")
  }
})


client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "wap") message.reply("I said, certified freak. \nSeven days a week. \nWet-ass pussy. \nMake that pull-out game weak, woo (ah). \nYeah, yeah, yeah, yeah. \nYeah, you fucking with some wet-ass pussy. \nBring a bucket and a mop for this wet-ass pussy. \nGive me everything you got for this wet-ass pussy")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Bawer vai se foder") message.reply("Foda-se meu anjo")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Bawer eu te amo") message.reply("Woww. Eu tbm te amo >.< So que como amigo <:Bawer:842704129230766100>")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "que horas sao?") message.reply("Olhe no relogio uai")
  }
})

client.on("message", (message) => {
  if (!message.author.bot) 
  {
    if (message.content == "batata") message.reply("Eu também gosto de batata! :potato: :yum:")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "potato") message.reply("I also like potato :potato: :yum:")
  }
})

client.on("message", (message) => {
  if (!message.author.bot)
  {
    if (message.content == "Anta") message.reply("res")
  }
})
//////////////////////////MENSAGENS ESCONDIDAS//////////////////////////////

//////////////////////////SHARDS//////////////////////////////
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
  channel.send(`A shard **#${shard}** foi reconectada com sucesso!`)
 })
//////////////////////////SHARDS//////////////////////////////

//////////////////////////AUTO ROLE//////////////////////////////
client.on("guildMemberAdd",  async (member) => {
  let ferinha_autorole = db.get(`ferinha_autorole_${member.guild.id}`);
  if (!ferinha_autorole === null) return;
  member.roles.add(ferinha_autorole)
})

//////////////////////////STATUS//////////////////////////////
client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais`,
      `${client.users.cache.size} usuários`,
      `.daily ja recebeu seu diario hoje?`,
      `❤️ obrigada aos ${client.users.cache.size} usuários que me usam`,
      `❤️${client.guilds.cache.size} servidores espalhando bastante alegria :)` 
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING",
        url: "https://twitch.tv/pontinhoaleatorio"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
     .catch(console.error);
console.log(`${client.user.username} Está pronto!`)
});
//////////////////////////STATUS//////////////////////////////


//////////////////////////MENÇÃO//////////////////////////////
client.on("message", async message => {
   let mention = [`<@${client.user.id}>`, `<@!${client.user.id}>`]
        
        mention.find(mention => {
            
                if (message.content === mention) { //agora o bot responde a menção se ele estiver com algum apelido
            
                    message.channel.send(`Hey ${message.author}, meu prefixo é **.**, utilize **.help** para receber ajuda!`)
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
        description: `<:Bawer:842704129230766100> **Não consegui encontrar o comando \`${command}\` em meus comandos** <:Bawer_sad:842707834630176789> **Digite .help para ver meus comandos**`,
        color: "#ff0000"
      }}).then(m => m.delete({timeout: 9000}));
    console.error('Erro:' + err);
  }
});


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token 