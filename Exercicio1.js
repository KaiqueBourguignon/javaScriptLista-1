const prompt = require ('prompt-sync')();
    // CLIENTE DIGITA OS DADOS
    const anosT = prompt ("escreva seu anos na terra: ");
       const anosN = Number(anosT)
    
    const mesesT = prompt ("escreva seus meses na terra: ");
       const mesesN = Number(mesesT)
    
    const diasT = prompt ("escreva seus dias na terra: ");
        const diasN = Number(diasT)
    // RESULTADO DOS ANOS E MESES EM DIAS 
        const total = (anosN*365) + (mesesN*30) + diasN 
           console.log(`Seus dias total sao : ${total}`);

          
        
        

