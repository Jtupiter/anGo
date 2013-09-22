//randomly generate button image
$(document).ready(function(){
  var backgrounds = ["go1.png", "go2.png", "go3.png"];
  var count = backgrounds.length - 1;
  var random = backgrounds[getRandomInt(0, count)];
  $(".button").css('background-image', 'url("img/' + random + '")');
  //background-image: url("../img/go1.png");
});

//big button
$(document).ready(function(){
  $(".button").click(function(){
    $(".button").addClass("rollaway");
    $(".navicon").addClass("back");
    $(".content").removeClass("hidden");
  });
});

//show drawer
$(".navicon").click(function(){
  if ($(".navicon").hasClass("back")) { //go back to button/sorting
    $(".button").removeClass("rollaway");
    $(".navicon").removeClass("back");
    $(".content").addClass("hidden");
  } else { //else show drawer
    $('.body-frame').toggleClass('expanded');
  }
});

//load new option
$(".refresh").eq(0).click(function(){
  $(".content").eq(0).addClass("flipaway");
  setTimeout(function(){
    $(".content").eq(0).hide();
    $(".content").eq(1).removeClass("slidein");
  }, 600);
});

//random bumber between range
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}