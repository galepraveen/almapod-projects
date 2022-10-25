$(document).ready(function(){
  $(".remove").click(function(){
    $("link").removeAttr("href");
  })
  $(".add").click(function(){
    $("link").attr("href", "style.css")
  })
  
  $(".hide").click(function(){
    $(".box2").hide()
  })
  $(".show").click(function(){
    $(".box2").show()
  })
  
  $(".btn").click(function(){
    $(".content").toggle("fast")
  })
  
})