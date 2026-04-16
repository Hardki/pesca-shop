const app = document.getElementById("app");

const productos = [
  { nombre: "Reel Marine Sports", precio: 120000 },
  { nombre: "Caña Spinit Tritón", precio: 95000 },
  { nombre: "Señuelo Banana Bait", precio: 18000 }
];

function render() {
  app.innerHTML = `
    <header>
      <div class="top-bar">
        🔥 Envíos gratis en compras mayores a $50.000
      </div>

      <div class="header">
        <div class="logo">
          <img src="images/chiripi-pesca-v2.png" alt="Chiripi Pesca">
        </div>
        <div class="form">
          <input class="form-input" type="text" placeholder="¿Que estas buscando?">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <!-- comentado para mostrar el header sin el menu
        <nav class="menu">
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
        </nav>
         -->

        <div class="acciones">
            <a class="login" href="#">
                <i class="fa-solid fa-circle-user"></i>
                <span>Iniciar sesión</span>
            </a>

            <a class="whatsapp" href="#">
                <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a class="carrito" href="#">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
            
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