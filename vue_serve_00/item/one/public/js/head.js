$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(result){ 
      console.log(result)
      $(result).replaceAll
      ("header");
      $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head");
      $(`<link rel="stylesheet" href="./css/comm.css">`).appendTo("head");
    }
  })
})