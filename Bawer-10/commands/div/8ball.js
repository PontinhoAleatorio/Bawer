exports.run = async (client, message, args) => {
  const Respostas = ["Oi", "Bom dia", "Boa noite", "Legal bom dia!", "Prefiro não magoar seus sentimentos", "Com certeza!", "Sim", "Não", "Vai arrumar o que fazer",]

  function randomResposta () {
    return Respostas[Math.floor(Math.random() * Respostas.length)];
  };

  message.channel.send(randomResposta())
};


module.exports.help = {
	aliases: ["ball"],
	name: "8ball"
}
