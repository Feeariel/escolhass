let suaidade;
let aventura;
let acao;
let simulacao;
let título;
let corpo;
let jogos = {
  menor10:{
    acao: "Rayman Legends",
    aventura: "Super Mario Odyssey",
    simulacao: "Minecraft"
  },
  entre10e14:{
  acao: "Spider Man 2",
  aventura: "Crash Bandicoot",
  simulacao: "The Sims 4"
},
    entre14e16:{
      acao: "The last of us Pt2.",
      aventura: "Zelda: Breath of the Wild",
      simulacao: "Forza 5"
    },
  entre16e18:{
    acao: "Call of Duty: Warzone",
    aventura: "Fallout 4",
    simulacao: "Crusader Kings 3"
  },
  maior18:{
    acao: "RDR 2",
    aventura: "The Witcher 3",
    simulacao: "Microsoft Flight Simulator"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  suaidade = createInput("").position(650,585).addClass("hidden");
  createSpan("qual sua idade?").position(670,530).addClass("hidden");
  aventura = createCheckbox("gosta de jogos de aventura?").position(100,600).addClass("hidden");
   acao = createCheckbox("gosta de jogos de ação?").position(100,650).addClass("hidden");
   simulacao = createCheckbox("gosta de jogos de simulação?").position(100,700).addClass("hidden");
  título = "Nerko One"
  corpo = "Handjet";
  button = createButton("Aperta Meu Butão😘").position(width/2,520);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el) => el.removeClass("hidden"));
  button.hide();
  
}

function draw() {
  background("green");
  let idade = parseInt(suaidade.value());
  let checkacao = acao.checked();
  let checkaventura = aventura.checked();
  let checksimulacao = simulacao.checked();
  let jogo = "Insira suas preferências";
  if (suaidade.value() !== ""){
    jogo = mostrajogo(idade, checkacao, checkaventura, checksimulacao);
  }
  fill("lightgreen");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2);
  textFont(título);
  
   fill("white");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE JOGOS", width/2, 20);
  textFont(corpo);
}

function mostrajogo(idade, checkacao, checkaventura, checksimulacao){
  if (isNaN(idade)){
    return "Idade Inválida";
  } else
    if (idade < 5){
      return "Muito novin"
    } else
      if (idade > 120){
        return "Só o pó"
      }
  if (idade >= 5 && idade < 10){
    if (checkacao){
      return jogos["menor10"]["acao"];
    }
     if (checkaventura){
      return jogos["menor10"]["aventura"];
    }
     if (checksimulacao){
      return jogos["menor10"]["simulacao"];
    }
  }
  else if (idade >= 10 && idade < 14){
    if (checkacao){
      return jogos["entre10e14"]["acao"];
    }
     if (checkaventura){
      return jogos["entre10e14"]["aventura"];
    }
     if (checksimulacao){
      return jogos["entre10e14"]["simulacao"];
    }
  }
  else if (idade >= 14 && idade < 16){
    if (checkacao){
      return jogos["entre14e16"]["acao"];
    }
     if (checkaventura){
      return jogos["entre14e16"]["aventura"];
    }
     if (checksimulacao){
      return jogos["entre14e16"]["simulacao"];
    }
  }
  else if (idade >= 16 && idade < 18){
    if (checkacao){
      return jogos["entre16e18"]["acao"];
    }
     if (checkaventura){
      return jogos["entre16e18"]["aventura"];
    }
     if (checksimulacao){
      return jogos["entre16e18"]["simulacao"];
    }
  }
  else if (idade >= 18){
    if (checkacao){
      return jogos["maior18"]["acao"];
    }
     if (checkaventura){
      return jogos["maior18"]["aventura"];
    }
     if (checksimulacao){
      return jogos["maior18"]["simulacao"];
    }
  }
}