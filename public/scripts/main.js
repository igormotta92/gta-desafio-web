'use strict';

function onLoad_getMessages() {
  function fnSucesso({ data }) {
    console.log('get-message');
    data.map(function (list) {
      const { user, message } = list
      createComponentMessage(user.nickname, message);
    });
  }

  useFetch(routes.mensagem, { fnSucesso }, {});
}

function createComponentMessage(userMenssage, mensagem) {
  let content = `
    <span class="lista_messagens__usuario">${userMenssage}</span>
    <p>${mensagem}</p>`

  let listMensagem = document.querySelector(".lista_messagens");
  let novaMensagem = document.createElement("li")

  novaMensagem.className = "lista_messagens__item";
  novaMensagem.innerHTML = content;

  listMensagem.appendChild(novaMensagem);
}

//==================================================================

function onLoad_getUsuarios() {
  function fnSucesso({ data }) {
    console.log('get-user');
    data.map(function (list) {
      const { user } = list;
      createComponentUsuario(user.nickname);
    });
  }

  useFetch(routes.users, { fnSucesso }, {});
}

function createComponentUsuario(userName) {
  var listUsuarios = document.getElementById("lista_usuarios");
  var novoUsuario = document.createElement("li")
  novoUsuario.innerHTML = userName;
  listUsuarios.appendChild(novoUsuario);
}

//==================================================================

function onLoad_buttonEnviar() {
  let buttonEnviar = document.getElementById("button_enviar")
  let inputMensagem = document.getElementById("input-mensagem")

  buttonEnviar.onclick = function () {
    sendMessage()
  };
  inputMensagem.onkeyup = function (event) {
    if (event.key === "Enter") {
      sendMessage()
    }
  };
}

function sendMessage() {
  var user = { name: "Igor" };
  let inputMensagem = document.getElementById("input-mensagem")
  var sklListMessage = document.querySelector(".skl_list_message");


  createComponentMessage(user.name, inputMensagem.value)

  inputMensagem.value = ""
  sklListMessage.scrollTop = sklListMessage.scrollHeight;
  inputMensagem.focus()
}

function updateScroll() {

}

window.addEventListener('load', function () {
  onLoad_buttonEnviar();
  onLoad_getUsuarios();
  onLoad_getMessages();
})
