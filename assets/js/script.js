const libros = ['Los Juegos del Hambre', 'En Llamas', 'Sinsajo']
const carrito = []
const IVA = 1.21

const listadoLibros = document.getElementById("listadoLibros")
const listadoCarrito = document.getElementById("listadoCarrito")

class Libro {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}

function cargarProductos() {
    listadoLibros.innerHTML = ""
    for (const libro of libros) {
        const li = document.createElement("li")
              li.className = "collection-item"
              li.innerText = libro
              li.id = libro + "Prod"
              li.addEventListener("click", ()=> {
                agregarAlCarrito(`${libro}`)
              })
              listadoLibros.append(li)
    }
}

cargarProductos()

function agregarAlCarrito(lib) {
        carrito.push(lib)
        const li = document.createElement("li")
              li.className = "collection-item"
              li.innerText = lib
              li.id = lib + "EnCarrito"
              li.addEventListener("dblclick", ()=> {
                eliminarDelCarrito(`${li.id}`)
              })
              listadoCarrito.append(li)
}

function eliminarDelCarrito(lib) {
    const libroAeliminar = document.getElementById(`${lib}`);
          libroAeliminar.remove()
}

const alertaVacio = () => {
    Swal.fire({
        title: 'Error',
        text: 'El carrito está vacío',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    })
}

function corroborarCarrito(){
    if (carrito.length === 0) {
        alertaVacio()
    } else {
        window.location.href = "../pages/checkout.html";
    }
}

