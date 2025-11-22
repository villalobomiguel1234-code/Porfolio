// Mostrar/Ocultar botón para subir
window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Acción al hacer clic
document.getElementById("topBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
