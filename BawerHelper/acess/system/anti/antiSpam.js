const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
  warnThreshold: 4,
  muteThreshold: 11,
  kickThreshold: 7,
  banThreshold: 5,
  maxInterval: 2000,
  warnMessage: "{@user}, Pare de fazer spam, vai arrumar algo pra fazer!",
  kickMessage: "**{user_tag}** foi expulso por fazer spam",
  muteMessage: "**{user_tag}** Mutado por fazer spam.",
  banMessage: "**{user_tag}** Foi banido por fazer spam.",
  maxDuplicatesWarning: 5,
  maxDuplicatesKick: 10,
  maxDuplicatesBan: 5,
  maxDuplicatesMute: 6,
  ignoredPermissions: ["ADMINISTRATOR"],
  ignoreBots: true,
  verbose: true,
  ignoredMembers: [],
  muteRoleName: "Muted",
  timeMute: 1,
  removeMessages: true,
  modLogsEnabled: true,
  modLogsChannelName: "bawer-helper-spam",
  modLogsMode: "embed",
});

client.on("messageCreate", (message) => antiSpam.message(message));
//Esta configurado para banir.
