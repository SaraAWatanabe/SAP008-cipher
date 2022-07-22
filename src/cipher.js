const cipher = {
  encode: function (offset, mensagem) {
    
    let mensagemCifrada = ""
    for (var i = 0, l=mensagem.length; i<l; i++){ // Como rodar todas as letras da mensagem? 
      let cifragem = ((mensagem.charCodeAt(i) - 65 + offset) % 26 + 65) 
     console.log (cifragem)

       mensagemCifrada += String.fromCharCode (cifragem)
     console.log (mensagemCifrada)// o resultado é a mensagem criptografada
  
      // Como juntar todas as letras da string?
    }
    return mensagemCifrada
    

    //const output = document.getElementById("result") //colocar no index?
    
  } ,
  //decode: function (offset, mensagem) {
  
  //let decifragem = ((mensagem.charCodeAt(i) - 65 - offset) % 26 + 65) 
    //for (var i = 0, l=mensagem.length; i<l; i++) // Como rodar todas as letras da mensagem? Definir escopo do laço?
     //console.log (decifragem)

    //let mensagemDecifrada = String.fromCharCode (cifragem)
    // console.log (mensagemdeCifrada)// o resultado é a mensagem descriptografada
    
  //}

}

export default cipher