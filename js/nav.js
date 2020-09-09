const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.upper-links');
const navLinks = document.querySelectorAll('.upper-links li');
//toggle nav
  burger.addEventListener('click', ()=> {
    burger.style.textAlign = "center"; 
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ""
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
    });

    burger.classList.toggle('toggle');
  });

}

navSlide();

// //slides
// let index=0;
// show();
//
// function show() {
//   let i;
//   let slides= document.getElementsByClassName('effect');
//   for(i=0; i<slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//
//   index = index + 1;
//   if (index > slides.length) {
//     index = 1;
//   }
//
//   slides[index-1].style.display= "block";
//   setTimeout(show, 6000);
//
// };
