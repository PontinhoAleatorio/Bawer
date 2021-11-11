module.exports = {
    name: "end",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '794400726315040778') {
            return message.channel.send(`Você não pode usar este comando! :c`)
        }
        await message.channel.send(`Hora de mimir! \nZzz`)
        process.exit();
    }
}
