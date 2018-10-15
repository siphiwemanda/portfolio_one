//$('boxtext').addClass('animated slideInLeft');

//window.addEventListener("load", startanimation);
//const bigtext = document.getElementsByClassName('boxtext')
//const par = document.getElementsByClassName('par')
//const social = document.getElementsByClassName('social')






const model   ={

}

const octopus = {
  init: function () {
    leftside.init()

  }
  //intiante the whole page
  //load the flex box but not the text
  //load the annimation

}


const leftside = {

  init: function(){
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

  social[k].addEventListener('mouseover', function () {
    social[k].classList.add('mouseover')
 })
  }




}


  //load all the CLasses
  //loop through all the classes
  //add the animations to the looped classes

  //add event listners to the social icons
  //add animation when mouse over
  //add click when clicked
  //add url to new page


}

const rightside= {
  //add event listner to the the images
  //when the mouse hovers on add backdrop
}


octopus.init();
