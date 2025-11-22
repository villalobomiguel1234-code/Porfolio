// Mostrar/ocultar botón "arriba"
window.onscroll = function () {
    document.getElementById("topBtn").style.display =
        document.documentElement.scrollTop > 300 ? "block" : "none";
};

// Volver arriba
document.getElementById("topBtn").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
