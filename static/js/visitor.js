function login(){
    var xhr=createXhr();
    var name=null;
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res=JSON.parse(xhr.responseText);
            //console.log(xhr.responseText);
            //console.log(JSON.parse(xhr.responseText));
            name=res[0].vname;
            document.querySelector(
                "a.login"
              ).innerHTML=name;
            document.getElementById("login").style.display="none";
            var h1=document.createElement("h1");
            h1.innerHTML=`欢迎${name}浏览网页！`;
            h1.style.color="#BEFAE1"
            var form=document.getElementById("register").children[0];
            document.getElementById("register").replaceChild(h1,form);
        }
    }
    var vname=document.getElementById("vname").value;
    var vemail=document.getElementById("vemail").value;
    xhr.open("get","/visitor/lo?vname="+vname+"&email="+vemail,true);
    xhr.send(null);
    console.log(name);
}
function registe(){
    var xhr=createXhr();
    var vname=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var sendPara="vname="+vname+"&email="+email;
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        var res=xhr.responseText;
        document.querySelector(
            "a.login"
          ).innerHTML=vname;
          document.getElementById("login").style.display="none";
            var h1=document.createElement("h1");
            h1.innerHTML=`欢迎${name}浏览网页！`;
            h1.style.color="#BEFAE1"
            var form=document.getElementById("register").children[0];
            document.getElementById("register").replaceChild(h1,form);
      }
    }
    var url="/visitor/insert";
    xhr.open("post",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(sendPara);
  }
  function send(){
    var xhr=createXhr();
    var vname=document.querySelector("a.login").innerHTML;
    var comments=document.querySelector("#comment>textarea").value;
    var sendPara="comments="+comments+"&vname="+vname;
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        var res=xhr.responseText;
      }
    }
    var url="/visitor/update";
    xhr.open("post",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(sendPara);
  }
  function updateProfile(node){
    var xhr=createXhr();
    var vname=document.querySelector("a.login").innerHTML;
    var sendPara="vname="+vname;
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        var res=xhr.responseText;
        node[0].style.color="red";
        //console.log(node[0].children[0]);
      }
    }
    var url="/visitor/updateProfileLike";
    xhr.open("post",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(sendPara);
  }