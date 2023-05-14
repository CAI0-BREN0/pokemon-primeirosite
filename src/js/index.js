alert("olá, meu nome é caio, essa é minha primeira tentativa de site");
const botaoAlteratema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagembataotrocadetema = document.querySelector(".imagem-botao");
botaoAlteratema.addEventListener ("click", () => {
const modoEscuroestaativo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro");
 if(modoEscuroestaativo) {
  imagembataotrocadetema.setAttribute("src", "./src/imagens/sun.png")
} else  {
    imagembataotrocadetema.setAttribute("src", "./src/imagens/moon.png");
}});
 
