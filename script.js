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

const input = document.getElementById("input")
const btnAdicionar = document.getElementById("adicionar")
const lista = document.getElementById("lista")

btnAdicionar.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li")
    li.textContent = input.value
    lista.appendChild(li)
    input.value = ""
  }
})
