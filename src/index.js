
import cipher from './cipher.js'  

const mensagem = document.getElementById("mensagem")
const offset = document.getElementById("offset")
const btnEncode = document.getElementById("encode")
const btnDecode = document.getElementById("decode")


btnEncode.addEventListener ("click",function (){
  console.log (mensagem.value)
  console.log (offset.valueAsNumber)
  //console.log(cipherEncode)
  cipher.encode (offset.valueAsNumber, mensagem.value)
})



btnDecode.addEventListener ("click", function () {
 
  
  
  })


