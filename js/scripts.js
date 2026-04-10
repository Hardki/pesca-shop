const app = document.getElementById("app");

const productos = [
  { nombre: "Reel Marine Sports", precio: 120000 },
  { nombre: "Caña Spinit Tritón", precio: 95000 },
  { nombre: "Señuelo Banana Bait", precio: 18000 }
];

function render() {
  app.innerHTML = `
    <header class="header">
      <div>🎣 Pesca Shop</div>
      <nav class="menu">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
      </nav>
      <div>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>

    <section class="hero">
      <h2>Todo para tu próxima pesca</h2>
      <p>Cañas, reels, señuelos y accesorios</p>
    </section>

    <section class="productos">
      ${productos.map(p => `
        <div class="card">
          <h3>${p.nombre}</h3>
          <p>$${p.precio}</p>
          <button onclick="agregarCarrito('${p.nombre}')">
            Agregar
          </button>
        </div>
      `).join("")}
    </section>
  `;
}

function agregarCarrito(nombre) {
  alert(nombre + " agregado al carrito");
}

render();