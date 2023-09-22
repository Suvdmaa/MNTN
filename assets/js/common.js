$(".quick a").on("click", function () {
  $(this).parents(".quick").find("a").removeClass("active");
  $(this).addClass("active");
});
AOS.init();