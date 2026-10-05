// ================================
// 💗 EDITE SOMENTE AQUI
// ================================
// Coloque seus arquivos em assets/. Troque só os nomes abaixo.
// Use \n para uma quebra de linha e \n\n para separar parágrafos.
const CONFIG = {
  nome: "Meu amor,",
  gif: "meu-gif.gif",
  musica: "Mac Miller - Congratulations feat. Bilal (No Intro) - J.mp3",
  titulo: "Oi, meu amor... ♡",
  mensagemInicial:
    "Eu fiz isso porque talvez eu não saiba exatamente\ncomo você quer que eu seja...",
  textoCarta:
    "Eu não espero que você simplesmente me diga tudo de uma vez.\n\nSó quero que saiba que existe espaço para você falar.\n\nPode me dizer o que você gosta.\nO que não gosta.\nO que sente falta.\nO que gostaria que eu fizesse diferente.\n\nEu quero aprender você.\n\nE fazer a minha parte também: prestar atenção, refletir e cuidar das minhas atitudes. Você não precisa carregar isso sozinha.",
  assinatura: "Com amor, seu homem ♡",
  interface: {
    tituloPagina: "Uma cartinha para você ♡",
    marca: "para você",
    feito: "com todo meu carinho",
    intro: "UMA CARTINHA, DE CORAÇÃO ABERTO",
    bilhete: "é pra você!",
    comecar: "Quero te contar uma coisa",
    semPressa: "Sem pressa. No seu tempo.",
    rolar: "uma pequena história, de nós dois",
    pular: "Pular para a carta",
    musica: "Nossa música",
    pausarMusica: "Pausar música",
    musicaIndisponivel: "A música ainda não está disponível. ♡",
    gifDescricao:
      "Uma coelhinha de laço rosa abraçando um coração, feita com carinho.",
    coracao: "Espalhar coraçõezinhos",
    abrirCarta: "Toque para abrir sua cartinha",
    fecharCarta: "Guardar a cartinha",
    fechar: "Fechar mensagem",
    voltar: "Voltar para nossa cartinha",
    fim: "feito com carinho, para a gente.",
  },
  sincero: {
    etiqueta: "UM COMEÇO SINCERO",
    titulo: "Eu preciso ser\nsincero com você...",
    texto:
      "Talvez esse seja o ponto que mais quero que você entenda.\nEu sei que existem coisas em mim que você gostaria que fossem diferentes. Eu percebi isso.\n\nMas a verdade é que eu ainda não sei exatamente como você gostaria que eu fosse.",
    bilhete: "E eu não quero\nfingir que sei.",
    rodape: "quero ser de verdade, com você.",
  },
  entender: {
    etiqueta: "UM CORAÇÃO DISPOSTO",
    titulo: "Mas eu quero entender você.",
    texto:
      "Eu quero ouvir. Quero entender o que você sente e o que espera de mim.\nQuero descobrir o que faz você se sentir amada, desejada, respeitada e importante.\n\nEu não quero simplesmente tentar adivinhar.",
    cards: [
      {
        titulo: "Me explica",
        detalhe: "o que você sente",
        mensagem:
          "Você pode falar com sinceridade. Quero entender seus sentimentos sem transformar a conversa em uma defesa minha.",
        icone: "♡",
      },
      {
        titulo: "Me mostra",
        detalhe: "o que importa pra você",
        mensagem:
          "Quero prestar atenção nos detalhes que fazem diferença para você, até naqueles que eu deixei passar.",
        icone: "✧",
      },
      {
        titulo: "Me ensina",
        detalhe: "se você quiser dividir",
        mensagem:
          "Quero conhecer seu jeito de receber amor. E é minha responsabilidade refletir e transformar o que eu aprender em atitudes.",
        icone: "✿",
      },
      {
        titulo: "Eu vou ouvir",
        detalhe: "com o coração aberto",
        mensagem:
          "Sem interromper para justificar tudo. Sem exigir respostas agora. Seu tempo e seus limites importam para mim.",
        icone: "♡",
      },
    ],
    rodape: "Cada pedacinho seu importa. Toque nos cartões. ♡",
  },
  mudar: {
    etiqueta: "MAIS QUE PALAVRAS",
    titulo: "Eu quero mudar.",
    bilhete: "um pouquinho melhor, a cada dia",
    texto:
      "Não quero dizer que vou mudar só porque tenho medo de te perder.\n\nQuero mudar porque percebi que amar alguém também significa estar disposto a olhar para si mesmo e reconhecer aquilo que precisa melhorar.",
    destaque:
      "Eu talvez erre. Talvez eu demore para entender algumas coisas.\nMas eu quero tentar — e mostrar isso nas minhas atitudes.",
  },
  carta: {
    etiqueta: "UM ESPAÇO SÓ SEU",
    titulo: "Você não precisa me entregar\ntodas as respostas agora.",
    intro: "Tem uma coisa que eu queria deixar guardada aqui pra você.",
    destinatario: "para: meu amor ♡",
    rodape: "Aqui, seus sentimentos têm lugar.",
  },
  promessa: {
    etiqueta: "UMA PROMESSA POSSÍVEL",
    titulo: "Eu não prometo saber\nexatamente como fazer tudo.",
    intro: "Mas prometo uma coisa:",
    destaque: "se você me mostrar o caminho,\neu vou tentar caminhar com você.",
    texto:
      "Porque eu não quero simplesmente continuar sendo a mesma pessoa\ne esperar que tudo fique bem.\n\nEu quero ser alguém que você consiga olhar e pensar:",
    fecho: "“ele realmente está tentando.”",
  },
  final: {
    etiqueta: "DE CORAÇÃO ABERTO, PRA VOCÊ",
    intro:
      "Então eu não vou te perguntar:\n“Você ainda gosta de mim?”\n\nQuero te perguntar algo diferente:",
    pergunta:
      "Você ainda consegue me mostrar\ncomo eu posso ser melhor\npara você?",
    texto: "Porque se você conseguir...\neu quero tentar.",
    botao: "Eu quero ouvir você.",
    rodape: "Sem cobrança. Você pode falar quando e se quiser.",
    dialogEtiqueta: "ESSE ESPAÇO É SEU",
    mensagem: "Então me conta.\nEu estou ouvindo. ♡",
    dialogTexto:
      "No seu tempo, do seu jeito. Quando você quiser conversar, eu quero estar presente de verdade.",
  },
};
// ================================
// A experiência começa aqui. Não precisa editar abaixo. ♡
// ================================
const $ = (selector) => document.querySelector(selector);
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const configValue = (path) =>
  path.split(".").reduce((value, key) => value?.[key], CONFIG);
