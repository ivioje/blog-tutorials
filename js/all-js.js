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
//--end--

//date
let d = new Date();
document.getElementById("current-time").innerHTML = d;
//--end--

//searchbox zoom in
let zoom = document.getElementById("zm-in");

zoom.addEventListener("click", function() {
  zoom.classList.add("come-in");
});
//--END--

//Get the button***top of page
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.style.borderRadius = "50px";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//--end--

//***showmore ****
let shownow = document.getElementById("shownow");
let showmore = document.getElementById("show");

shownow.addEventListener("click", function() {
  let Tfirst= document.getElementById('showfirst');
  if (Tfirst.style.display=="none") {
    Tfirst.style.display="block";
  } else {
    Tfirst.style.display="none";
  }
shownow.classList.toggle('show-toggle');
});

showmore.addEventListener("click", function() {
let Tsecond =  document.getElementById('showsecond');
if (Tsecond.style.display=="none") {
  Tsecond.style.display="block";
} else {
  Tsecond.style.display="none";
}
showmore.classList.toggle('show-toggle');
});






















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
