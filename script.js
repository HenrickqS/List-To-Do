// -------------------
// Toggle Dark / Light
// -------------------
const toggleTema = document.getElementById("toggleTema")
toggleTema.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark")
    document.body.classList.add("light")
    toggleTema.textContent = "🌙"
  } else {
    document.body.classList.remove("light")
    document.body.classList.add("dark")
    toggleTema.textContent = "☀️"
  }
})

// -------------------
// Iniciar Lista
// -------------------
const botao = document.getElementById("botao")
const topo = document.getElementById("topo")
const listaContainer = document.getElementById("listaContainer")

botao.addEventListener("click", () => {
  topo.style.display = "none"
  listaContainer.style.display = "block"
})

// -------------------
// Adicionar tarefas
// -------------------
const input = document.getElementById("input")
const btnAdicionar = document.getElementById("adicionar")
const lista = document.getElementById("lista")
let tarefasBloqueadas = false

btnAdicionar.addEventListener("click", () => {
  if (tarefasBloqueadas) return
  const valor = input.value.trim()
  if (!valor) return

  const li = document.createElement("li")
  const span = document.createElement("span")
  span.textContent = valor

  const botaoConcluir = document.createElement("button")
  botaoConcluir.textContent = "✔️"
  botaoConcluir.classList.add("btn-concluir")

  botaoConcluir.addEventListener("click", () => {
    li.classList.toggle("concluida")
    atualizarBarra()
    checarRecompensa()
  })

  li.appendChild(span)
  li.appendChild(botaoConcluir)
  lista.appendChild(li)
  input.value = ""
})

// -------------------
// Timer
// -------------------
const iniciarTimerBtn = document.getElementById("iniciarTimer")
const tempoInput = document.getElementById("tempoInput")
const timerDisplay = document.getElementById("timerDisplay")
const progresso = document.getElementById("barraProgresso")

let intervalo
let tempoRestante = 0

function atualizarBarra() {
  const total = lista.children.length
  if (total === 0) return
  const concluido = lista.querySelectorAll(".concluida").length
  const porcentagem = (concluido / total) * 100
  progresso.style.width = `${porcentagem}%`
}

function checarRecompensa() {
  const total = lista.children.length
  const concluido = lista.querySelectorAll(".concluida").length
  if (total > 0 && total === concluido) {
    clearInterval(intervalo)
    alert("🎉 Parabéns! Você concluiu todas as tarefas!")
  }
}

iniciarTimerBtn.addEventListener("click", () => {
  const horas = parseFloat(tempoInput.value)
  if (!horas || horas <= 0) {
    alert("Digite um tempo válido em horas!")
    return
  }

  // Bloqueia edição de tarefas
  tarefasBloqueadas = true
  input.disabled = true
  btnAdicionar.disabled = true

  clearInterval(intervalo)
  tempoRestante = Math.floor(horas * 3600) // segundos

  intervalo = setInterval(() => {
    const h = Math.floor(tempoRestante / 3600)
    const m = Math.floor((tempoRestante % 3600) / 60)
    const s = tempoRestante % 60

    timerDisplay.textContent = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`

    if (tempoRestante <= 0) {
      clearInterval(intervalo)
      alert("⏰ Tempo esgotado!")
    }

    tempoRestante--
  }, 1000)
})

// -------------------
// Botão Voltar
// -------------------
const btnVoltar = document.getElementById("voltar")
btnVoltar.addEventListener("click", () => {
  listaContainer.style.display = "none"
  topo.style.display = "block"
  clearInterval(intervalo)
  tarefasBloqueadas = false
  input.disabled = false
  btnAdicionar.disabled = false
})
