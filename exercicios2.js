const prompt = require ('prompt-sync')();
// CLIENTE DIGITA OS DADOS
   const diasString = prompt ('digite seus dias na terra:  ');
   const diasNumber = Number(diasString);
    
   // divisao dos dias e sobras com %(sobra) e parseint para resultado inteiro 
     const Anos = parseInt (diasNumber / 365);
   
     const meses = parseInt ((diasNumber % 365) / 30);
   
     const Dias = parseInt ((diasNumber % 365) % 30);

     
      console.log(`anos na terra:  ${Anos}anos`);
      console.log(`meses na terra:  ${meses}meses`);
      console.log(`dias na terra: ${Dias}dias`);
      