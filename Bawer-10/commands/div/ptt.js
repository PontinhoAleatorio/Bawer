const { MessageEmbed } = require('discord.js')


module.exports = {
    name: 'rps',
    description: 'jogar pedra papel e tesolra com outra pessoa',
}



    module.exports.run = async(bot, message, args) => {
        let correctArgs = [
            'pedra',
            'papel',
            'tesoura'
        ]
        
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        let challenger = message.author

        if(!target) return message.channel.send('ERROR: Mencione alguém.')
        if(target.user.bot) return message.channel.send('Bots poderiam facilmente manipular e fazer com que eles ganhacem! Então você so pode jogar com usuarios!')

        let filter = m => m.author.id === target.id


        message.channel.send(`${target}, você quer ir contra ${message.author} em ppt? \n Responder com **s** ou **n**`)
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000,
            errors: ['time'], 
        }).then(async message => {
            message = message.first()

            if(message.content.toLowerCase() === 's') {
                const authorChannel = await message.guild.channels.create(`${challenger.username}-rps`.toLowerCase(), {
                    type: 'text', 
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: challenger.id
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: message.guild.id
                        },
                    ]
                    })
                    const targetChannel = await message.guild.channels.create(`${target.user.username}-rps`.toLowerCase(), {
                        type: 'text', 
                        permissionOverwrites: [
                            {
                                deny: 'VIEW_CHANNEL',
                                id: message.guild.id
                            },
                            {
                                allow: 'VIEW_CHANNEL',
                                id: message.author.id
                            }
                        ]
                        })
                        message.channel.send(`Seus canais foram criados! Vai dar uma olhada!\n${message.author}: Vá para ${targetChannel}\n${challenger}: Vá para ${authorChannel}`)
                        
                        let goFirstembed = new MessageEmbed()
                        .setAuthor(challenger.username, challenger.displayAvatarURL({ dynamic: true }))
                        .setTitle('Você é o primeiro!') 
                        .setDescription('Escolha ** pedra, papel ou tesoura ** para que a próxima pessoa possa ir.')
                        .setColor('RANDOM')

                        let waitEmbed = new MessageEmbed() 
                        .setAuthor(message.member.displayName, message.member.user.displayAvatarURL({ dynamic: true }))
                        .setTitle('Esperando pelo segundo usuário...')
                        .setDescription('Por favor aguarde enquanto o outro jogador escolhe o que jogar.')
                        .setColor('RANDOM')

                        authorChannel.send(goFirstembed)
                        targetChannel.send(waitEmbed)

                        let filter = m => m.author.id === challenger.id

                        authorChannel.awaitMessages(filter, {
                            max: 1,
                            time: 30000,
                            errors: ['time']
                        }).then(message => {
                            message = message.first()
                            
                            if(correctArgs.includes(message.content.toLowerCase())) {
                                var challengerReponse = message.content
                                message.channel.send('OK! Agora esperando o outro usuário...')
                                
                                
                                let goFirstembed = new MessageEmbed()
                                .setAuthor(target.displayName, target.user.displayAvatarURL({ dynamic: true }))
                                .setTitle('Sua vez! O outro jogador escolheu o que quer!') 
                                .setDescription('Escolher **pedra, papel ou tesoura**.')
                                .setColor('RANDOM')
                                targetChannel.send(goFirstembed)


                                let filter2 = m => m.author.id === target.id

                                targetChannel.awaitMessages(filter2, {
                                    max: 1,
                                    time: 30000,
                                    errors: ['time'],

                                }).then(message => {
                                    message = message.first()
                                    if(correctArgs.includes(message.content.toLowerCase())) {
                                        var targetReponse = message.content
                                        message.channel.send('OK! Obtendo resultados...').then(message => message.delete({timeout: 5000}))

                                        let resultEmbed = new MessageEmbed()
                                        .setTitle('Aqui estão os resultados!')
                                        .addField(`${challenger.username}'s escolha:`, `**${challengerReponse}**`, true)
                                        .addField(`${target.user.username}'s escolha:`, `**${targetReponse}**`, true )
                                        .setColor('RANDOM')

                                        if(challengerReponse.toLowerCase() === 'pedra' && targetReponse.toLowerCase() === 'tesoura'){
                                            resultEmbed.addField(`Resultados:`, `**${challenger.username} ganhou!**`, true)
                                        } else if(challengerReponse.toLowerCase() === 'tesoura' && targetReponse.toLowerCase() === 'papel') {
                                            resultEmbed.addField(`Resultados:`, `**${challenger.username} ganhou!**`, true)
                                        } else if(challengerReponse.toLowerCase() === 'papel' && targetReponse.toLowerCase() === 'pedra') {
                                            resultEmbed.addField(`Resultados:`, `**${challenger.username} ganhou!**`, true )
                                        } else if(challengerReponse.toLowerCase() === 'tesoura' && targetReponse.toLowerCase() === 'pedra') {
                                            resultEmbed.addField(`Resultados:`, `**${target.user.username} ganhou!**`, true)
                                        } else if(challengerReponse.toLowerCase() === 'papel' && targetReponse.toLowerCase() === 'tesoura') {
                                            resultEmbed.addField(`Resultados:`, `**${target.user.username} ganhou!**`, true)
                                        } else if(challengerReponse.toLowerCase() === 'pedra' && targetReponse.toLowerCase() === 'papel'){
                                            resultEmbed.addField(`Resultados:`, `**${target.user.username} ganhou!**`, true)
                                        } else if(challengerReponse.toLowerCase() === targetReponse.toLowerCase()) {
                                            resultEmbed.addField(`Resultados:`, `**Laço; Ninguém vence!**`, true)
                                        }
 
                                        setTimeout(() => {
                                            targetChannel.send(resultEmbed)
                                            authorChannel.send(resultEmbed)

                                        }, 5000)

                                        setTimeout(() => {
                                            let gg = 'GG pessoal. Finalizando o jogo..'
                                            targetChannel.send(gg)
                                            authorChannel.send(gg)
                                        }, 15000)

                                        setTimeout(() => {
                                            targetChannel.delete()
                                            authorChannel.delete()
                                        },20000)
                                    } else {
                                        let errorMessage = 'O jogo terminou devido à escolha incorreta.'

                                        targetChannel.send(errorMessage)
                                        authorChannel.send(errorMessage)
            
                                        setTimeout(() => {
                                            targetChannel.delete()
                                            authorChannel.delete()
                                        }, 5000)
                                    }


                                }).catch(collected => {
                                    let errorMessage = 'O jogo terminou devido à inatividade. GG.'
        
                                    targetChannel.send(errorMessage)
                                    authorChannel.send(errorMessage)
        
                                    setTimeout(() => {
                                        targetChannel.delete()
                                        authorChannel.delete()
                                    }, 5000)
                                })
                            } else {
                            let errorMessage = 'O jogo terminou devido à escolha incorreta.'

                            targetChannel.send(errorMessage)
                            authorChannel.send(errorMessage)

                            setTimeout(() => {
                                targetChannel.delete()
                                authorChannel.delete()
                            }, 5000)
                            }

                            
                        }).catch(collected => {
                            let errorMessage = 'O jogo terminou devido à inatividade. GG.'

                            targetChannel.send(errorMessage)
                            authorChannel.send(errorMessage)

                            setTimeout(() => {
                                targetChannel.delete()
                                authorChannel.delete()
                            }, 5000)
                        })
        

            } else if(message.content.toLowerCase() === 'n') {
                message.channel.send(`${message.author} recusou o desafio.`)
            } else {
                message.channel.send('Resposta inválida.')
            }
        }).catch(collected => {
            message.channel.send('O alvo não respondeu a tempo. Cancelando.')

        })
        

    }

  module.exports.help = {
	aliases: ["ppt", "jogar", "pedrapapeltesoura"],
	name: "ptt"
}