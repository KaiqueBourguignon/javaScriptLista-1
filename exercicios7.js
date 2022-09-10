const prompt = require('prompt-sync')();


	    const A1 = prompt('Valor de A:')
        const A = Number(A1)
	
   		
		const B1 = prompt('Valor de B:')
		const B = Number(B1)
		
		const C1 = prompt('Valor de C:')
		const C = Number(C1)
		
		const D1 = prompt('Valor de D:')
		const D = Number(D1)
		
		const E1 = prompt('Valor de E:')
		const E = Number(E1)
		
        const F1 = prompt('Valor de F:')
		const F = Number(F1)
		
		 const X = (((C*E)-(B*F))/((A*E)-(B*D)))
		 const Y = (((A*F)-(C*D))/((A*E)-(B*D)))
		

		console.log(`Válor de X:${X}`)
		console.log(`Válor de Y:,${Y}`)