document.querySelectorAll("[data-text]").forEach((element) => {
  element.textContent = configValue(element.dataset.text) ?? "";
});
document.querySelectorAll("[data-label]").forEach((element) => {
  element.setAttribute("aria-label", configValue(element.dataset.label) ?? "");
});
document.title = CONFIG.interface.tituloPagina;

// All paths stay relative to this page, including on GitHub project Pages.
const assetPath = (filename) =>
  new URL(`assets/${filename}`, document.baseURI).href;
const heroImage = $("#hero-gif");
heroImage.alt = CONFIG.interface.gifDescricao;
const updateHeroImage = () => {
  heroImage.src = assetPath(
    reducedMotion.matches && CONFIG.gif === "meu-gif.gif"
      ? "coelhinha.svg"
      : CONFIG.gif,
  );
};
heroImage.addEventListener("error", () => {
  const fallback = assetPath("coelhinha.svg");
  if (heroImage.src !== fallback) heroImage.src = fallback;
});
updateHeroImage();
reducedMotion.addEventListener("change", updateHeroImage);

const music = $("#music");
const musicButton = $("#music-button");
music.src = assetPath(CONFIG.musica);
const syncMusic = () => {
  musicButton.setAttribute("aria-pressed", String(!music.paused));
  musicButton.querySelector("[data-text]").textContent = music.paused
    ? CONFIG.interface.musica
    : CONFIG.interface.pausarMusica;
};
musicButton.addEventListener("click", async () => {
  $("#music-status").textContent = "";
  if (!music.paused) {
    music.pause();
    return;
  }
  musicButton.disabled = true;
  try {
    await music.play();
  } catch {
    $("#music-status").textContent = CONFIG.interface.musicaIndisponivel;
  } finally {
    musicButton.disabled = false;
    syncMusic();
  }
});
music.addEventListener("play", syncMusic);
music.addEventListener("pause", syncMusic);
music.addEventListener("error", () => {
  $("#music-status").textContent = CONFIG.interface.musicaIndisponivel;
  syncMusic();
});

