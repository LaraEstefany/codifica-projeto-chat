var lista = document.getElementById("listaDeMensagens")
var chat = []

var chatArmazenado = localStorage.getItem("chat")
chatArmazenado = JSON.parse(chatArmazenado)

lista.append(chatArmazenado)

// for (contagem = 0; chatArmazenado[contagem] = ((chatArmazenado.length) - 1); contagem++) {
//     lista.append(chatArmazenado[contagem])
// }
//FAVOR IGNORAR ^^ MEU PC NÃO CONSEGUE RODAR O CÓDIGO PRA TESTAR

function manda1() {
    var campoMensagemUsuario1 = document.getElementById("mensagemUsuario1")
    var mensagemUsuario1 = document.getElementById("mensagemUsuario1").value

    var li = document.createElement("li")
    li.classList.add("mensagemUsuario1")
    li.innerText = mensagemUsuario1

    lista.append(li)

    chat.push(mensagemUsuario1) //chat.push(li)??

    chatJSON = JSON.stringify(chat)
    localStorage.setItem("chat", chatJSON)

    campoMensagemUsuario1.value = ""
}

function manda2() {
    var campoMensagemUsuario2 = document.getElementById("mensagemUsuario2")
    var mensagemUsuario2 = document.getElementById("mensagemUsuario2").value

    var li = document.createElement("li")
    li.classList.add("mensagemUsuario2")
    li.innerText = mensagemUsuario2

    lista.append(li)

    chat.push(mensagemUsuario2)

    chatJSON = JSON.stringify(chat)
    localStorage.setItem("chat", chatJSON)

    campoMensagemUsuario2.value = ""
}

// pegar direto do localStorage??