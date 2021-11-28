const { Client } = require("discord.js");
const express = require('express')

const client = new Client({
    intents: 32767,
});
module.exports = client;


client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.js");



require("./handler")(client);

client.login('TOKEN_HELPER');
