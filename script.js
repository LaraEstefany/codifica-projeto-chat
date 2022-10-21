chat = []

var lista = document.getElementById("listaDeMensagens")

function manda1() {
    var campoMensagemUsuario1 = document.getElementById("mensagemUsuario1")
    var mensagemUsuario1 = document.getElementById("mensagemUsuario1").value

    chat.push(mensagemUsuario1)

    var li = document.createElement("li")
    li.classList.add("mensagemUsuario1")
    li.innerText = mensagemUsuario1
    lista.append(li)

    campoMensagemUsuario1.value = ""
}

function manda2() {
    var campoMensagemUsuario2 = document.getElementById("mensagemUsuario2")
    var mensagemUsuario2 = document.getElementById("mensagemUsuario2").value

    chat.push(mensagemUsuario2)

    var li = document.createElement("li")
    li.classList.add("mensagemUsuario2")
    li.innerText = mensagemUsuario2
    lista.append(li)

    campoMensagemUsuario2.value = ""
}

// lista.innerHTML = `<div><p>${(chat[contador])}<\p><\div>`