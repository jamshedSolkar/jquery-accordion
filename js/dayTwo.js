$(document).ready(function () {
  /*Array Sum Starts*/
  function calcArray(valueArray) {
    var totalArray = 0;
    for (var i = 0; i < valueArray.length; i++) {
      totalArray += valueArray[i];
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
    $('.mouseCord-box').css({
      left: (x),
      top: (y)
    });
  });
  /*Mouse click cords and smooth animation end*/
});