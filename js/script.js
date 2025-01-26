function openSidebar(){
    var sidebar= document.getElementById('mySidepanel');
    toggleBtn=document.getElementById('toggleBtn');
if(sidebar.style.left=='0px'){
    sidebar.style.left='-600px';
    toggleBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
}
else {
    sidebar.style.left='0';
    toggleBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
}
   
}
const header =document.getElementById('header');
var scroll=100;
window.addEventListener('scroll',() =>{
    if(window.scrollY>scroll){
        header.style.backgroundColor='#252629';
    }
    else {
        header.style.backgroundColor='transparent';
    
    }
    }
);


const swiper = new Swiper('.swiper', {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', 
    },
    on: {
        slideChange: function () {
            const heroSection = document.querySelector('.hero');
            const activeSlide = this.slides[this.activeIndex];
            const background = activeSlide.getAttribute('data-background');
            heroSection.style.backgroundImage = background;
        },
        init: function () {
            const heroSection = document.querySelector('.hero');
            const activeSlide = this.slides[this.activeIndex];
            const background = activeSlide.getAttribute('data-background');
            heroSection.style.backgroundImage = background;
        },
    },
    effect: 'slide', 
  
    speed: 1000, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
});