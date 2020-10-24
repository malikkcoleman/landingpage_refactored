var doc = document.documentElement;
var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
const nav = document.querySelector('nav');
const scrollTop = document.querySelector('.scrollBtn');
const links = document.querySelector('nav .links');



function test(){

    function myFunction(x) {
        if (x.matches) { 
            nav.className = "nav-solid";
        } else {
            console.log(pageYOffset);
            if(pageYOffset==0){
                nav.className = "nav-transparent";
                scrollTop.id = "opacity-hide";
            }
            else if(pageYOffset>20){
                nav.className = "nav-solid";
                scrollTop.id = "opacity-show";
            }
        }
    }
    if(pageYOffset==0){
        scrollTop.id = "opacity-hide";
    }
    else if(pageYOffset>20){
        scrollTop.id = "opacity-show";
    }
    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x) 
    x.addListener(myFunction) //
    
}



var menuToggle = "off";
const menuBtn = document.querySelector('#menuBtn');
const navigationList = document.querySelector('.navigationList');

function sidemenu(){
    if(menuToggle=="off"){
        menuBtn.className="fas fa-times fa-2x";
        navigationList.style = "height:205px;padding:0px 0 0px 0;transition:0.5s;";
        menuToggle="on"
    }else{
        menuBtn.className="fas fa-bars fa-2x";
        menuToggle="off"
        navigationList.style = "height:0px;padding:0px 0 0px 0;transition:0.5s;";
    }
}
