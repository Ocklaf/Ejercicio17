/* 15) Programa una función para convertir números de 
base binaria a decimal y viceversa,
 pe. miFuncion(100,2) devolverá 4 base 10.*/

/* const conversor = (valor=undefined, base=undefined) =>{
    if(valor === undefined) return console.warn("No has introducido un valor")
    if(typeof valor !== "number") return console.error("No es un número")
    if(base === undefined) return console.warn("No has introducido un valor")
    if(typeof base !== "number" || !/(2|10)/.test(base)) return console.error("No es un número válido 2 o 10")

    let total = 0

    if(base === 2){
        longitud = valor.toString().split("").length
        valor = valor.toString().split("").reverse()
        console.info(valor)
        for(let i = 0; i < longitud; i++){
            valor[i] = parseInt(valor[i])
            total += valor[i] * (Math.pow(2, i))
        }
        console.info(`El valor de ${valor.reverse().join("")} binario, corresponde al valor decimal es ${total}`)
    }else if(base === 10){
        let binary = [], 
            decimal = valor
        
        for(let i = 0; valor >= 1; i++){    
            if(valor%2 === 0){
                valor = valor/2
                console.info(valor)
                binary[i] = 0
            }else if (valor%2 === 1){
                valor = valor/2
                valor = Math.trunc(valor)
                console.info(valor)
                binary[i] = 1
            }
        }
        console.info(`El valor en binario de número ${decimal} es ${binary.reverse().join("")}`)
    }

}

conversor(10000000000, 2)
conversor(11235, 10) */
 


/*16) Programa una función que devuelva el monto final después 
de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.*/

const porcentajeDescuento = (valor=undefined, descuento=undefined) =>{
    if(valor === undefined) return console.warn("No has introducido un valor")
    if(typeof valor !== "number") return console.error("No es un número")
    if(descuento === undefined) return console.warn("No has introducido un valor")
    if(typeof descuento !== "number") return console.error("No es un número válido 2 o 10")

    let precioFinal

    precioFinal = valor - ((valor * descuento) / 100)

    console.info(`El precio final del producto aplicando el descuento es: ${precioFinal}€`)
}

porcentajeDescuento(512.1, 20)



/*17) Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */