const client = require("../index");
const staff = require("../acess/staffs/BawerStaffsID/staffsID.json")
const Discord = require("discord.js")
client.on("interactionCreate", async (interaction) => {

    if (interaction.isCommand()) {

        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
       
 const { staffs } = require("../acess/staffs/BawerStaffsID/staffsID.json);
 if (cmd) {
  if (cmd.staffsOnly) {
 if (!staffs.includes(interaction.user.id)) {
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
        cmd.run(client, interaction, args);
    }

    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
        
    }
});
