var dd = JSON.parse(sessionStorage.getItem("key"));

console.log(dd);
// var numberX= 1; 
var m = $(".main");
var html ="";
for(let i = 0;i < dd.length; i++){
  html += `<div class="wrap-box">
  <div class="B-box">
      <div class="B-font">${dd[i]}</div>
      <div class="B-number">${i+1}号</div>
  </div>
</div>`;
}

m.append(html);
// ----------------顶部
$("#one").click(function(){
  window.location.href = "JS3-1.html";
});
$("#two").click(function(){
  window.location.href = "JS2-1.html";
});

$(".button").click(function(){
  //底部开始游戏跳转
  // -----------下一个页面的值
    var day = 1;//天数 
    var step = 1;//步骤
    var cs = 0;//判读eq第几个
    var y =[];
    var deathToll =[];//亡灵数组
    var a001 = []//杀手死亡数组
    var a002 = []//民兵死亡数组
    var number = 0;
    for (var i = 0; i < dd.length; i++) {
      if (dd[i] == "民兵") {
        y.push({
          name: "民兵",
          death: true,
          number:i+1,
        })
      } else {
        y.push({
          name: "杀手",
          death: true,
          number:i+1,
        })
      }
    }
    
 sessionStorage.setItem("deathToll",JSON.stringify( deathToll));
 sessionStorage.setItem("playerNumber",JSON.stringify(y));
 sessionStorage.setItem("day",day)
 sessionStorage.setItem("step",step);
 sessionStorage.setItem("cs", cs);
 sessionStorage.setItem("a001",JSON.stringify( a001));
  sessionStorage.setItem("a002",JSON.stringify( a002));
  window.location.href = "JS4-1.html";
 

});
// -----------------------
