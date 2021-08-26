exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${message.author}, você não tem permissão para executar este comando. \nPermissio esperadon: \`MANAGE_MESSAGES\``);
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`${message.author}, você não tem permissão para executar este comando. \n Permissão esperada: \`MANAGE_CHANNELS\``);

  String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

  const time = args[0];
  if(!time) { return message.channel.send(`${message.author}, especifique uma hora.\nUsage: \`.modolento <tempo>\``); }
  if(isNaN(time)) { return message.channel.send(`${message.author}, **${time}** não é um número.\nUsage: \`.modolento <tempo>\``);  }

  message.channel.setRateLimitPerUser(time)
  message.channel.send(`Modo lento em ${message.channel} definido como \`${time.toHHMMSS()}\``);
}

 module.exports.help = {
    aliases: ["slowmod","mdl"],
    name: "modolento"
}