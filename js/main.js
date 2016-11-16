$(document).ready( function(){
  console.log('ehllo')

  //Select Buy
  $(".buy").click(function() {
    console.log(this)
    $(this).css("background-color", "green")

    var a = $(this).children()
    $(a).css("color", "white")

    var sell = $(this).siblings()[1]
    $(sell).children().css("color", "white")
    $(sell).children().html("BUY")
    $(sell).css("background-color", "green")

    var outer = $(this).parent()
    var inner = $(this).next()
    $(outer).css("background", "white")
    $(outer).css("border", "5px solid green")
    $(inner).children().css("color", "green")
  })

  //Select Sell
  $(".sell").click(function() {
    console.log(this)
    $(this).css("background-color", "red")

    var a = $(this).children()
    $(a).css("color", "white")

    var sell = $(this).siblings()[0]
    $(sell).children().css("color", "white")
    $(sell).children().html("SELL")
    $(sell).css("background-color", "red")

    var outer = $(this).parent()
    var inner = $(this).prev()
    $(outer).css("background", "white")
    $(outer).css("border", "5px solid red")
    $(inner).children().css("color", "red")
  })

  var shine = new Shine(document.getElementById('shine'));

  console.log('shine')

  window.addEventListener('mousemove', function(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
  }, false);



  // function update() {
  //   window.requestAnimationFrame(update);
  //   var time = new Date().getTime();
  //   var speed = 0.00025;  // 1 = 1000 rotations/s
  //   var phase = time * speed * 2.0 * Math.PI;
  //   var radiusX = window.innerWidth * 0.5;
  //   var radiusY = window.innerHeight * 0.5;
  //   shine.light.position.x = radiusX + radiusX * Math.cos(phase);
  //   shine.light.position.y = radiusY + radiusY * Math.sin(phase * 0.7);
  //   shine.draw();
  // }
  //
  // update();
})


    // $($(this).parent()["0"].firstChild.nextElementSibling).one(replaceWith($("div.inner h2"))
