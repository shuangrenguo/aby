/*(function(){
  $("#uname").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#uname").blur(function(){
  if($(this).val().length=="0"){
    $(this).parent().next().html("用户名格式错误");
    $(this).parent().next().addClass("to");
  }else{
    $(this).parent().next().addClass("up");
  }
  });

  $("#upwd").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#upwd").blur(function(){
  if($(this).val().length=="0"){
    $(this).parent().next().html("密码格式错误");
    $(this).parent().next().addClass("to");
  }else{
    $(this).parent().next().addClass("up");
  }
  });

  $("#Upwd").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#Upwd").blur(function(){
  if($(this).val().length=="0"){
    $(this).parent().next().html("密码和上次不同");
    $(this).parent().next().addClass("to");
  }else{
    $(this).parent().next().addClass("up");
  }
  });

  $("#email").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#email").blur(function(){
  if($(this).val().length=="0"){
    $(this).parent().next().html("邮箱格式错误");
    $(this).parent().next().addClass("to");
  }else{
    $(this).parent().next().addClass("up");
  }
  });

  $("#phone").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#phone").blur(function(){
  if($(this).val().length!="11"){
    $(this).parent().next().html("电话号码格式错误");
    $(this).parent().next().addClass("to");
  }else{
    $(this).parent().next().addClass("up");
  }
  });
})()*/

(function(){
  $("#uname").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#uname").blur(function(){
    var _uname=/^[A-Za-z]{6,12}$/;
    var $uname=$("#uname").val();
   if($(this).val().length=="0"){
    $(this).parent().next().html("用户名不能为空");
    $(this).parent().next().addClass("to");
   }else if(_uname.test($uname)==false)
   {
     console.log($(this).val());
    $(this).parent().next().html("用户名格式错误");
    $(this).parent().next().addClass("to");
   }else{
      // $.ajax({//发送ajax判断是否用户重名
  //   url:"http://127.0.0.1:8080/pro/reg",
  //   type:"post",
  //   data:{uname:$("#uname").val()},
  //   success:function(result){
  //     // alert(result);
  //     var logindata = JSON.parse(result);
  //     // console.log(logindata);
  //     if(logindata ==true){
  //       $("uname").parent().next().html("用户名已存在");
  //       $("button").prop("disabled",true);//重名禁用按钮
  //     }else if(logindata ==false){
  //       $("button").prop("disabled",false);//不重名清除之前禁用的disabled
  //     }
  //   }
  // });
     function regCheck(){
      var u_name=uname.value;
      var xhr=new XMLHttpRequest();
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
          var result=xhr.responseText;
          if(result==true){
            $(this).parent().next().removeClass("to");
            $(this).parent().next().addClass("up");
            //$("button").prop("disabled",false);
          }else{
            $(this).parent().next().html("用户名已存在请重新输入");
            //$("button").prop("disabled",true);
          }
        }
      }
     }
   }
  });
  $("#upwd").focus(function(){
    $(this).parent().next().removeClass("up");
  })
  $("#upwd").blur(function(){
    var _uname=/^\d{6,8}$/
    var $uname=$("#upwd").val();
   if($(this).val().length=="0"){
    $(this).parent().next().html("密码不能为空");
    $(this).parent().next().addClass("to");
  }else if(_uname.test($uname)==false)
  {
    $(this).parent().next().html("密码格式错误");
    $(this).parent().next().addClass("to");
  }else{
    $(this).parent().next().removeClass("to");
    $(this).parent().next().addClass("up");
  }
});
$("button").onclick=function reg(){
  $.ajax({
    url:"http://127.0.0.1:8080/pro/reg",
    type:"post",
    data:{uname:$("#uname").val(),upwd:$("#upwd").val(),Upwd:$("#Upwd").val(),email:$("#email").val(),phone:$("#phone").val()},
    success:function(result){
      var logindata = JSON.parse(result);
      if(logindata == true){
        location.href="http://127.0.0.1:8080/login.html";
      }
    }
  })
}
  

    

})() 

  // $.ajax({//发送ajax判断是否用户重名
  //   url:"http://127.0.0.1:8080/pro/reg",
  //   type:"post",
  //   data:{uname:$("#uname").val()},
  //   success:function(result){
  //     // alert(result);
  //     var logindata = JSON.parse(result);
  //     // console.log(logindata);
  //     if(logindata ==true){
  //       $("uname").parent().next().html("用户名已存在");
  //       $("button").prop("disabled",true);//重名禁用按钮
  //     }else if(logindata ==false){
  //       $("button").prop("disabled",false);//不重名清除之前禁用的disabled
  //     }
  //   }
  // });


  //   $.ajax({
  //     url:"http://127.0.0.1:8080/pro/regCheck",
  //     type:"post",
  //     data:{uname:$("#uname").val(),upwd:$("#upwd").val(),Upwd:$("#Upwd").val(),email:$("#email").val(),phone:$("#phone").val()},
  //     success:function(result){
  //   // alert(result);
  //       var logindata = JSON.parse(result);
  //           // console.log(logindata);
  //       if(logindata == false){
  //   // $("#change_margin_2").children(":nth-child(4)").removeClass("info")
  //       alert("注册失败");
  //       }else if (logindata == true) {
  //         location.href="http://127.0.0.1:8080/login.html";
  //   //alert("done");
  //       }
  //     }
  //   });

 
  // $.ajax({//发送ajax判断是否用户重名
  //   url:"http://127.0.0.1:8080/pro/regCheck",
  //   type:"post",
  //   data:{uname:$("#uname").val()},
  //   success:function(result){
  //     // alert(result);
  //     var logindata = JSON.parse(result);
  //     // console.log(logindata);
  //     if(logindata ==true){
  //       // $("#change_margin_2").children(":nth-child(4)").removeClass("info")
  //       $("button").prop("disabled",true);//重名禁用按钮
  //     }else if(logindata ==false){
  //       $("button").prop("disabled",false);//不重名清除之前禁用的disabled
  //     }
  //   }
  // });

// (function(){
//   $.ajax({
//                     url:"http://127.0.0.1:8080/use/userRegister",
//                     type:"post",
// 					data:{uname:$("input.name-input").val(),upwd:$("input.pwd-input").val(),email:$("input.email-input").val(),birthday:$("input.born-input").val()},
// 					success:function(result){
// 						// alert(result);
//                         var logindata = JSON.parse(result);
//                         // console.log(logindata);
// 						if(logindata == false){
// 							// $("#change_margin_2").children(":nth-child(4)").removeClass("info")
// 							alert("注册失败");
// 						}else if (logindata == true) {
// 							location.href="http://127.0.0.1:8080/login.html";
// 							//alert("done");
// 						}
// 					}
// 				});
// })()
// (function(){
//   $.ajax({
//     url:"http://127.0.0.1:8080/use/reg",
//     type:"post",
//     data:{uname:$("#uname").val(),upwd:$("#upwd").val(),Upwd:$("#Upwd").val(),email:$("#email").val(),phone:$("#phone").val()},
//     success:function(result){
//   // alert(result);
//       var logindata = JSON.parse(result);
//           // console.log(logindata);
//       if(logindata == false){
//   // $("#change_margin_2").children(":nth-child(4)").removeClass("info")
//       alert("注册失败");
//       }else if (logindata == true) {
//         location.href="http://127.0.0.1:8080/login.html";
//   //alert("done");
//       }
//     }
//   });
// })()