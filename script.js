// Esperar a que se cargue todo el DOM
document.addEventListener("DOMContentLoaded", function() {
  // Por ejemplo: cambiar el color del fondo de una sección al hacer clic
  const pilares = document.querySelectorAll(".pilar");

  pilares.forEach((pilar) => {
    pilar.addEventListener("click", function() {
      // Toggles una clase para cambiar el fondo
      this.classList.toggle("highlight");
    });
  });
});

// Guía semanal completa
if (valor.includes("guia semanal") || valor.includes("guía semanal") || valor.includes("guia") ) {
    document.getElementById("guiaSemanal").scrollIntoView({ behavior: "smooth" });
}