CONFIG.entender.cards.forEach((card, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "listening-card";
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", `card-message-${index}`);
  for (const [className, value] of [
    ["card-icon", card.icone],
    ["card-title", card.titulo],
    ["card-detail", card.detalhe],
    ["card-plus", "+"],
  ]) {
    const span = document.createElement("span");
    span.className = className;
    span.textContent = value;
    if (["card-icon", "card-plus"].includes(className))
      span.setAttribute("aria-hidden", "true");
    button.append(span);
  }
  const message = document.createElement("p");
  message.id = `card-message-${index}`;
  message.textContent = card.mensagem;
  message.hidden = true;
  button.addEventListener("click", () => {
    const opening = message.hidden;
    message.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
    wrapper.classList.toggle("is-open", opening);
    button.querySelector(".card-plus").textContent = opening ? "−" : "+";
    if (opening) burstAt(button, 6);
  });
  wrapper.append(button, message);
  $("#listening-cards").append(wrapper);
});

// The hidden attribute removes the whole letter from layout and accessibility
// when closed. Long custom letters stay in normal flow when opened.
const letterToggle = $("#letter-toggle");
$("#letter-toggle-text").textContent = CONFIG.interface.abrirCarta;
function toggleLetter() {
  const opening = letterToggle.getAttribute("aria-expanded") !== "true";
  letterToggle.setAttribute("aria-expanded", String(opening));
  $(".envelope-shell").setAttribute("aria-expanded", String(opening));
  $(".envelope-shell").setAttribute(
    "aria-label",
    opening ? CONFIG.interface.fecharCarta : CONFIG.interface.abrirCarta,
  );
  $("#letter-paper").hidden = !opening;
  $(".envelope-scene").classList.toggle("is-open", opening);
  $("#letter-toggle-text").textContent = opening
    ? CONFIG.interface.fecharCarta
    : CONFIG.interface.abrirCarta;
  if (opening) burstAt($(".envelope-scene"), 14);
}
letterToggle.addEventListener("click", toggleLetter);
$(".envelope-shell").addEventListener("click", toggleLetter);

function burstAt(element, count) {
  const rect = element.getBoundingClientRect();
  burst(
    rect.left + rect.width / 2,
    rect.top + Math.min(rect.height / 2, 160),
    count,
  );
}
function burst(x, y, count, fullscreen = false) {
  if (reducedMotion.matches) return;
  const layer = $("#effects");
  // Bound DOM work even if someone taps repeatedly.
  if (layer.childElementCount > 70) return;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = fullscreen
      ? "effect-heart celebration-heart"
      : "effect-heart";
    heart.textContent = i % 3 ? "♡" : "♥";
    heart.style.left = `${fullscreen ? Math.random() * innerWidth : x}px`;
    heart.style.top = `${fullscreen ? innerHeight + 30 : y}px`;
    heart.style.setProperty("--dx", `${(Math.random() - 0.5) * 220}px`);
    heart.style.setProperty("--dy", `${-60 - Math.random() * 130}px`);
    heart.style.setProperty("--turn", `${(Math.random() - 0.5) * 80}deg`);
    heart.style.setProperty(
      "--delay",
      `${fullscreen ? Math.random() * 0.8 : 0}s`,
    );
    layer.append(heart);
    setTimeout(() => heart.remove(), fullscreen ? 4200 : 1600);
  }
}
$(".beating-heart").addEventListener("click", (event) =>
  burstAt(event.currentTarget, 14),
);
const dialog = $("#listening-dialog");
$("#listen-button").addEventListener("click", () => {
  dialog.showModal();
  document.body.classList.add("dialog-open");
  // Placing effects inside the dialog keeps them above the modal backdrop.
  dialog.append($("#effects"));
  burst(0, 0, 42, true);
});
dialog
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", () => dialog.close()));
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  document.body.append($("#effects"));
});
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom)
  )
    dialog.close();
});

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((section) => {
    section.classList.add("will-reveal");
    observer.observe(section);
  });
}
const ambient = $(".ambient");
["♡", "✧", "·", "✿", "♡", "✦", "·", "♡", "✧", "·"].forEach((symbol, index) => {
  const particle = document.createElement("span");
  particle.textContent = symbol;
  particle.style.setProperty("--left", `${5 + index * 10}%`);
  particle.style.setProperty("--duration", `${19 + index * 2}s`);
  particle.style.setProperty("--delay", `${index * -3}s`);
  ambient.append(particle);
});
let scrollQueued = false;
function updateProgress() {
  const range = document.documentElement.scrollHeight - innerHeight;
  $(".reading-progress span").style.transform =
    `scaleX(${range > 0 ? scrollY / range : 0})`;
  scrollQueued = false;
}
addEventListener(
  "scroll",
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(updateProgress);
    }
  },
  { passive: true },
);
addEventListener("resize", updateProgress);
updateProgress();
