const cipher = {
  encode: function (offset, mensagem) {

    let mensagemCifrada = ""

    for (var i = 0, l = mensagem.length; i < l; i++) {
      let cifragem = " "
      let letraAtual = mensagem.charCodeAt(i)
      if (letraAtual >= "a".charCodeAt() && letraAtual <= "z".charCodeAt()) {
        cifragem = ((letraAtual - "a".charCodeAt() + offset) % 26 + "a".charCodeAt())
      }
      else if (letraAtual >= "A".charCodeAt() && letraAtual <= "Z".charCodeAt()) {
        cifragem = ((letraAtual - "A".charCodeAt() + offset) % 26 + "A".charCodeAt())
      }
      else {
        alert("Você deve usar somente letras maiúscula e/ou minúsculas, sem espaços ou caracteres especiais!")
      }
    
      mensagemCifrada += String.fromCharCode(cifragem)
    }

    return mensagemCifrada

  },

  decode: function (offset, mensagem) {

    let mensagemDecifrada = ""

    for (var i = 0, l = mensagem.length; i < l; i++) {
      let decifragem = " "
      let letraAtual = mensagem.charCodeAt(i)
      if (letraAtual >= "a".charCodeAt() && letraAtual <= "z".charCodeAt()) {
        decifragem = ((letraAtual - "z".charCodeAt() - offset) % 26 + "z".charCodeAt())
      }
      else if (letraAtual >= "A".charCodeAt() && letraAtual <= "Z".charCodeAt()) {
        decifragem = ((letraAtual - "Z".charCodeAt() - offset) % 26 + "Z".charCodeAt())
      }
      else {
        alert("Você deve usar somente letras maiúscula e/ou minúsculas, sem espaços ou caracteres especiais!")
      }
      mensagemDecifrada += String.fromCharCode(decifragem)
    }
    return mensagemDecifrada

  }
}

export default cipher