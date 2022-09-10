const prompt = require ('prompt-sync')();
// digitou um valor 
   const eventoString = prompt('escreva os segundos do evento')
   const eventosNumber = Number(eventoString)
 // parseint para por o resultado inteiro  % para resto  
     const horas = parseInt (eventosNumber / 3600)
     const minutos = parseInt ((eventosNumber % 3600) / 60)
     const segundos = parseInt((eventosNumber % 3600) % 60)

       console.log(`Seu evento teve :  ${horas} hora(s)`)
       console.log(`seu evento teve em minutos: ${minutos} minutos`)
       console.log(`seu evento teve em segundos: ${segundos} segundos `) 