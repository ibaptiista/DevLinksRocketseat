function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")){
        img.setAttribute("scr", "./assets/avatar-ligth.png")
    } else {
        img.setAttribute("scr", "./assets/avatar.png")
    }
}
