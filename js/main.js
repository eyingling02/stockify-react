$(document).ready( function(){
  console.log('ehllo')

  var shine = new Shine(document.getElementById('daily_pick'));

  console.log('shine')

  window.addEventListener('mousemove', function(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
  }, false);
})

//   $("div.outer").on("click", function(){
//     $("div.outer").blur()
//     console.log('outer')
//     console.log(this)
//     // $(this).on("blur", function() {
//     //   alert("hi")
//     // })
//   })
// })


    // $($(this).parent()["0"].firstChild.nextElementSibling).one(replaceWith($("div.inner h2"))
