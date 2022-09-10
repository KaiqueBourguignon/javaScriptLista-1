const prompt = require('prompt-sync')();

    const aString = prompt('escreva um valor para A')
    const aNumber = Number(aString)
    
    const bString = prompt('escreve um valor para B')
    const bNumber = Number(bString)
    
    const cString = prompt('escreva um valor para C')
    const cNumber = Number(cString)
    // Math.pow retorna a base elevada pelo expoente
    const r = Math.pow(aNumber+bNumber, 2)
    const s = Math.pow(bNumber + cNumber, 2)
    const d = (r + s) / 2
    console.log(`seu resultado foi ${d}`)
