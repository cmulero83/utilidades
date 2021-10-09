//
// Funciones matematicas
//



function sumar(arg){

    let valor

    // Comprobar si recibimos un array
    if( Array.isArray(arg) ){

        // Sumamos todos los elementos del array
        valor = arg.reduce(function(a,b){
           return a + b
    })
    }else{
        valor = false
    }

    return valor

}

//
// Media aritmetica
// Recibe un array numeros y devuelve la media artimetica
//

function media_aritmetica(arg){

    let valor

    // Comprobar si recibimos un array
    if( Array.isArray(arg) ){

        // Sumamos todos los elementos del array
        valor = arg.reduce(function(a,b){
           return a + b
        }
    )
    }else{
        return false
    }

    valor = valor / arg.length
    return valor

}

//
// Exportar las funciones
//

module.export = {'sumar':sumar}
module.export = {'media_aritmetica':media_aritmetica}

