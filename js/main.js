$(document).ready(function () {
  $(".accordion__button").click(function (e) {
    e.stopPropagation();
  });

  // accordion open/close with alert
  $('.accordion__head').click(function () {
    if ($(this).parent().hasClass('active')) {
      $('.accordion__box').removeClass('active');
    } else {
      $('.accordion__box').addClass('active');
    }

    if ($('.accordion__box').hasClass('active')) {
      $('.accordion__box').removeClass('active');
      $(this).parent().addClass('active');
    }
  });

  $('.accordion__button').click(function () {
    if ($(this).parents().hasClass('active')) {
      alert('Accordion is open');
    } else {
      alert('Accordion is close');
    }
  });
});