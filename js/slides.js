let index=0;
show();

show =() => {
  let i;
  let slides= document.getElementsByClassName('effect');

  for(i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }

}
