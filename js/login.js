document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("pass").value.trim();

    if (usuario === "luciana" && pass === "luciana") {
        window.location.href = "../html/book.html";
    } else {
        alert("Usuario o contraseña incorrectos 🌙");
    }
});






