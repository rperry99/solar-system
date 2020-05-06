let mercuryDistance = 33410930;
let venusDistance = 67005613;
let earthDistance = 97537786;
let marsDistance = 134358550;
let jupiterDistance = 481982300;
let saturnDistance = 931567960;
let uranusDistance = 1934447770;
let neptuneDistance = 2782262934;
let plutoDistance = 3162997780;

function calculateKM(numInMiles) {
  return (numInMiles / 5) * 8;
}
function calculateMI(numInKilometers) {
  return (numInKilometers / 8) * 5;
}

console.log(calculateKM(mercuryDistance));

$(document).ready(function () {
  $("#mercuryDistance").html(mercuryDistance.toLocaleString("en"));
  $("#venusDistance").html(venusDistance.toLocaleString("en"));
  $("#earthDistance").html(earthDistance.toLocaleString("en"));
  $("#marsDistance").html(marsDistance.toLocaleString("en"));
  $("#saturnDistance").html(saturnDistance.toLocaleString("en"));
  $("#jupiterDistance").html(jupiterDistance.toLocaleString("en"));
  $("#uranusDistance").html(uranusDistance.toLocaleString("en"));
  $("#neptuneDistance").html(neptuneDistance.toLocaleString("en"));
  $("#plutoDistance").html(plutoDistance.toLocaleString("en"));

  let tempDist = 0; //This is to temporarily hold the distance before setting it back to the planet's disnance.

  $(".planet-distance").click(function () {
    let currentUnit = $(this).html();
    if (currentUnit === "MI") {
      $(this).html("KM");
      switch ($(this).prev().attr("id")) {
        case "mercuryDistance":
          tempDist = calculateKM(mercuryDistance);
          mercuryDistance = tempDist;
          $("#mercuryDistance").html(mercuryDistance.toLocaleString("en"));
          break;
        case "venusDistance":
          tempDist = calculateKM(venusDistance);
          venusDistance = tempDist;
          $("#venusDistance").html(venusDistance.toLocaleString("en"));
          break;
        case "earthDistance":
          tempDist = calculateKM(earthDistance);
          earthDistance = tempDist;
          $("#earthDistance").html(earthDistance.toLocaleString("en"));
          break;
        case "marsDistance":
          tempDist = calculateKM(marsDistance);
          marsDistance = tempDist;
          $("#marsDistance").html(marsDistance.toLocaleString("en"));
          break;
        case "jupiterDistance":
          tempDist = calculateKM(jupiterDistance);
          jupiterDistance = tempDist;
          $("#jupiterDistance").html(jupiterDistance.toLocaleString("en"));
          break;
        case "saturnDistance":
          tempDist = calculateKM(saturnDistance);
          saturnDistance = tempDist;
          $("#saturnDistance").html(saturnDistance.toLocaleString("en"));
          break;
        case "uranusDistance":
          tempDist = calculateKM(uranusDistance);
          uranusDistance = tempDist;
          $("#uranusDistance").html(uranusDistance.toLocaleString("en"));
          break;
        case "neptuneDistance":
          tempDist = calculateKM(neptuneDistance);
          neptuneDistance = tempDist;
          $("#neptuneDistance").html(neptuneDistance.toLocaleString("en"));
          break;
        case "plutoDistance":
          tempDist = calculateKM(plutoDistance);
          plutoDistance = tempDist;
          $("#plutoDistance").html(plutoDistance.toLocaleString("en"));
          break;
        default:
          break;
      }
    } else if (currentUnit === "KM") {
      $(this).html("MI");
      switch ($(this).prev().attr("id")) {
        case "mercuryDistance":
          tempDist = calculateMI(mercuryDistance);
          mercuryDistance = tempDist;
          $("#mercuryDistance").html(mercuryDistance.toLocaleString("en"));
          break;
        case "venusDistance":
          tempDist = calculateMI(venusDistance);
          venusDistance = tempDist;
          $("#venusDistance").html(venusDistance.toLocaleString("en"));
          break;
        case "earthDistance":
          tempDist = calculateMI(earthDistance);
          earthDistance = tempDist;
          $("#earthDistance").html(earthDistance.toLocaleString("en"));
          break;
        case "marsDistance":
          tempDist = calculateMI(marsDistance);
          marsDistance = tempDist;
          $("#marsDistance").html(marsDistance.toLocaleString("en"));
          break;
        case "jupiterDistance":
          tempDist = calculateMI(jupiterDistance);
          jupiterDistance = tempDist;
          $("#jupiterDistance").html(jupiterDistance.toLocaleString("en"));
          break;
        case "saturnDistance":
          tempDist = calculateMI(saturnDistance);
          saturnDistance = tempDist;
          $("#saturnDistance").html(saturnDistance.toLocaleString("en"));
          break;
        case "uranusDistance":
          tempDist = calculateMI(uranusDistance);
          uranusDistance = tempDist;
          $("#uranusDistance").html(uranusDistance.toLocaleString("en"));
          break;
        case "neptuneDistance":
          tempDist = calculateMI(neptuneDistance);
          neptuneDistance = tempDist;
          $("#neptuneDistance").html(neptuneDistance.toLocaleString("en"));
          break;
        case "plutoDistance":
          tempDist = calculateMI(plutoDistance);
          plutoDistance = tempDist;
          $("#plutoDistance").html(plutoDistance.toLocaleString("en"));
          break;
        default:
          break;
      }
    }
  });

  // Activate scrolling animations
  $(function () {
    var $window = $(window),
      win_height_padded = $window.height() * 1.1;
    //   isTouch = Modernizr.touch;
    // if (isTouch) {
    //   $(".revealOnScroll").addClass("animated");
    // }
    $window.on("scroll", revealOnScroll);
    function revealOnScroll() {
      var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;
      $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
          offsetTop = $this.offset().top;
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
          offsetTop = $this.offset().top;
        if (scrolled + win_height_padded < offsetTop) {
          $(this).removeClass("animated fadeInLeft fadeInRight");
        }
      });
    }
  });
});
