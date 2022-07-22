
import cipher from './cipher.js'  

const mensagem = document.getElementById("mensagem")
const offset = document.getElementById("offset")
const btnEncode = document.getElementById("encode")
const btnDecode = document.getElementById("decode")
const resultado = document.getElementById ("result")

btnEncode.addEventListener ("click",function (){
  console.log (mensagem.value)
  console.log (offset.valueAsNumber)
  const mensagemCifrada = cipher.encode (offset.valueAsNumber, mensagem.value)
  resultado.value = mensagemCifrada
})

btnDecode.addEventListener ("click", function () {
  console.log (mensagem.value)
  console.log (offset.valueAsNumber)
  cipher.decode (offset.valueAsNumber, mensagem.value)
  
  })


