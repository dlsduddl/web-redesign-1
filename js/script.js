console.clear();
console.clear();

// 메뉴바 호버시 컬러변경
$(".menu-bar > nav > ul").mouseenter(function(){
  $(".top-bar").addClass("active");
});
$(".menu-bar > nav > ul").mouseleave(function(){
  $(".top-bar").removeClass("active");
});