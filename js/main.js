const app = document.getElementById("app");

const productos = [
  { nombre: "Reel Marine Sports", precio: 120000 },
  { nombre: "Caña Spinit Tritón", precio: 95000 },
  { nombre: "Señuelo Banana Bait", precio: 18000 }
];

let bannerActual = 0;

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
          <input class="form-input" type="text" placeholder="¿Qué estás buscando?">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

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
      </div>
    </header>

    <nav class="menu">
      <a href="#">Inicio</a>
      <a href="#">Productos</a>
      <a href="#">Combos</a>
      <a href="#">Contacto</a>
    </nav>

    <section class="slider">
      <img src="${banners[bannerActual].imagen}" alt="${banners[bannerActual].titulo}">
      <div class="slider-info">
        <h2>${banners[bannerActual].titulo}</h2>
        <p>${banners[bannerActual].texto}</p>
      </div>
      <div class="slider-dots">
        ${banners.map((banner, index) => `
          <span 
            class="dot ${index === bannerActual ? "activo" : ""}"
            onclick="irABanner(${index})">
          </span>
        `).join("")}
      </div>
    </section>

    <section class="beneficios">
      <div class="beneficio">
        <i class="fa-solid fa-credit-card"></i>
        <h3>Hasta 6 cuotas sin interés</h3>
      </div>

      <div class="beneficio">
        <i class="fa-solid fa-truck-fast"></i>
        <h3>Envíos rápidos a todo el país.</h3>
      </div>

      <div class="beneficio">
        <i class="fa-solid fa-shield"></i>
        <h3>Garantía oficial en todos los productos</h3>
      </div>
    </section>

    <section class="destacados">
  <h2>Conocé nuestros productos destacados</h2>

  <div class="categorias">
    ${["Reels", "Cañas", "Señuelos", "Combos", "Accesorios"].map(categoria => `
      <button 
        class="categoria-btn ${categoria === categoriaActual ? "activa" : ""}"
        onclick="cambiarCategoria('${categoria}')">
        ${categoria}
      </button>
    `).join("")}
  </div>

  <div class="productos-destacados">
    ${obtenerProductosPaginados().map(producto => `
      <div class="destacado-card">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="destacado-info">
          <h3>${producto.nombre}</h3>
          <p>${producto.precio}</p>
        </div>
      </div>
    `).join("")}
  </div>

  <div class="slider-dots">
    ${Array.from({ length: obtenerCantidadPaginas() }).map((_, index) => `
      <span
        class="dot ${index === paginaActualProductos ? "activo" : ""}"
        onclick="irAPaginaProductos(${index})">
      </span>
    `).join("")}
  </div>
</section>

    <section class="slider">
      <img src="images/waterdog.webp" alt="Pesca">
    </section>

    <section class="destacados">
      <h2>Conocé nuestras últimas novedades</h2>

      <div class="productos-destacados">
        ${novedades.map(producto => `
          <div class="destacado-card">
            <img src="${producto.imagen}" alt="${producto.alt}">
        
            <div class="destacado-info">
              <h3>${producto.nombre}</h3>
              <p>${producto.precio}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    
  `;
}

function agregarCarrito(nombre) {
  alert(nombre + " agregado al carrito");
}

function siguienteBanner() {
  bannerActual++;

  if (bannerActual >= banners.length) {
    bannerActual = 0;
  }

  render();
}

function irABanner(index) {
  bannerActual = index;
  render();
}

let categoriaActual = "Reels";
let paginaActualProductos = 0;
const productosPorPagina = 6;
render();
const botonesCategoria = document.querySelectorAll(".categoria-btn");

botonesCategoria.forEach(boton => {
  boton.addEventListener("click", () => {

    botonesCategoria.forEach(btn => {
      btn.classList.remove("activa");
    });

    boton.classList.add("activa");

  });
});

function obtenerProductosFiltrados() {
  return productosDestacados.filter(
    producto => producto.categoria === categoriaActual
  );
}

function obtenerProductosPaginados() {
  const productosFiltrados = obtenerProductosFiltrados();
  const inicio = paginaActualProductos * productosPorPagina;
  const fin = inicio + productosPorPagina;
  return productosFiltrados.slice(inicio, fin);
}

function obtenerCantidadPaginas() {
  const productosFiltrados = obtenerProductosFiltrados();
  return Math.ceil(productosFiltrados.length / productosPorPagina);
}

function cambiarCategoria(categoria) {
  categoriaActual = categoria;
  paginaActualProductos = 0;
  render();
}

function irAPaginaProductos(index) {
  paginaActualProductos = index;
  render();
}

setInterval(siguienteBanner, 4000);