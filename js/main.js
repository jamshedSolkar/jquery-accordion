$(document).ready(function () {
  // accordion open/close with alert
  $('.accordion__head').click(function () {
    $(".accordion__head button").click(function (button) {
      button.stopPropagation();
    });
    $('.accordion__head').click(function () {
      $(this).parent().addClass('active');
    });
    if ($('.accordion__box').hasClass('active')) {
      $('.accordion__box').removeClass('active');
      $(this).parent().addClass('active');
      $(this).parent().addClass('testClass');
    } 
    // else {
    //   $(this).parent().addClass('active');
    // }
  });

  $('button').click(function () {
    if ($(this).parents().hasClass('active')) {
      alert('Accordion is open');
    } else {
      alert('Accordion is close');
    }
  });
});