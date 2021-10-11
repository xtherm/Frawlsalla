$(document).ready(function () {
  $(".next").click(() => {
    console.log("test");
    let currentImg = $(".show");

    let nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("show").css("z-index", -10);
      nextImg.addClass("show").css("z-index", 10);
    }
  });

  $(".prev").click(() => {
    let currentImg = $(".show");
    let prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("show").css("z-index", -10);
      prevImg.addClass("show").css("z-index", 10);
    }
  });
});
