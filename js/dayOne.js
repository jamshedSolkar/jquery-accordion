$(document).ready(function () {
  /*Accordion Starts*/
  $('.accordion__head').click(function () {
    if ($(this).parent().hasClass('active')) {
      $('.accordion__box').removeClass('active');
    } else {
      $('.accordion__box').removeClass('active');
      $(this).parent().addClass('active');
    }
  });

  $('.accordion__button').click(function (e) {
    e.stopPropagation();
    if ($(this).parents().hasClass('active')) {
      alert('Accordion is open');
    } else {
      alert('Accordion is close');
    }
  });
  /*Accordion Ends*/
});