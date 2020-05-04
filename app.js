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

  console.log("Pluto Distance", $("#plutoDistance").html());

  $(".planet-distance").click(function () {
    let currentUnit = $(this).html();
    let currentNum = $(this).prev().text();
    if (currentUnit === "MI") {
      $(this).html("KM");
      //   currentNum.replace(/,/g, "");
      console.log(parseInt(currentNum));
      //   $(this).prev().html(calculateKM(currentNum));
    } else if (currentUnit === "KM") {
      $(this).html("MI");
      console.log(parseInt(currentNum));
    }
  });
});
