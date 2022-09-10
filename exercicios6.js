const prompt = require('prompt-sync')();

    const x1String = prompt('escreva o valor de x1:')
    const x1Number = Number(x1String)
    
    const y1String = prompt('escreva o valor de y1: ')
    const y1Number = Number(y1String)

    const x2String = prompt('escreva o valor de x2:')
    const x2Number = Number(x2String)

    const y2String = prompt ('escreva o valor de y2:')
    const y2Number = Number (y2String)


    const s = ((Math.pow(x2Number-x1Number , 2)) + (Math.pow(y2Number - y1Number , 2))) 
    
    const d = Math.sqrt(s)
    
    console.log(`Seu resultado e ; ${d}`)
    
