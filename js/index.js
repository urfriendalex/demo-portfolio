var $circle = $('.circle'),
    $links = $('.projects ul li a'),
    $section= $('.projects');

  function moveCircle(e) {
    TweenLite.to($circle, 0.01, {
      css: {
        left: e.pageX,
        top: e.pageY
      }
    });
  }

$($links).mouseover(function(){
  TweenLite.to($circle,0.1,{scale:2.4})
});
$($section).on('mousemove', moveCircle);
$($links).mouseout(function(){
    TweenLite.to($circle,0.1,{scale:0.8})
});
$(".exit").mouseout(function(){
    TweenLite.to($circle,0.1,{scale:0.8})
});
$('.exit').mouseover(function(){
    TweenLite.to($circle,0.1,{scale:2})
});


$(".btn-wrapper a").click(function(){
    $($section).toggleClass("visible");
});

$('.exit').click(function(){
    $($section).toggleClass("visible");
})