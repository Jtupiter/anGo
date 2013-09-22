//big button
$(document).ready(function(){
  $(".content").not(":eq(0)").hide(); //hide initial 
  $(".button").click(function(){
    $(".button").addClass("rollaway");
    $(".navicon").addClass("back");
    $(".content").removeClass("hidden");
    $(".pulse").hide();
  });
});

//show drawer
$(".navicon").click(function(){
  if ($(".navicon").hasClass("back")) {
    refresh();
  } else { //else show drawer
    $('.body-frame').toggleClass('expanded');
  }
});

//load new option
$(".refresh").click(function(){
  refresh();
});

//global counter
var counter = 0;

//refresh function
function refresh() {
  var index = counter;
  randomizebutton();
  $(".button").removeClass("rollaway");
  $(".navicon").removeClass("back");
  $(".content").addClass("hidden");
  setTimeout(function(){
    $(".pulse").fadeIn(400);
    $(".content").eq(index).hide();
    if (index !== 2) {
      $(".content").eq(index+1).show();
      window.counter++
    } else if (index === 2) {
      $(".content").eq(0).show();
      window.counter = 0
    }
  }, 600);
}

function randomizebutton() {
  //var backgrounds = ["go1.png", "go2.png", "go3.png"];
  //var count = backgrounds.length - 1;
  //var random = backgrounds[getRandomInt(0, count)];
  //$(".button").css('background-image', 'url("img/' + random + '")');
  $(".button").css('background-image', 'url("img/go2.png")');
}
//random bumber between range
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}