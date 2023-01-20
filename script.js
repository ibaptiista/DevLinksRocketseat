//função do botão de dark/light mode
function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    // tag para pegar a img
    const img = document.querySelector("#profile img")

    // subistituir imagens
    if (html.classList.contains("light")){
        img.setAttribute("scr", "./assets/avatar-ligth.png")
    } else {
        // sem light mode vai para a imagem normal
        img.setAttribute("scr", "./assets/avatar.png")
    }
}