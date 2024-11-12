document.addEventListener("DOMContentLoaded", () => {
    loadProductos();
});

const productos = [
    { id: 1, nombre: "Disney", precio: 10 },
    { id: 2, nombre: "HBO", precio: 12 },
    { id: 3, nombre: "Netflix", precio: 15 },
    { id: 4, nombre: "DAZN", precio: 8 },
    { id: 5, nombre: "Rockstar", precio: 20 },
    { id: 6, nombre: "Spotify Premium", precio: 7 },
    { id: 7, nombre: "Fortnite Cheat", precio: 25 },
    { id: 8, nombre: "Hosting", precio: 10 },
    { id: 9, nombre: "Fortnite V-Bucks", precio: 5 }
];

let carrito = [];

function loadProductos() {
    const productoList = document.getElementById("producto-list");
    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto-item");
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productoList.appendChild(productoDiv);
    });
}

function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoList = document.getElementById("carrito-list");
    carritoList.innerHTML = "";
    carrito.forEach((producto, index) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoList.appendChild(item);
    });
    document.getElementById("carrito-total").textContent = carrito.reduce((acc, prod) => acc + prod.precio, 0).toFixed(2);
    document.getElementById("carrito-count").textContent = carrito.length;
}

function toggleCarrito() {
    document.getElementById("carrito").classList.toggle("show");
}

function checkout() {
    alert("Compra finalizada");
    carrito = [];
    actualizarCarrito();
}
