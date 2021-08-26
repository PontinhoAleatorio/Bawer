exports.run = async(client, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:Bawer_rage:842703847067353108> Você não tem permissão de `Gerenciar Mensagens`!<:Bawer_sad:842707834630176789>")

        const amount = args.join(" ");

        if(!amount) return message.lineReply(':x: | forneça uma quantidade de mensagens para eu excluir')

        if(amount > 100) return message.lineReply(` :x: |você não pode limpar mais de 100 mensagens de uma vez`)
          
        if(amount < 1) return message.lineReply(`:x: | você precisa deletar pelo menos uma mensagem`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(':white_check_mark: ** | Sucesso ao excluir mensagens!** caso umas mensagens tenham ficado não foi um erro, e sim as menssagem não podem ser apagadas por ja terem/tem 14 dias de mandadas').then(m => m.delete ({timeout: 16000}))

    }

module.exports.help = {
	aliases: ["limpar"],
	name: "clear"
}