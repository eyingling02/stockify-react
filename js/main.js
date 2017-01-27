$(document).ready( function(){
  //Select Buy
  $(".buy").click(function() {
    // $(this).css("background-color", "green")
    $(this).css("background-color", "darkgreen")

    var a = $(this).children()
    $(a).css("color", "white")
    var sell = $(this).siblings()[1]
    $(sell).children().css("color", "white")
    $(sell).children().html("BUY")
    // $(sell).css("background-color", "green")
    $(sell).css("background-color", "darkgreen")

    var outer = $(this).parent()
    var inner = $(this).next()
    // $(outer).css("background", "white")
    $(outer).css("background", "white")
    // $(outer).css("border", "5px solid green")
    $(outer).css("border", "5px solid darkgreen")
    $(inner).children().css("color", "#004571")
    // $(inner).children().css("color", "#c5b358")
  })

  //Select Sell
  $(".sell").click(function() {
    $(this).css("background-color", "red")

    var a = $(this).children()
    $(a).css("color", "white")

    var sell = $(this).siblings()[0]
    $(sell).children().css("color", "white")
    $(sell).children().html("SELL")
    $(sell).css("background-color", "red")

    var outer = $(this).parent()
    var inner = $(this).prev()
    // $(outer).css("background", "white")
    $(outer).css("background", "white")
    $(outer).css("border", "5px solid red")
    $(inner).children().css("color", "#004571")
    // $(inner).children().css("color", "#c5b358")
  })

  // $( ".sortable" ).sortable();
  // $( ".sortable" ).disableSelection();

  // var shine = new Shine(document.getElementById('shine'));
})
