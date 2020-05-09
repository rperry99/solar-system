function calculateKM(numInMiles) {
  return (numInMiles / 5) * 8;
}
function calculateMI(numInKilometers) {
  return (numInKilometers / 8) * 5;
}

$(document).ready(function () {
  //Set the inital planet distances
  $(".planetDist").html(
    parseInt($(".planetDist").attr("data-distance")).toLocaleString("en")
  );

  //Click event when clicking on km/mi
  $(".planet-distance").click(function () {
    let currentUnit = $(this).html();
    if (currentUnit === "MI") {
      $(this).html("KM");
      let currentNum = parseInt($(this).prev().attr("data-distance"));
      let conversion = calculateKM(currentNum);
      $(this).prev().attr("data-distance", conversion);
      $(this).prev().html(conversion.toLocaleString("en"));
    } else if (currentUnit === "KM") {
      $(this).html("MI");
      let currentNum = parseInt($(this).prev().attr("data-distance"));
      let conversion = calculateMI(currentNum);
      $(this).prev().attr("data-distance", conversion);
      $(this).prev().html(conversion.toLocaleString("en"));
    }
  });

  // Activate scrolling animations
  $(function () {
    var $window = $(window),
      win_height_padded = $window.height() * 1.1;
    $window.on("scroll", revealOnScroll);
    function revealOnScroll() {
      var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;
      $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
          offsetTop = $this.offset().top + 100;
        if (scrolled + win_height_padded > offsetTop) {
          if ($this.data("timeout")) {
            window.setTimeout(function () {
              $this.addClass("animated " + $this.data("animation"));
            }, parseInt($this.data("timeout"), 10));
          } else {
            $this.addClass("animated " + $this.data("animation"));
          }
        }
      });
      $(".revealOnScroll.animated").each(function (index) {
        var $this = $(this),
          offsetTop = $this.offset().top + 100;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass("animated fadeInLeft fadeInRight");
        }
      });
    }
  });
});
