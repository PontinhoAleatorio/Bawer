const { AntiAltClient } = require("discord-antialts");

const c = new AntiAltClient({
  debug: false,
  altDays: 7,
});

client.on("guildMemberAdd", (member) => {
  c.init(member, {
    action: "ban",
    whitelistUsers: ["805178558619058246", "902962740677730316"],
  });
});

c.on("altAction", (member, date, action) => {
  const embed = new MessageEmbed()
    .setTitle("Conta Alt Encontrada.")
    .setColor("RED")
    .setFooter("Anti Alt")
    .setTimestamp().setDescription(`
    **Servidor**: ${member.guild.name}(${member.guild.id})
**Nome**: ${member.user} (${member.user.username})
**ID**: ${member.user.id}
**Conta criada**: ${date.createdAt} dias atrás
**Conta criada em**: ${date.createdAtDate}
**Entrou na contagem de**: ${member.guild.memberCount}
**Data de entrada**: ${date.joinAt}
`);
  client.channels.cache.get("914238445965156393").send({ embeds: [embed] });
});
