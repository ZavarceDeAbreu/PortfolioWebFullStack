/* -------- Menu --------- */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
    $header =d.querySelector(".header"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
        $header.classList.toggle("is-active");
    });

    d.addEventListener("click" , e=>{
        if(!e.target.matches(".menu a")) return false;
        
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
        $header.classList.remove("is-active");
    })
})(document);

