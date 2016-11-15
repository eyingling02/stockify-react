

$(document).ready( function(){

  console.log('ehllo')

  $("div.outer").click(function(){
    console.log('outer')
    $(this).blur(function(){
      alert()
  })
  })
})


    // $($(this).parent()["0"].firstChild.nextElementSibling).one(replaceWith($("div.inner h2"))
