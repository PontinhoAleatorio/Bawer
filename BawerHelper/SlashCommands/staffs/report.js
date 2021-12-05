//O inicio de um sonho
const { Client, CommandInteraction, MessageEmbed, MessageSelectMenu, MessageActionRow } = require("discord.js");
const c = require("../../infs")

module.exports = {
    name: "report",
    description: "🕵️‍♂️ | Reporte um usuario",
    type: 'CHAT_INPUT',
    options: [
    {
      name: 'usuario',
      description: `Pode ser menção ou ID`,
      type: "USER",
      required: true,
    },
    {
      name: 'motivo-provas',
      description: `Motivo/provas que o usuario esta quebrando as regras, pode ser colocado link da mensagem`,
      type: "STRING",
      required: true,
    },
    {
        name: `regra`,
        description: `Qual local da regra quebrada?`,
        type: "STRING",
        required: true,
        choices: [
          { name: "Regras do servidor da Bawer.", value: "Quebrou uma regra de um dos servidores da Bawer" },
          { name: "Regras da Bawer.", value: "Quebrou alguma regra da Bawer" } 
        ]
    },
    {
      name: `especifique`,
      description: `Qual foi a regra quebrada?`,
      type: "STRING",
      required: true,
    }
  ],
    run: async (client, interaction, args) => {
    //lest e ifs
      let stars = interaction.options.getString('regra')|| `Quero apenas ter minha economia resetada, meu ID: ${interaction.user.id}`;
      let user = interaction.options.getUser('usuario')
      let motivo = interaction.options.getString('motivo-provas')
      let esp = interaction.options.getString('especifique')

      if(stars == `Regras do servidor da Bawer.`) stars = `Quebrou uma regra de um dos servidores da Bawer`
      if(stars == `Regras da Bawer`) stars = `Quebrou alguma regra da Bawer`
      
      //embed que vai ser enviada no chat de denuncias
      const batata = new MessageEmbed()
      .setAuthor(`Nova denuncia ${interaction.user.tag}`, client.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
      .addFields(
      { name: 'Usuario', value: `${user}`,},
      { name: 'Onde a regra foi quebrada', value: `${stars}`},
      { name: 'Motivo', value: `${motivo}`},
      {name: 'Regra quebrada:', value: `${esp}`}
        )
      .setColor(`RED`)
      .setFooter(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Aceitar/Recusar')
        .addOptions([
               {
                    label: 'Inicio',
                    description: 'O inicio de tudo...',
                    emoji: '<:KAKAKAKAKAK:898260680300462140>',
                    value: 'painel_inicial',
               },
                {
                    label: 'Aceita',
                    description: 'O usuario foi punido e esta denuncia ja pode ser feichada.',
                    emoji: '✅',
                    value: 'acept',
                },
                {
                    label: 'Rejeitada',
                    description: 'O usuario não foi punido e esta denuncia ja pode ser feichada.',
                    emoji: '❌',
                    value: 'reject',
                },
            ])

        );
        //canais
      const canal = client.channels.cache.find(c => c.id === '913145806943563787')
      const canal2 = client.channels.cache.find(c => c.id === '902321128972881942')
      canal.send({ embeds: [batata], components: [painel]}).then(msg => {

            const filtro = (interaction) => 
              interaction.isSelectMenu()
        
            const coletor = msg.createMessageComponentCollector({
              filtro
            });
        
            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

        if (valor === 'painel_inicial') {

             msg.edit({embeds: [reviewEmbed], components: [painel] });
    
        };
        
        if (valor === 'acept') {

            let embed_2 = new MessageEmbed()
            .setColor(`GREEN`)
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setTitle("Denuncia aceita")
            .setThumbnail(c.thumb)
            .setDescription(`O usuario foi punido.`);

            msg.edit({embeds: [embed_2]});
         
         const yes = new MessageEmbed()
         .setColor("GREEN")
         .setTitle(`${user.tag}[${user.id}]`)
         .setDescription(`Denuncia aceita por: ${interaction.user.tag}, \n\`${stars}\` \n${esp}`)
         let cu = client.channels.cache.find(c => c.id === '902321340009316372')
         cu.send({embeds: [yes]}).then(m =>
          m.react("✅")
          )
        };
        if (valor === 'reject') {

            let embed_3 = new MessageEmbed()
            .setColor("RED")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))         
            .setTitle("Denuncia recusada")
            .setThumbnail(c.thumb)
            .setDescription(`O usuario não foi punido.`);

            msg.edit({embeds: [embed_3]});
         
         const no = new MessageEmbed()
         .setColor("RED")
         .setThumbnail(c.thumb)

        .setTitle(`${user.tag}[${user.id}]`)
         .setDescription(`Denuncia recusada por: ${interaction.user.tag}`)
         let cu = client.channels.cache.find(c => c.id === '902321340009316372')
         cu.send({embeds: [no]}).then(m =>
          m.react("❌")
          )
        };
        })
      })
      canal2.send(`Guild: \`${interaction.guild.name}[${interaction.guild.id}]\` Onde a regra foi quebrada \`${stars}\`, Motivo: \`${motivo}\` \n**Para mais informações:** <#913145806943563787>(Somente staffs)`).then(m => m.reply("Quando a denuncia for aceita/recusada ela ira aparecer em: <#902321340009316372>"),
      )
      return interaction.followUp({ content: `Você denunciou ${user}\`[${user.id}]\` Por: \`${motivo}\` Onde a regra foi quebrada: \`${stars}\` Regra: \`${esp}\` \nSua denuncia foi enviada em: https://discord.gg/NCPgtuEpaV `})
    },
};
//Final de um lindo sonho | Bawer ° Helper Developers
