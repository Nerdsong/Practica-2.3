
//Creación del array

let condimentos = ["Sal fina", "Sal gruesa", "Pimienta", "Oregano", "Comino", "Canela", "Aceite de oliva", "Aceite"];

//Muestra el array inicial

function mostrarCondimentos(condimentos){
    console.log("------Inicio------\n");
    for (let i = 0; i < condimentos.length; i++) {
        console.log(`Producto N°${i+1}:`);
        console.log(`[Posición ${i}]  ${condimentos[i]} \n`);
    }
    console.log("------Fin------\n");
};

mostrarCondimentos(condimentos);

//Actualización del array

condimentos[3] = ["Mayonesa"];
condimentos[7] = ["Aceitunas"];

mostrarCondimentos(condimentos);

//Inclusión de nuevos elementos en el array al principio y al final

condimentos.unshift("Dulce de leche");
condimentos.push("Miel");

mostrarCondimentos(condimentos);

//Borrado de elementos en posiciones específicas

condimentos.splice(5,1);
condimentos.splice(2,2);

mostrarCondimentos(condimentos);

//Extra 1: Inserción de elementos en posiciónes específicas

condimentos.splice(3,0, "Pringles");
condimentos.splice(5,0, "Agua Mineral");
condimentos.splice(3,0, "Terma");

mostrarCondimentos(condimentos);

//Extra 2: Intercambio de lugares entre elementos

function interCambiarPosiciones(elemento1, elemento2, array){
    let index1 = array.findIndex(elementoX => elementoX === elemento1);
    let index2 = array.findIndex(elementoZ => elementoZ === elemento2);


    array.splice(index1, 1, elemento2);
    array.splice(index2, 1, elemento1);

}


interCambiarPosiciones("Terma", "Pringles", condimentos);

interCambiarPosiciones("Miel", "Aceite de oliva", condimentos);

mostrarCondimentos(condimentos);
