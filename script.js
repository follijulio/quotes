const quotes = [
  {
    text: "A vida não examinada não vale a pena ser vivida.",
    author: "Sócrates",
  },
  {
    text: "A única coisa que sei é que nada sei.",
    author: "Sócrates",
  },
  {
    text: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
    author: "Albert Einstein",
  },
  {
    text: "O homem é a medida de todas as coisas.",
    author: "Protágoras",
  },
  {
    text: "A felicidade é a finalidade da vida humana.",
    author: "Aristóteles",
  },
  {
    text: "Penso, logo existo.",
    author: "René Descartes",
  },
  {
    text: "O que não me mata me fortalece.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "O homem nasce livre, mas está aprisionado em todos os lugares.",
    author: "Jean-Jacques Rousseau",
  },
  {
    text: "Onde quer que vás, lá estás tu.",
    author: "Confúcio",
  },
  {
    text: "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    author: "Sócrates",
  },
  {
    text: "O que somos é consequência do que pensamos.",
    author: "Buda",
  },
  {
    text: "A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos.",
    author: "John Lennon",
  },
  {
    text: "Conhece-te a ti mesmo.",
    author: "Inscrição no Templo de Apolo em Delfos",
  },
  {
    text: "A simplicidade é o último grau de sofisticação.",
    author: "Leonardo da Vinci",
  },
  {
    text: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
    author: "Nelson Mandela",
  },
  {
    text: "A verdade nunca é pura e raramente é simples.",
    author: "Oscar Wilde",
  },
  {
    text: "Viver é a coisa mais rara do mundo. A maioria das pessoas apenas existe.",
    author: "Oscar Wilde",
  },
  {
    text: "O homem é a medida de todas as coisas.",
    author: "Protágoras",
  },
  {
    text: "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
    author: "Albert Einstein",
  },
  {
    text: "O que não nos mata nos torna mais fortes.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "Não podemos viver melhor sem nos esforçarmos para nos tornarmos melhores.",
    author: "Sócrates",
  },
];

function quote() {
  let randon_index = parseInt(Math.random() * 20);

  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");

  author.textContent = quotes[randon_index].author;
  quote.textContent = '"' + quotes[randon_index].text + '"';
}

function newQuote() {
  quote()
}
function main() {
  quote();
}
main();