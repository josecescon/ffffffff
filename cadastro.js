function validarFormulario() {
  const senha = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  if (senha === "" || email === "") {
    alert("Preencha todos os campos!");
    return false;
  }
  // Outras validações...
  return true;
}

const formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
  if (!validarFormulario()) {
    event.preventDefault(); // Impede o envio do formulário se inválido
  }
});