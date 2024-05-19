const productos = [
    {nombre: "gabinete",  precio: 15000},
    {nombre: "procesador", precio: 75000},
    {nombre: "ram", precio: 40000},
    {nombre: "rom", precio: 30000},
    {nombre: "grafica", precio: 95000},

];
let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto de hardware? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Responder con si o no")
    seleccion = prompt("Hola, desea comprar alguna pieza para su PC? si o no")
}

if(seleccion == "si"){
    alert("A continuacion, nuestra lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
} else if (seleccion = "no"){
    alert("Gracias por venir, vuelva prontos")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "gabinete" || producto == "procesador" || producto == "ram" || producto == "rom" || producto == "grafica"){
        switch(producto){
            case "gabinete" :
            precio = 15000;
            break;
            case "procesador" :
            precio = 75000;
            break;
            case "ram" :
            precio = 40000;
            break;
            case "rom" :
            precio = 30000;
            break;
            case "grafica" :
            precio = 95000;
            break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando?")
    
    while(seleccion === "no"){
        alert("Gracias por la compra, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;


    }
    
} 

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)