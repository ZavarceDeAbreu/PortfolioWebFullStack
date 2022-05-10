
//    $('.skills-content').waypoint(function() {
//     $('.progress .progress-bar').each(function() {
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// }, {
//     offset: '80%'
// });

/*--------AOS Animation--------*/
AOS.init({
  duration: 1000,
  easing: "ease-in-out-back",
  // once: true
});
/*------Sticky Navigation------*/
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scroll", window.scrollY > 0);
});
/* ------------Menu----------- */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $navigation = d.querySelector(".navigation");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $navigation.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".navigation a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $navigation.classList.remove("is-active");
  });
})(document);
/*-------Reveal Animation-------*/
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});
sr.reveal(".hero-text" , {display:600});
sr.reveal(".hero-avatar" , {origin:"top" , display:700});
/*---------Skill Bar Animation-------------*/


/*---------Portfolio Filter Animation-------------*/

let mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: '.ptr-card'
},
animation: {
    duration: 300
},
});
 