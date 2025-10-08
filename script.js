// botão para iniciar a lista
const botao = document.getElementById("botao")
const topo = document.getElementById("topo")
const listaContainer = document.getElementById("listaContainer")

botao.addEventListener("click", () => {
  topo.style.display = "none"
  listaContainer.style.display = "block"
  const valor = input.value
  if (valor.trim() !== "") {
    const li = document.createElement("li")
    li.textContent = valor
    lista.appendChild(li)
  }
})

//Funcão adicionar tarefas
const input = document.getElementById("input")
const btnAdicionar = document.getElementById("adicionar")
const lista = document.getElementById("lista")

btnAdicionar.addEventListener("click", () => {
  const valor = input.value

  if (valor.trim() !== "") {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = valor
    const botaoConcluir = document.createElement("button")
    botaoConcluir.textContent = "✔️"
    botaoConcluir.classList.add("btn-concluir")
    botaoConcluir.addEventListener("click", () => {
      li.classList.toggle("concluida")
    })
    li.appendChild(span)
    li.appendChild(botaoConcluir)
    lista.appendChild(li)
  }
})

//botão para voltar para o inicio

const btnVoltar = document.getElementById("voltar")

btnVoltar.addEventListener("click", () => {
  listaContainer.style.display = "none"
  topo.style.display = "block"
})
