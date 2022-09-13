var Button = document.getElementById('passwor-button')
var tamanhoSenha = document.getElementById('valor')
var senha = document.getElementById('password')
var senhainput = document.getElementById('tamanho-password')

let containPassword = document.getElementById('container-characters')

let charset =
  'abcdefghijklmnopqrstuvwyxzABCDEFGHIJKLMNOPQRSTUVWYXZ123456789!@#$%&*.'
let newsenha = ''

tamanhoSenha.innerHTML = senhainput.value
senhainput.oninput = function () {
  tamanhoSenha.innerHTML = this.value
}

function generatPasssword() {
  let pass = ''
  for (i = 0, n = charset.length; i < senhainput.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
  }

  containPassword.classList.remove('hide')

  senha.innerHTML = pass
  newsenha = pass
}

function clipPassword() {
  senha.innerHTML = 'Sua nova senha foi copiada, Guarde com Cuidado!'
  navigator.clipboard.writeText(newsenha)
}
