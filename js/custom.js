
var runEff1 = 1;
var runEff2 = 1;
var runEff3 = 1;
var runEffAllThree = 1;

// This is an example of the use of an effect (slide) in jquery ui.
// We ca ntry other effects: https://jqueryui.com/effect/
function runEffect1() {
  $( "#effect1" ).effect( "slide", {}, 500 );
};

function runEffect2() {
  $( "#effect2" ).effect( "slide", {}, 1000 );
};

function runEffect3() {
  $( "#effect3" ).effect( "slide", {}, 1500 );
};


$(window).scroll(function() {
  $(window).on("scroll");
  if ($(window).width() > 990) {
    if ($(window).scrollTop() > 2000) {
      $("#fadein-left-2").css({
            'visibility': 'visible' });
      $("#fadein-right-2").css({
            'visibility': 'visible' });
      $("#fadein-left-2").fadeTo(800, 1);
      $("#fadein-right-2").fadeTo(1200, 1);
    }
    if ($(window).scrollTop() > 900) {
      $("#fadein-left").css({
            'visibility': 'visible' });
      $("#fadein-right").css({
            'visibility': 'visible' });
      $("#fadein-left").fadeTo(800, 1);
      $("#fadein-right").fadeTo(1200, 1);
    }
    if (($(window).scrollTop() > 250) && (runEffAllThree)) {
      runEffect1();
      runEffect2();
      runEffect3();
      runEffAllThree = 0;
    }
  }

  if ($(window).width() <= 990) {
    if ($(window).scrollTop() > 3500) {
      $("#fadein-left-2").css({
            'visibility': 'visible' });
      $("#fadein-left-2").fadeTo(800, 1);
    }
    if ($(window).scrollTop() > 4000) {
      $("#fadein-right-2").css({
            'visibility': 'visible' });
      $("#fadein-right-2").fadeTo(800, 1);
    }

    if ($(window).scrollTop() > 1500) {
      $("#fadein-left").css({
            'visibility': 'visible' });
      $("#fadein-left").fadeTo(800, 1);
    }
    if ($(window).scrollTop() > 2000) {
      $("#fadein-right").css({
            'visibility': 'visible' });
      $("#fadein-right").fadeTo(800, 1);
    }
    if (($(window).scrollTop() > 430) && (runEff3)) {
      runEffect3();
      runEff3 = 0;
    } else {
      if (($(window).scrollTop() > 280) && (runEff2)) {
        runEffect2();
        runEff2 = 0;
      } else {
        if (($(window).scrollTop() > 80) && (runEff1)) {
          runEffect1();
          runEff1 = 0;
        }
      }
    }
  }
});
