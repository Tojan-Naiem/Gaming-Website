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

// تهيئة Swiper
const swiper = new Swiper('.swiper', {
    loop: true, // تكرار الـ slides
    // pagination: {
    //     el: '.swiper-pagination', // النقاط
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next', // زر التالي
        prevEl: '.swiper-button-prev', // زر السابق
    },
    on: {
        // تغيير الخلفية عند تغيير الـ slide
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
    effect: 'slide', // تأثير التلاشي
  
    speed: 1000, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
});