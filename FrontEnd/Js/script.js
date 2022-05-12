
//    $('.skills-content').waypoint(function() {
//     $('.progress .progress-bar').each(function() {
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// }, {
//     offset: '80%'
// });
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const nex_btn = document.querySelector(".next-btn");


/*--------AOS Animation--------*/
AOS.init({
  duration: 1000,
  easing: "ease-in-out-back",
  once: true
});
/*------Sticky Navigation------*/
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
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
sr.reveal(".hero-text", { display: 600 });
sr.reveal(".hero-avatar", { origin: "top", display: 700 });
/*---------Skill Bar Animation-------------*/


/*---------Portfolio Filter Animation-------------*/
let mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: '.prt-card'
  },
  animation: {
    duration: 500,
  },
});

/*---------Modal Animation-------------*/
let currentIndex = 0;

zoom_icons.forEach((icn, i) => 
icn.addEventListener("click", () => {
  prt_section.classList.add("open");
  document.body.classList.add("stopScrolling");
  currentIndex = i;
  changeImage(currentIndex);
})
);

modal_overlay.addEventListener("click", () => {
  prt_section.classList.remove("open");
  document.body.classList.remove("stopScrolling");
});

prev_btn.addEventListener("click", () => {
  if(currentIndex === 0){
    currentIndex = 5
  }else{
    currentIndex--;
  }
  changeImage(currentIndex);
})

nex_btn.addEventListener("click", () => {
  if(currentIndex === 5){
    currentIndex = 0
  }else{
    currentIndex++;
  }
  changeImage(currentIndex);
})

function changeImage(index) {
images.forEach((img) => img.classList.remove("showImage"));
images[index].classList.add("showImage");
}