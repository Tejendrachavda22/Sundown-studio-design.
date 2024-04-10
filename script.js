const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});


function page3animation(){

    var elemc = document.querySelector(".elem-container");
    var fixed = document.querySelector(".fix-image")
    elemc.addEventListener("mouseenter",function(){
        fixed.style.display = "block";
    })
    
    elemc.addEventListener("mouseleave",function(){
        fixed.style.display = "none";
    })
    
    var a = document.querySelectorAll(".elem");
    a.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var b =  e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${b})`
        })  
    })
    
};

page3animation();

function swiperanimation(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
});
};
swiperanimation();

function menu()
{

    var menu = document.querySelector('.nav h3')
    var front = document.querySelector('.fullscr h3')
var full = document.querySelector(".fullscr")
var navimg = document.querySelector(".nav img")
var flag = 0;
menu.addEventListener("click",function(){
    
    if (flag == 0) {
        
        full.style.top = 0
        navimg.style.opacity = 0 
        flag = 1
        front.style.display = "block"
        menu.style.opacity = 0
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        menu.style.opacity = 1
        flag = 0
    }
})

front.addEventListener("click",function(){
    
    if (flag == 0) {
        
        full.style.top = "-100%"
        navimg.style.opacity = 1 
        menu.style.opacity =1
        flag = 1
    } else {
        full.style.top = 0
        navimg.style.opacity = 0
        flag = 0
    }
})

};
menu();

function loader()
{
    var loader = document.querySelector(".loader")
    setTimeout(function(){
        loader.style.top = "-100%"  
    },4200)
};
loader();