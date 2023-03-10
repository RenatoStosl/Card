const ratingOptions = document.querySelectorAll(".rating__option");
const resultado = document.querySelector(".result");
const botao = document.querySelector(".botao");
const ver = document.querySelectorAll(".visualizar");

function setRating(event) {
  ratingOptions.forEach((option, index) => {
    if (index < event) {
      option.classList.add("ativo");
    } else {
      option.classList.remove("ativo");
    }
  });
  resultado.innerText = `Você avaliou com ${event} de 5 estrelas.`;
}

ratingOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    setRating(index + 1);
    botao.removeAttribute("disabled");
  });
});

botao.addEventListener("click", () => {
  ver.forEach(function (section) {
    section.classList.toggle("desativar");
  });
});
