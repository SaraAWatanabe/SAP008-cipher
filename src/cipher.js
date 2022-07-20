const cipher = {
  encode: function (offset, mensagem) {
    
  let cifragem = ((mensagem.charCodeAt(i) - 65 + offset) % 26 + 65) 
   for (var i = 0; i<String.length; i++) // Como rodar todas as letras da mensagem?
   
  console.log (cifragem)

  let mensagemCifrada = String.fromCharCode (cifragem)
  console.log (mensagemCifrada)// o resultado é a mensagem criptografada
  const output = document.getElementById("result")
    output. (mensagemCifrada) //Tá certo????
  } ,
  //decode: function 

}



//function decode(offset, string): offset

export default cipher