/* 15) Programa una función para convertir números de 
base binaria a decimal y viceversa,
 pe. miFuncion(100,2) devolverá 4 base 10.*/

/* const convertirBinarioDecimal = (numero =  undefined, base = undefined) =>{
    if(numero === undefined) return console.warn("No has introducido un valor")
    if(typeof numero !== "number") return console.error("No es un número")
    if(base === undefined) return console.warn("No has introducido un valor")
    if(typeof base !== "number" || !/(2|10)/.test(base)) return console.error("No es un número válido 2 o 10")

    if (base === 2){
        //parseInt(número,base del número que le pasamos) convierte a entero el número que le pasamos o string, indicándole la base en que va expresado
        return console.info(`${numero} en base ${base} = ${parseInt(numero, base)} en base 10`)
    }else if (base === 10){
        //.toString(base en la que queremos convertirlo)
        return console.info(`${numero} en base ${base} = ${numero.toString(base)} base 2`)
    }
}

convertirBinarioDecimal()
convertirBinarioDecimal("2")
convertirBinarioDecimal(100)
convertirBinarioDecimal(100, 2)
convertirBinarioDecimal(1110010, 2)
convertirBinarioDecimal(4, 10)
convertirBinarioDecimal(128, 10)
convertirBinarioDecimal(12, 10) */



/*16) Programa una función que devuelva el monto final después 
de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.*/

/* const aplicarDescuento = (monto = undefined, descuento = 0) =>{
    if(monto === undefined) return console.warn("No has ingresado el monto")

    if(typeof monto !== "number") return console.error(`El valor "${monto}" NO es un número`)

    if(Math.sign(monto) === -1) return console.error("El monto NO puede ser negativo")

    if(monto === 0) return console.error("El monto NO puede ser 0")

    if(typeof descuento !== "number") return console.error(`El valor "${descuento}" NO es un número`)

    if(Math.sign(descuento) === -1) return console.error("El descuento NO puede ser negativo")

    return console.info(`${monto}€ - ${descuento}% = ${monto - ((monto * descuento) / 100)}€`)
}

aplicarDescuento()
aplicarDescuento("200")
aplicarDescuento(-1000)
aplicarDescuento(0)
aplicarDescuento(1000, "20")
aplicarDescuento(1000, -12)
aplicarDescuento(1000, 20) */



/*17) Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calcularAnios = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn("No has introducido una fecha")

    //si fecha no es un objeto Date... (instanceof valida si fecha es un Date = true; typeof devolvería que es un Object... pero [Array] es un object, {Object} es un object), new Date es un Object...
    if(!(fecha instanceof Date)) return console.error("El valor que has introducido no es una fecha")

    //getTime() devuelve el tiempo en ms
    let hoyMenosFecha = new Date().getTime() - fecha.getTime()
        aniosEnMs = 1000 * 60 * 60 * 24 * 365 //1 año = 1seg en ms * 60seg 1 min * 60min 1hora * 24h 1día * 365días 1año
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs) //convertir la diferencia en años y lo bajamos con floor para si no hemos llegado a la fecha correspondiente indicada

    return (Math.sign(aniosHumanos) === -1) //si da número negativo es que el año es futuro... 
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`) //Math.abs valor absoluto, quitamos el signo negativo para poder expresarlo. Extraemos el año introducido en fecha con getFullYear()
        : (Math.sign(aniosHumanos) === 1) //si es positivo, hay que mostrar los años transcurridos
            ? console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`) 
            //si diese 0, es que la fecha introducida es la misma que la fecha actual
}

calcularAnios()
calcularAnios({})
calcularAnios(false)
calcularAnios(new Date())
calcularAnios(new Date(1984, 2, 7))
calcularAnios(new Date(2084, 2, 7))
calcularAnios(new Date(2002, 2, 7))