const prompt = require ('prompt-sync')();

        const valueCarString = prompt ('Informe o valor do carro: ');
        const valurCarNumber = Number (valueCarString);
        
        const valueFactory = (valurCarNumber * 28) / 100;
        const valueTax = (valurCarNumber * 45) / 100;
        const finalValue = (valurCarNumber + valueFactory + valueTax);
    
        console.log(`Valor final do carro ao consumidor: ${finalValue}`)