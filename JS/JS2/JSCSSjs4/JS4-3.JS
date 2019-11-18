
var a001 = JSON.parse(sessionStorage.getItem("a001"));//杀手数量
var a002 = JSON.parse(sessionStorage.getItem("a002"));//平民数量
var civilian = JSON.parse(sessionStorage.getItem("civilian"));
var killer = JSON.parse(sessionStorage.getItem("killer"));
var day = sessionStorage.getItem("day");//天数
var  deathToll = JSON.parse(sessionStorage.getItem("deathToll"))
var number = 0;
var number2 = 0;
console.log(a001);
console.log(a002);
console.log(civilian );
console.log(killer);
console.log(day);
console.log(deathToll);

//判断杀手和平民有多少人--------------------
    
if(a001.length == killer.length){
  //判断杀手剩下多少
   number = 0;
} else{
  number = killer.length - a001.length;
  $(".picture-warp-box").text("杀手胜利");
  $("p").text("太棒了！你知道么？在捉鬼游戏中只有33%的杀手取得游戏最终的胜利哦！");
  
}
if(a002.length == civilian.length){
  //判断平民剩下多少
   number2 = 0;
} else{
  number2 = civilian.length - a002.length;
  $(".picture-warp-box").text("民兵胜利");
  $("p").text("太棒了！你知道么？在捉鬼游戏中只有67%的民兵取得游戏最终的胜利哦！");
}

var html = "";
var html1 = "";
var NumberKiller = $('.NumberKiller');
var NumberCivilian = $(".NumberKiller");
function one(){
    html +=`<samp class="fs">杀&emsp;手${number}人&emsp;</samp>`
    html1 +=`<samp class="fs">平&emsp;民${number2}人</samp>`;
}
one();
NumberKiller.after(html) ;
NumberCivilian.after(html1)
// ------------------------显示每天所杀死的人身份
var html3 = "";
var warp = $(".warp-box")
for(let i = 0;i < day - 1;i++){
  html3 +=` <div class="warp-box-content">
  <span class="span-fs15">第${i + 1}天&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span class="span2-fs14">0小时07分</span></span>
</div> `
}
warp.after(html3);
// -----------展示白天和晚上的数据
var night = $(".span-fs15");
var nightHtml = "";
var daytimeHTml = ""; 
for(let i = 0;i < day - 1;i++){
  nightHtml =`  <div class="fs-14">晚上:${deathToll[0].number}号被杀手杀死，${deathToll[0].number}号是${deathToll[0].name}</div>
  <div class="fs-14">白天:${deathToll[1].number}号被全民投死，${deathToll[1].number}号是${deathToll[1].name}</div>`;
  night.eq(i).after(nightHtml);
  deathToll.splice(0,2);//循环一次删除2个对象数组保证最新的数组是0和1
}
$(".D-box-a").click(function(){
  window.location.href = "JS1-1.html";
});
$("a").click(function(){
  window.location.href = "JS1-1.html";
})

