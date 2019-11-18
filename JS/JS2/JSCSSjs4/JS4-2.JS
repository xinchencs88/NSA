
//读取数据
var playerNumber = JSON.parse(sessionStorage.getItem("playerNumber"));
var  deathToll = JSON.parse(sessionStorage.getItem("deathToll"))
var cs = sessionStorage.getItem("cs")
var civilian = JSON.parse(sessionStorage.getItem("civilian"));
var killer = JSON.parse(sessionStorage.getItem("killer"));
var a001 = JSON.parse(sessionStorage.getItem("a001"));
var a002 = JSON.parse(sessionStorage.getItem("a002"));
console.log(deathToll);
console.log(playerNumber);
console.log(cs);
console.log(a001);//平民数量
console.log(a002);//杀手数量
var a ;//鼠标选择指定函数的返回值
console.log(a);
var main = $(".main");
var html = "";
for (let i = 0; i < playerNumber.length; i++) {
  html += ` <div class="wrap-box">
            <div class="B-box">
            <div class="B-font">${playerNumber[i].name}</div>
            <div class="B-number">${i+1}号</div>
        </div>
        <div class="img-warp-w100">
        <img class="img-sharp" src="JSCSSjs4/刀.png" >
    </div>
    </div>`;
}
main.append(html);
// ----------------顶部
$("#one").click(function () {
  window.location.href = "JS3-1.html";
});
$("#two").click(function () {
  window.location.href = "JS1-1.html";
});
// ---------------------------
// ----------主体内容--------------
$(".img-sharp").hide(); //隐藏刀
$(".B-box").click(function divcolor(e) {
   a = $(".B-box").index($(this));
  // ----当你要换一个平民选择的时候重新刷新
  for(let i = 0;i <playerNumber.length;i++){
    if(playerNumber[i].death == true)
    $(".B-font").eq(i).css("background-color", "#f5c97b");
    $(".img-sharp").hide();
  }
 if(cs % 2 == 0){//判断是杀手杀人还是投票
   if(playerNumber[a].death == true){
     $(".B-font").eq(a).css("background-color", "#7f8c8d");
     $(".img-sharp").eq(a).show("");//显示刀
   } else {
         alert("它已经死了");
   }
 } else {
  if (playerNumber[a].name == "民兵" && playerNumber[a].death == true) {
    //判断是平民还是杀手
    //点击显示出刀改变背景颜色
    $(".B-font").eq(a).css("background-color", "#7f8c8d");
    $(".img-sharp").eq(a).show("");//显示刀
  } else if(playerNumber[a].name == "杀手" && playerNumber[a].death == true){
    alert("杀手不能自杀");
  }else if(playerNumber[a].death == false){
  alert("它已经死了");
  }
 }
  // ------------
});
// -----------------
for(let i = 0;i <playerNumber.length;i++){//修改死亡的颜色
  if(playerNumber[i].death == false)
  $(".B-font").eq(i).css("background-color", "#7f8c8d");
}
function ghost(){
  //修改生死状态
   playerNumber[a].death = false;
   deathToll.push(playerNumber[a]);

       if( playerNumber[a].name == "杀手"){
          playerNumber[a].death = false;
          a001.push(playerNumber[a]);
       } else{
        playerNumber[a].death = false;
        a002.push(playerNumber[a]);
       }
   }
$(".button").click(function () {
  
  
  if(playerNumber[a].death == true){
    window.location.href = "JS4-1.html";
  } else {
  
    alert("它已经死了,不能在杀一次");
  }
  ghost();
  sqlServr();
  victory();
});

// 储存当前数据
function sqlServr() {
  sessionStorage.setItem("playerNumber",JSON.stringify(playerNumber));
  sessionStorage.setItem("deathToll",JSON.stringify( deathToll));
  sessionStorage.setItem("a001",JSON.stringify( a001));
  sessionStorage.setItem("a002",JSON.stringify( a002));
  console.log(a001);
}
// -----------
// ------判断胜利条件
function victory(){
  console.log(a001);
   if(  killer.length == a001.length){
   alert("平民胜利");
   window.location.href = "JS4-3.html";
 }
 if(civilian.length == a002.length ){
  alert("杀手胜利");
  window.location.href = "JS4-3.html";
 }
}


