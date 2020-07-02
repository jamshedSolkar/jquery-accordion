$(document).ready(function () {
  /*Accordion Starts*/
  $(".accordion__button").click(function (e) {
    e.stopPropagation();
  });

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
  /*Accordion Ends*/

  /*Array Sum Starts*/
  function calcArray(valueArray) {
    var totalArray = 0;
    for (var i = 0; i < valueArray.length; i++) {
      totalArray += Number(valueArray[i]);
    }
    return totalArray;
  }
  console.log(calcArray([05, 10, 89]));
  /*Array Sum Ends*/

  /*Mouse click cords and smooth animation start*/

  // var y = event.pageY();
  $(window).mousedown(function (event) {
    var x = event.pageX;
    var y = event.pageY;
    $('.mouseCord-box').animate({
      left: (x),
      top: (y)
    }, 1000);
  });
  /*Mouse click cords and smooth animation end*/

});