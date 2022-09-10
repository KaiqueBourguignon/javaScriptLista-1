const prompt = require('prompt-sync')();

    const n1String = prompt('digite sua primeira nota :  ');
    const n1Number = Number(n1String)

    const n2String = prompt ('digite sua segunda nota:  ');
    const n2Number = Number(n2String)

        const n3String = prompt ('digite sua terceira nota:  ');
        const n3Number = Number(n3String)
            // 
            const Nota = ((n1Number * 2 ) + (n2Number * 3) + (n3Number * 5))/10 
            console.log(`${Nota}Pontos`)