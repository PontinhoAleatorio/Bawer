exports.run = async (bot, message, args) => {

let respostas = [

  '–Chefe, quero um aumento. Saiba o senhor que tem três empresas atrás de mim. \n–Quais? \n– A de água, a de luz e a de telefone.',
  '–Quanto é o cafezinho? \n–2 reais. \n–E o açúcar? \n– O açúcar a gente não cobra. \n–Então pode me ver 2 quilos, por favor.',
  'Fiquei confusa depois da aula de inglês. \nSe “car” significa carro e “men” significa “homens”, então minha tia Carmen é um Transformer? :joy:',
  'Por que Napoleão era sempre chamado para as festas? \n\n\n\nPorque ele era Bom-na-party. :joy:',
  'Qual a diferença entre o lago e a padaria? \n\n\n\nNo lago, há sapinho. Na padaria, assa pão.',
  'O que a Lua disse ao Sol? \n\n\n\n–Nossa, você é tão grande e ainda não te deixam sair à noite!',
  'Sabe qual o nome do intestino do boi em espanhol? \n\n\n\nIntestino del gado.',
  'Acabei de tomar o maior susto da minha vida. Por momentos, pensei que tinha morrido e ido para o céu, pois tem um anjo na minha frente.',
  'Já imaginei como seria a nossa vida juntos muitas vezes, mas tenho certeza de que nem o mais louco dos sonhos iria se comparar com a realidade de ter você ao meu lado.',
  'Um dia me perguntaram:"O que você viu nela?". Eu respondi: "O que faltava em mim".',
  'Tem como não sorrir quando me lembro de você?',
  'Fui ver a previsão do tempo e li que vai rolar um clima entre nós.',
  'Eu te conheço? Nossa, desculpa… É que você parece muito com a minha próxima namorada/ o meu próximo namorado.',
  'Sabe o que combina com você? Eu!',
]

const BallNum = Math.floor(Math.random() * respostas.length); 

message.lineReply(respostas[BallNum]);

}
module.exports.help = {
	aliases: ["piadocas", "joke", "joy"],
	name: "piada"
}