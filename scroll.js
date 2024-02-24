const sections = [...document.querySelectorAll("section")];
const header = [...document.querySelectorAll("header")];

window.addEventListener('scroll', function () {
  const scrollFromTop = window.scrollY;

  for (let i = 0; sections.length > i; i++) {
    if (scrollFromTop <= sections[i].offsetTop) {
        document.querySelector("header").style.filter = "invert(0)";
        break;
    } else if (scrollFromTop <= header[0].offsetTop) {
        document.querySelector("header").style.filter = "invert(1)";
    }
  }
})
