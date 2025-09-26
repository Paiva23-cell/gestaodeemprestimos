document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "1234") {
      // Redireciona para o dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Usuário ou senha inválidos!");
    }
  });
});
