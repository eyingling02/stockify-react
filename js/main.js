$(document).ready(function () {
  $("div.inner").click(function() {
    $($(this).parent()["0"].firstChild.nextElementSibling).one(replaceWith($("div.inner h2")[0]))

    // $("div.inner h2")[0]
    // $("div.inner h2")[1]
    // $("div.sell").hide()
  })
})
