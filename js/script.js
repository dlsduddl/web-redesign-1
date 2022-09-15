console.clear();

// 메뉴바 호버시 컬러변경
$(".menu-bar > nav > ul").mouseenter(function(){
  $(".top-bar").addClass("active");
});
$(".menu-bar > nav > ul").mouseleave(function(){
  $(".top-bar").removeClass("active");
});


// 배너 스와이퍼
function SliderBox1__init() {
  const swiper = new Swiper(".slider-box-1 .swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".slider-box-1 .swiper-pagination"
    },

    // Navigation arrows
    navigation: {
      nextEl: ".slider-box-1 .swiper-button-next",
      prevEl: ".slider-box-1 .swiper-button-prev"
    }
  });
}

SliderBox1__init();