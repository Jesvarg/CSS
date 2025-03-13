
  document.addEventListener("DOMContentLoaded", () => {
    // Carrito flotante
    const carrito = document.querySelector(".carrito");
    const botonesAgregar = document.querySelectorAll(".boton--agregar");
    const listaCarrito = document.querySelector(".carrito__lista");
    const totalCarrito = document.querySelector(".carrito__total");
    const botonCerrar = document.querySelector(".carrito__cerrar");

    let total = 0;

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", (e) => {
            const producto = e.target.parentElement;
            const nombre = producto.querySelector(".producto__nombre").innerText;
            const precio = parseFloat(producto.querySelector(".producto__precio").innerText.replace("$", ""));

            total += precio;

            const item = document.createElement("li");
            item.innerText = `${nombre} - $${precio.toFixed(2)}`;
            listaCarrito.appendChild(item);

            totalCarrito.innerText = `Total: $${total.toFixed(2)}`;

            // Muestra el carrito
            carrito.style.transform = "translateX(-100%)";
        });
    });

    botonCerrar.addEventListener("click", () => {
        carrito.style.transform = "translateX(0)";
    });

    // Carrusel de hero
    const slides = document.querySelectorAll(".hero__slide");
    let index = 0;

    function mostrarSiguienteSlide() {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
    }

    setInterval(mostrarSiguienteSlide, 3000);
    mostrarSiguienteSlide();
});
