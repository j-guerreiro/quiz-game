//colecao de objetos das perguntas do quiz
const perguntas_quiz = [
  
  //0
  { pergunta: "Quais são as cores da bandeira do G.R.E.S. Estação Primeira de Mangueira?",
  A:"Vermelho e Branco",
  B:"Azul e Branco",
  C:"Verde e Rosa",
  D:"Verde e Amarelo", 
  alternativa: "C", 
  resposta: "Verde e Rosa"},

  //1
  { pergunta: "Quem criou a primeira marchinha de Carnaval no Brasil?",
  A:"Nelson Sargento",
  B:"Cartola",
  C:"Carmem Miranda",
  D:"Chiquinha Gonzaga", 
  alternativa: "D", 
  resposta: "Chiquinha Gonzaga"},

  //2
  { pergunta: "Em qual estado brasileiro surgiu o frevo?",
  A:"Rio Grande do Sul",
  B:"Pernambuco",
  C:"Roraima",
  D:"Espírito Santo", 
  alternativa: "B", 
  resposta: "Pernambuco"},

  //3
  { pergunta: "Qual o significado da palavra Carnaval?",
  A:"Afastar-se da carne",
  B:"Festa da Carne",
  C:"Festa de Dionísio",
  D:"Festa da Folia", 
  alternativa: "A", 
  resposta: "Afastar-se da carne"},

  //4
  { pergunta: "Em que ano surgiu o trio elétrico no Carnaval de Salvador?",
  A:"1963",
  B:"1950",
  C:"1947",
  D:"1970", 
  alternativa: "B", 
  resposta: "1950"},

];

//funcao que altera a pergunta ao carregar a pagina
const carregarQuestao = () => {

  const inteiroAleatorio = getInteiroAleatorio();

  const textoPergunta = document.getElementById("question-text");
  textoPergunta.textContent = perguntas_quiz[ inteiroAleatorio ].pergunta;
}

//funcao que gera valores aleatorios para selecionar questoes
const getInteiroAleatorio = () => {
  
  const max = perguntas_quiz.length;
  valor = Math.random() * max;
  valor = valor.toFixed();
  return valor;
}

window.addEventListener("load", carregarQuestao, false);