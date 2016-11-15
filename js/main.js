

$(document).ready( function(){

  console.log('ehllo')

  $("button").click(function(){
      $("div").animate({left: '250px'});
  });

  $("div.outer").click(function(){
    console.log('outer')
    $(this).blur(function(){
      alert()
  })
  })
})


    // $($(this).parent()["0"].firstChild.nextElementSibling).one(replaceWith($("div.inner h2"))
