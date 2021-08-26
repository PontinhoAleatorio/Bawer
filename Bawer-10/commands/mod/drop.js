const Discord = require("discord.js");

  exports.run = async (client, message, args) => {
    let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");

    if (hasPerm === false) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("__ERROR__")
          .setColor("#b8fffa")
          .setDescription(
            "Você precisa de permissões `MANAGE_MESSAGES` ou de um cargo chamado `Droper Mod` para usar esse comando!"
          )
      );
    }

    const Embed = new Discord.MessageEmbed()
      .setColor("#b8fffa")
      .setDescription(
        "Mencione um canal ou digite ** pare ** para cancelar o drop!"
      );
    let mainMsg = await message.channel.send(Embed);

    let error = false;
    let msg;
    await message.channel
      .awaitMessages((m) => m.author.id === message.author.id, {
        max: 1,
        time: 20000,
        errors: ["time"],
      })
      .then((collected) => {
        msg = collected.first().content;
        collected.first().delete();
      })
      .catch((err) => {
        error = true;
        mainMsg.edit(
          new Discord.MessageEmbed()
            .setTitle("__ERROR__")
            .setColor("#FF0000")
            .setDescription(
              "Você não mencionou um canal a tempo ... Então, cancelei o drop!"
            )
        );
        return;
      });
    if (error) return;
    msg = msg.replace("<", "").replace("#", "").replace(">", "");
    if (msg === "pare" || msg === "cancelar") {
      return message.channel.send("drop cancelado!");
    }
    let salon = message.guild.channels.cache.find((c) => c.id === msg);
    if (!salon) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("__ERROR__")
          .setColor("#FF0000")
          .setDescription(
            "Não consigo encontrar esse canal. Tem certeza que eu posso velo?"
          )
      );
    }

    const MEmbed = new Discord.MessageEmbed()
      .setColor("#b8fffa")
      .setDescription(
        "Agora entre no prêmio drop ou digite ** pare ** para cancelar o sorteio!"
      );
    mainMsg.edit(MEmbed);

    error = false;
    let msg2;
    await message.channel
      .awaitMessages((m) => m.author.id === message.author.id, {
        max: 1,
        time: 20000,
        errors: ["time"],
      })
      .then((collected) => {
        msg2 = collected.first().content;
        collected.first().delete();
      })
      .catch((err) => {
        error = true;
        mainMsg.edit(
          new Discord.MessageEmbed()
            .setTitle("__ERROR__")
            .setColor("#FF0000")
            .setDescription(
              "Você não especificou um prêmio a tempo ... Então, cancelei o drop!"
            )
        );
        return;
      });
    if (error) return;
    if (msg2 === "pare" || msg2 === "cancelar") {
      return message.channel.send("Cancelando o drop...");
    }

    const wMEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("O drop vai começar em<#" + salon.id + "> em 5 segundos!");
    mainMsg.edit(wMEmbed);

    setTimeout(async () => {
      const DropEmbed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({
            format: "png",
            dynamic: "true",
          })
        )
        .setColor("#FF0000")
        .setDescription(
          `Primeiro a clicar em \`🎉 \` vai ganhar !\n\n\`🎉 \`・Prêmio: **${msg2}**\n\`⏲️\`・Duração máxima: **30** minutos`
        )
        .setFooter("Drop by " + message.author.tag)
        .setTimestamp();
      let m = await salon.send(DropEmbed);
      m.react("🎉");
      const filtre = (reaction, user) => {
        return ["🎉"].includes(reaction.emoji.name) && !user.bot;
      };
      m.awaitReactions(filtre, {
        max: 1,
        time: 1800000,
        errors: ["time"],
      })
        .then((collected) => {
          const reaction = collected.first();
          if (reaction.emoji.name === "🎉") {
            const WinEmbed = new Discord.MessageEmbed()
              .setAuthor(
                message.author.tag,
                message.author.displayAvatarURL({
                  format: "png",
                  dynamic: "true",
                })
              )
              .setColor("#FF0000")
              .setFooter("Drop de " + message.author.tag)
              .setTimestamp()
              .setDescription(
                `Parabéns <@${
                  reaction.users.cache.last().id
                }> como você foi o primeiro a reagir, você ganhou o Drop De __**${msg2}**__`
              );
            m.edit(`<@${reaction.users.cache.last().id}>`, WinEmbed);
          }
        })
        .catch((collected) => {
          console.log(collected);
        });
    }, 5000);
  }

module.exports.help = {
	aliases: ["dropar", "drp"],
	name: "drop"
}