const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "No contexto do CSS3, assinale o script que define corretamente a formatação para todos os elementos h1 de um documento. ",
        options: [") .h1 {  color: white;  text-align: center; }", "h1 {  color= white,  background= yellow }", "#h1 {  background: yellow,  family-font: georgia }", 
        "h1 {  background-color: yellow;  font-family: verdana; } ", "$h1 {  text-align= center;  background-color= yellow }" ],
        answer: "h1 {  background-color: yellow;  font-family: verdana; } ",
      }
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
  {
    category: "React",
    questions: [
      {
      question: 
      "Em React.Js, como são chamadas as entradas que são passadas na criação dos componentes React, usando uma convenção de nomenclatura semelhante aos atributos de tag HTML. ",
      options: ["Refs", "Props", "State", "Keys", "Elements" ],
      answer: "Props" ,
      tip: "Elements"
      },
      {
        question:
        "De acordo com o ciclo de vida de um componente no React.js , assinale a alternativa em que todos os métodos são considerados como Updating : ",
        options: ["getState(), forceUpdate() e render() ", "constructor() e componentWillMount()", "componentDidMount() e componentWillUnmount()", 
        "componentWillReceiveProps(), static getDerivedStateFromProps() e render()", "componentDidCatch(), constructor() e render()" ],
        answer: "constructor() e componentWillMount()",
        tip: "componentWillReceiveProps(), static getDerivedStateFromProps() e render()"
      },
      {
        question: "O React é uma biblioteca JavaScript de código aberto e, atualmente, é uma das ferramentas mais populares entre os desenvolvedores web. São características do React ser uma biblioteca ",
        options: ["declarativa, que não gerencia seu próprio virtual DOM e não permite a criação de aplicativos móveis.", "imperativa, que não gerencia seu próprio virtual DOM e não dá suporte a componentes reutilizáveis.",
        "declarativa, que gerencia seu próprio virtual DOM e permite a criação de aplicativos móveis.", "mperativa, que gerencia seu próprio virtual DOM e dá suporte a componentes reutilizáveis."],
        answer: "declarativa, que gerencia seu próprio virtual DOM e permite a criação de aplicativos móveis."
      },
      {
        question: "Sobre o desenvolvimento de aplicações móveis, assinale a alternativa correta. ",
        options: ["O React.js é um framework de código aberto usado para desenvolver aplicativos para Android, iOS e UWP.", "Ionic é um SDK de software livre completo para desenvolvimento de aplicativos móveis híbridos escrito em Java. ",
      "Flutter é um SDK de código aberto criado pelo Google para o desenvolvimento de aplicativos para dispositivos móveis utilizado para desenvolver aplicativos para Android e iOS. ", "Swift é um framework de desenvolvimento de aplicativos móveis lançado como código aberto com o nome de Apache Cordova.",
    "O Vue Native é um framework para criar aplicativos móveis nativos cross-platform usando a linguagem de programação Dart. "],
        answer: "Flutter é um SDK de código aberto criado pelo Google para o desenvolvimento de aplicativos para dispositivos móveis utilizado para desenvolver aplicativos para Android e iOS."
      }
    ]
  },
  {
    category: "SQL",
    questions: [
      {
        question: "USE MASTER GO IF EXISTS(SELECT * FROM sysdatabases WHERE name='Cesgranrio') DROP DATABASE Cesgranrio GO No SQL Server 2000, que efeito tem o código acima? ",
        options: ["Remoção da tabela Cesgranrio de todos os bancos de dados.","Remoção do banco de dados Cesgranrio, se existir.", "Priorização do acesso ao banco de dados Cesgranrio.",
       "Seleção de campos da tabela Cesgranrio, se existir.", "Inclusão de campos na tabela sysdatabases."],
       answer: "Remoção do banco de dados Cesgranrio, se existir.",
       tip: "Seleção de campos da tabela Cesgranrio, se existir."
      },
      {
        question: "Para recuperar linhas de um banco de dados SQL Server 2005, pode-se utilizar o comando SQL: ",
        options: ["INSERT", "READ", "CONSULT", "SELECT", "ALTER"],
        answer: "SELECT",
        tip: "INSERT"
      },
      {
        question: "As pseudo colunas SQL: CURRVAL, NIVEL, NEXTVAL, ROWID, e ROWNUM são permitidas em PL/SQL somente no comando",
        options: ["delete", "update", "select", "insert", "de teste condicional"],
        answer: "select",
        tip: "delete"
      }, 
      {
        question: "A estrutura básica de um bloco PL/SQL é composta por quatro seções: DECLARE, BEGIN, EXCEPTION e END. As seções DECLARE, BEGIN e END são obrigatórias.",
        options: ["certo", "errado", "talvez"],
        answer: "certo"
      },
      {
        question: "Os comandos DTL são responsáveis por gerenciar diferentes transações ocorridas dentro de um Banco de dados. Ele é dividido em três comandos, quais sejam:",
        options: ["BEGIN TRAN, COMMIT e ROLLBACK.", "BEGIN DEVTRAN, DEFINE e BACK.", "BEGIN LIBRARY, FIND e ROLLBACK.", "BEGIN, DEFINE LIBRARY e SCROLL.",
      "TRAN, FIND e FINISH."],
      answer: "BEGIN TRAN, COMMIT e ROLLBACK."
      }
    ]
   
  },
  {
    category: "Linux",
    questions: [
      {
        question: "No console do sistema operacional Linux, alguns comandos permitem executar operações com arquivos e diretórios do disco. Os comandos utilizados para criar, acessar e remover um diretório vazio são, respectivamente: ",
        options: ["pwd, mv e rm.", "md, ls e rm.", "mkdir, cd e rmdir.", "cdir, lsdir e erase. ", "md, cd e rd. "],
        answer: "mkdir, cd e rmdir."
      },
      {
        question: "A estrutura do núcleo do Linux contém os componentes: ",
        options: ["E/S, Gerenciador de periféricos, Gerenciador de programa.", "Gerenciador de TCP/IP, Gerenciador de memória virtual, Gerenciador de processo. ", "E/S, Gerenciador de memória, Gerenciador de processo.", 
        "E/S, Gerenciador de sinais, Gerenciador de escalonamento de CPU.", "Gerenciador de sistema operacional, Gerenciador de memória principal, Gerenciador de processador."],
        answer:"E/S, Gerenciador de memória, Gerenciador de processo."
      },
      {
        question: "Distribuição Linux é um sistema operacional Unix-like, incluindo o kernel Linux e outros softwares de aplicação, formando um conjunto. Distribuições (ou “distros”) podem ser mantidas por organizações comerciais ou por projetos comunitários. São exemplos de distribuições Linux: ",
        options:["Ubuntu, Kuruming.", "Mandritt, SUSE. ", "Red Hat, Knopfull.", "Gentuk, Ubuntu.", "Debian, Fedora. " ],
        answer:"Debian, Fedora. "
      }
    ]
   
  },
];

export default data;
