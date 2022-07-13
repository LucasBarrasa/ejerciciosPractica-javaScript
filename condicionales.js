let edad = 17;

if (edad >= 18){
    console.log("Es mayor de edad")
}else {
    console.log("Es menor de edad")
    
}

// Operador ternario

let mayorEdad = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(mayorEdad)



let dia = 9;

switch (dia) {
    case 1:
        console.log("Lunes")
        break;

    case 2:
        console.log("Martes")    
        break;

    case 3:
            console.log("Miercoles")
        break;
    
    case 4:
        console.log("Jueves")
        break;
    
    case 5:
        console.log("Viernes")
        break;
    
    case 6:
        console.log("Sabado")
        break;
    
    case 7:
        console.log("Domingo")
        break;
    
    // Valor por default que toma si no encuentra ningun caso que coincida con la variable
    default:
        console.log("No seleccionaste ningun dia valido")
        break;
}