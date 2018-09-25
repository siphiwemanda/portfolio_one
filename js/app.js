//$('boxtext').addClass('animated slideInLeft');

window.addEventListener("load", startanimation);
//const bigtext = document.getElementsByClassName('boxtext')
//const par = document.getElementsByClassName('par')
//const social = document.getElementsByClassName('social')



function startanimation(){
  var bigtext = document.getElementsByClassName('boxtext')
  var par =document.getElementsByClassName('par')
  var social =document.getElementsByClassName('social')

  for(i=0;i <bigtext.length; i++) {
  bigtext[i].classList.add("animated", "slideInLeft")
}
for(j=0;j <par.length; j++) {
par[j].classList.add("animated", "slideInLeft")
}
for(k=0;k <social.length; k++) {
social[k].classList.add("animated", "slideInLeft")
}


}
