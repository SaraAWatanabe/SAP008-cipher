
import cipher from './cipher.js'

const mensagem = document.getElementById("mensagem")
const offset = document.getElementById("offset")
const btnEncode = document.getElementById("encode")
const btnDecode = document.getElementById("decode")
const resultado = document.getElementById("result")

btnEncode.addEventListener("click", function () {
  try {
    const mensagemCifrada = cipher.encode(offset.valueAsNumber, mensagem.value)
    resultado.value = mensagemCifrada
  }
  catch (error) {
    alert(error.message)

  }
})

btnDecode.addEventListener("click", function () {
  try{
    const mensagemDecifrada = cipher.decode(offset.valueAsNumber, mensagem.value)
  resultado.value = mensagemDecifrada
  }
  catch (error) {
    alert(error.message)
  }
  

})



