const cipher = {
  encode: function (offset, mensagem) {

    if (!offset || !mensagem) {
      throw new TypeError("Wrong argument types")
    }
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
      else if (letraAtual >= " ".charCodeAt() && letraAtual <= "/".charCodeAt()) {
        cifragem = ((letraAtual - " ".charCodeAt() + offset) % 16 + " ".charCodeAt())
      }
      else if (letraAtual >= "é".charCodeAt() && letraAtual <= "ú".charCodeAt()) {
        cifragem = ((letraAtual - "é".charCodeAt() + offset) % 34 + "é".charCodeAt())
      }

      mensagemCifrada += String.fromCharCode(cifragem)
    }

    return mensagemCifrada

  },

  decode: function (offset, mensagem) {

    if (!offset || !mensagem) {
      throw new TypeError("Wrong argument types")
    }

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
      else if (letraAtual >= " ".charCodeAt() && letraAtual <= "/".charCodeAt()) {
        decifragem = ((letraAtual - " ".charCodeAt() - offset) % 16 + " ".charCodeAt())
      }
      else if (letraAtual >= "é".charCodeAt() && letraAtual <= "ú".charCodeAt()) {
        decifragem = ((letraAtual - "é".charCodeAt() - offset) % 34 + "é".charCodeAt())
      }
      mensagemDecifrada += String.fromCharCode(decifragem)

    }
    return mensagemDecifrada

  }
}

export default cipher