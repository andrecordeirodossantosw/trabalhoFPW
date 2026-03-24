document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.title; // obter o título específico de cada página
  let classePagina;

  if (titulo === "sobremim") {
    classePagina = "menu-sobr";
  } else if (titulo === "formacao") {
    classePagina = "menu-form";
  } else if (titulo === "portifolio") {
    classePagina = "menu-port";
  } else {
    classePagina = "menu-cont";
  }
  // com a página identificada busca à qual li ela está aplicada

  if (classePagina) {
    const elemento = document.querySelector(`a.${classePagina}`);
    if (elemento) {
      elemento.classList.add("paginaAtual");
    }
  }
});

document.getElementById("formulario").addEventListener("submit", function (event) {

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagemTexto = document.getElementById("mensagemTexto").value;

  let erro = false;

  
  if (!nome) {
    alert("Nome está vazio.");
    erro = true;
  }

  if (!email) { // teste do email incorreto é feito pelo formulário
    alert("Email está vazio.");
    erro = true;
  }
 
  if (!mensagemTexto) {
    alert("Digite uma mensagem.");
    erro = true;
  }

  if (!erro) {
    alert("Mensagem enviada com sucesso!"); // quando todos os campos estão preenchidos
  }
});
