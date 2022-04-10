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
    })
})(document);

