// $(".landing").click(function () { //点击获取三输入值

//   let name = $(".inputText").val(); //获取账号
//   let pwd = $(".password").val(); //获取密码
//   $.ajax({
//     type: "POST", //请求方式
//     url: "/carrots-admin-ajax/a/login", //请求发送地址
//     data: "name=" + name + "&pwd=" + pwd,
//     success: function (e) { //success请求后回调函数
//          let a = JSON.parse(e);

//          console.log(a);
          
//                 if(a.code == 0){
//                   location.href = "http://javascript.ruanyifeng.com/bom/ajax.html";
//                 }
//                 else {
//                   alert("密码或者账号错误");
          
//                   //这个是错误的时候打印出来
//                 }
//               }
    

//   });

// });
//获取账号
var inputText = document.getElementsByClassName("inputText")[0];
//获取密码
var password = document.getElementsByClassName("password")[0];
var landing = document.getElementsByClassName("landing")[0];
landing.onclick = function one() {
  var name = inputText.value;
  var pwd = password.value;
  var xhr = new XMLHttpRequest();
 
  xhr.onreadystatechange = function () {
    console.log(xhr);
    //onreadystatechange属性是一个监听函数
    if (xhr.readyState === 4) { //这个是表示后代处理完成了
      //当通信成功的时候
    
      var resp = JSON.parse(xhr.response);
    
      if (xhr.status === 200) { //表示出来结果是正确的
        //当通信成功比较是否相等余200
        console.log(xhr.responseText);
        //打印出来
      }  
      if(resp.code == 0){
        
       console.log("登陆成功")
      }
      else {
        console.error(xhr.status);
        alert("密码或者账号错误");

        //这个是错误的时候打印出来
      }
    }
  }
  //向服务器发送请求
  xhr.open("POST", "/carrots-admin-ajax/a/login")
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("name=" + name + "&pwd=" + pwd);

};

