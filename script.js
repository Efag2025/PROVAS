const questoes = [
    {
      enunciado: "01 – Qual dos seguintes NÃO é um tipo de falha de procedimento comum na Guarda Civil Municipal (GCM)?",
      alternativas: [
        "Falhas operacionais",
        "Falhas administrativas",
        "Falhas disciplinares",
        "Falhas de comunicação com o público",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "02 – Qual das seguintes opções descreve melhor uma falha de procedimento operacional?",
      alternativas: [
        "Erros na confecção de documentos e registros",
        "Descumprimento de normas internas e regulamentos",
        "Erros no uso de força, manuseio de armas ou condução de viatura",
        "Falhas na comunicação de ocorrências e informações",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "03 – De acordo com os Art. 24 e 24-A da Lei nº 9.503, compete aos órgãos de trânsito municipais:",
      alternativas: [
        "Erros na confecção de documentos e registros",
        "Executar a fiscalização em vias públicas e privadas de uso coletivo",
        "Autuar e aplicar penalidades previstas no CTB",
        "Excetuadas as de competência dos estados e DF, art. 22 §2º",
        "As competências do art. 22 §2º e art. 24 §4º podem ser delegadas via convênio"
      ]
    },
    {
      enunciado: "04 – Segundo o Art. 29 do CTB, assinale a alternativa correta quanto à prioridade e sinalização das viaturas:",
      alternativas: [
        "Apenas iluminação intermitente nos deslocamentos",
        "Apenas alarme sonoro em deslocamento e intermitente parado",
        "Alarme e iluminação em deslocamento; apenas intermitente parado",
        "Alarme e iluminação em deslocamento e estacionamento; intermitente nas paradas",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "05 – Segundo o MBFT, sobre autuação por solicitação de terceiros:",
      alternativas: [
        "Permitida se outro agente informar, com observação no AIT",
        "Permitida entre agentes em operação conjunta, com observação no AIT",
        "Proibida mesmo em operações conjuntas",
        "Permitida por cidadão, em até 3 dias, com observação no AIT",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "06 – Sobre autuação por estacionamento em local proibido com múltiplas infrações:",
      alternativas: [
        "Autuar em AITs distintos por até duas infrações",
        "Autuar duas infrações em um único AIT",
        "Autuar por somente uma infração",
        "Não autuar, pois há conflito de informações",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "07 – Para caracterizar infração do Art. 189 do CTB – preferência a viatura de urgência:",
      alternativas: [
        "Dispositivos acionados e serviço de urgência",
        "Apenas iluminação intermitente acionada e em serviço",
        "Iluminação e alarme acionados, sem urgência",
        "Somente estar em urgência basta",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "08 – A informação sobre proibição de rasuras em AIT físico consta em:",
      alternativas: [
        "Lei nº 13.022/2014",
        "Manual Brasileiro de Fiscalização de Trânsito",
        "Código de Trânsito Brasileiro – CTB",
        "Estatuto da Criança e do Adolescente",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "09 – Para não remover veículo irregular com condutor presente, deve-se constatar:",
      alternativas: [
        "Licenciamento em dia",
        "Condições de segurança para circular",
        "Condutor habilitado",
        "Todas as anteriores",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "10 – Os princípios que devem nortear a conduta do AAT são:",
      alternativas: [
        "Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência",
        "Legalidade, Parcialidade, Imoralidade, Publicidade e Eficiência",
        "Irresponsabilidade, Integridade, Confidencialidade, Incompetência, Preconceito",
        "Nenhuma das anteriores",
        "Todas alternativas"
      ]
    },
    {
      enunciado: "11 – É correto afirmar que o Agente de Trânsito só deve atuar:",
      alternativas: [
        "Uniformizado e com viatura caracterizada",
        "Mesmo sem uniforme ou escondido",
        "Indo ao serviço com veículo próprio",
        "Todas alternativas",
        "Nenhuma das anteriores"
      ]
    },
    {
      enunciado: "12 – Com base no conceito de cidadania, o papel do AAT é:",
      alternativas: [
        "Controle de fluxo, fiscalização, orientação, educação no trânsito",
        "Tratar o cidadão como inimigo",
        "Usar o poder para satisfação pessoal",
        "Usar poder somente em benefício próprio",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "13 – Qual a importância do estudo da motivação?",
      alternativas: [
        "Permite prever o futuro",
        "Ajuda a entender comportamentos",
        "Controla totalmente o comportamento",
        "É irrelevante para o comportamento",
        "Ajuda a manipular pessoas"
      ]
    },
    {
      enunciado: "14 – Qual opção caracteriza um comportamento motivado?",
      alternativas: [
        "Aleatório e sem direção",
        "Direcionado a um objetivo e persistente",
        "Impulsivo e irracional",
        "Sem intensidade",
        "Sem objetivo"
      ]
    },
    {
      enunciado: "15 – Quais os 3 tipos de recarga do armamento semiautomático?",
      alternativas: [
        "Executiva, administrativa e tática",
        "Administrativa, tática e urgente",
        "Administrativa, Tática e Emergencial",
        "Pane Seca, Chaminé e Dupla Alimentação",
        "Nenhuma das alternativas"
      ]
    },
    {
      enunciado: "16 – Assinale a alternativa incorreta sobre materiais de manutenção de armamento:",
      alternativas: [
        "Escovas, hastes, solvente e óleo lubrificante",
        "Escovas, desengripante, solvente e palha de aço fina",
        "Boresnake, hastes, solvente e óleo",
        "Escovas, flanela, solvente e óleo",
        "Pincel, boresnake, solvente e óleo"
      ]
    },
    {
      enunciado: "17 – Em relação à regra de segurança com arma:",
      alternativas: [
        "Dedo no gatilho ao sacar e coldrear",
        "Dedo estendido ao longo da arma",
        "Segurar pela ponta dos dedos",
        "Todas estão corretas",
        "Não existe essa regra"
      ]
    },
    {
      enunciado: "18 – A definição do poder de polícia é:",
      alternativas: [
        "Democracia",
        "Autoridade",
        "Poder de Polícia",
        "Poder da Polícia",
        "Poder Executivo"
      ]
    },
    {
      enunciado: "19 – A guarda municipal pode exercer funções da PM e da PC?",
      alternativas: [
        "Sim",
        "Não",
        "Sim com limites",
        "Sim com variações",
        "Nenhuma das anteriores"
      ]
    },
    {
      enunciado: "20 – Sobre limitação do poder de polícia no Direito Administrativo:",
      alternativas: [
        "Poder de Polícia",
        "Poder do Estado",
        "Poder de Polícia Administrativo",
        "Limites do Poder de Polícia",
        "Nenhuma das anteriores"
      ]
    }
  ];
  
  const tempoLimite = 120 * 60; // 120 minutos
  let tempoRestante = tempoLimite;
  let timerInterval;

  const firebaseConfig = {
    apiKey: "AIzaSyB3RvIuuEl6FnRkunH750XjBvC7Ye0t0zc",
    authDomain: "provas-efag.firebaseapp.com",
    databaseURL: "https://provas-efag-default-rtdb.firebaseio.com",
    projectId: "provas-efag",
    storageBucket: "provas-efag.appspot.com",
    messagingSenderId: "903504511283",
    appId: "1:903504511283:web:243704ea6c823b94c3fe46"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  function iniciarProva() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
  
    const nome = document.getElementById('nome').value.trim();
    const codigo = document.getElementById('codigoFuncional').value.trim();
    const pelotao = document.getElementById('pelotao').value.trim();
  
    if (!nome || !codigo || !pelotao) {
      alert("Por favor, preencha todos os campos antes de iniciar a prova.");
      return;
    }
  
    document.getElementById('form-identificacao').classList.add('hidden');
    document.getElementById('prova').classList.remove('hidden');
    iniciarTimer();
    renderizarQuestoes();
  }
  
  function iniciarTimer() {
    const timerEl = document.getElementById('timer');
    timerInterval = setInterval(() => {
      const minutos = Math.floor(tempoRestante / 60);
      const segundos = tempoRestante % 60;
      timerEl.textContent = `Tempo restante: ${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
      if (tempoRestante <= 0) {
        clearInterval(timerInterval);
        alert("Tempo esgotado! A prova será enviada automaticamente.");
        enviarProva();
      }
      tempoRestante--;
    }, 1000);
  }
  
  function renderizarQuestoes() {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    const form = document.getElementById('formProva');
    form.innerHTML = '';
  
    questoes.forEach((q, index) => {
      const div = document.createElement('div');
      div.className = 'pergunta';
  
      const p = document.createElement('p');
      p.textContent = q.enunciado;
      div.appendChild(p);
  
      q.alternativas.forEach((alt, i) => {
        const id = `q${index}_a${i}`;
        const label = document.createElement('label');
        label.setAttribute('for', id);
  
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `q${index}`;
        input.value = letras[i]; // salva letra
        input.id = id;
  
        label.appendChild(input);
        label.append(` ${letras[i]}) ${alt}`);
        div.appendChild(label);
        div.appendChild(document.createElement('br'));
      });
  
      form.appendChild(div);
    });
  }
  
  function enviarProva() {
    const respostas = {};
    for (let i = 0; i < questoes.length; i++) {
      const selecionada = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selecionada) {
        alert(`Você precisa responder todas as questões! Questão ${i + 1} está em branco.`);
        return;
      }
      const numeroQuestao = String(i + 1).padStart(2, '0'); // <- isso aqui organiza
      respostas[`q${numeroQuestao}`] = selecionada.value;
    }
  
    const dadosAluno = {
      nome: document.getElementById('nome').value,
      codigoFuncional: document.getElementById('codigoFuncional').value,
      re: document.getElementById('re').value,
      pelotao: document.getElementById('pelotao').value,
      respostas: respostas,
      dataHora: new Date().toISOString()
    };
  
    const id = dadosAluno.codigoFuncional + "_" + Date.now();
  
    database.ref("respostas/" + id).set(dadosAluno)
      .then(() => {
        clearInterval(timerInterval);
        const novaAba = window.open('', '_blank');
        novaAba.document.write(`
          <html>
            <head>
              <title>Prova Finalizada</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f6f8;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100vh;
                  margin: 0;
                }
                h1 {
                  color: green;
                  font-size: 28px;
                }
              </style>
            </head>
            <body>
              <h1>Prova finalizada com sucesso!</h1>
            </body>
          </html>
        `);
        novaAba.document.close();
        window.close();
      })
      .catch((error) => {
        alert("Erro ao enviar prova: " + error.message);
      });
  }
  