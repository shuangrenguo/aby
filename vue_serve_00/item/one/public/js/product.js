(function(){
  var btns=document.querySelectorAll(".footer_top>ul>li>a");
  var uls=document.querySelectorAll(".footer_bottom>ul");
  for(let a=0;a<btns.length;a++){
    btns[a].onclick=function(e){
      var btn=this;
      e.preventDefault();
      if(btn.className!="bg_open"){
        var lis=btn.parentNode.parentNode.children;
        for(let i=0;i<lis.length;i++){
          if(lis[i].children[0].className=="bg_open"){
            lis[i].children[0].className="";
            if(uls[a].className!="_open"){
              for(let ul of uls){
                ul.className=""
              }
              uls[a].className="_open";
            }
          };
        };
        btn.className="bg_open";
      }
    }
  }
})()
