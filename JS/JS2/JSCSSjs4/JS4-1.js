$(".arrows1").click(function () { //返回上一级
    window.location.href = "JS3-2.html";

});
$(".end").click(function () { //页面返回首页
    var H = confirm("确定结束游戏返回首页");
    if (H == true) {
        window.location.href = "JS1-1.html";
    }
});
// ------------------------------------------------------------------
var day = sessionStorage.getItem("day");
var step = sessionStorage.getItem("step");
var cs = sessionStorage.getItem("cs")
var deathToll = JSON.parse(sessionStorage.getItem("deathToll")) //获得亡灵数量
console.log(deathToll);
console.log(day);
console.log(step);
console.log(cs);
// ----------------------天数循环------------
var html = '';
var main = $("main");
for (let i = 0; i < day; i++) {
    html += `
    <div class="main-wrap">
    <div class="top-fs" >第${i + 1}天</div>
    <div class="wrap" >     
        <div class="one-wrap-killer one" >
            <div class="img"><img class="img-s" src="JSCSSjs4/晚上.png" alt=""></div>
            <div class="arrows"></div>
            <div class="box-color">杀手开杀</div>
        </div>
        <div class="one-wrap-killer">
            <div class="img1"><img class="img-s1" src="JSCSSjs4/白天 .png" alt=""></div>
            <div class="arrows"></div>
            <div class="box-color">亡者遗言</div>
        </div>
        <div class="one-wrap-killer">
            <div class="arrows"></div>
            <div class="box-color">依次发言</div>
        </div>
        <div class="one-wrap-killer one" >
            <div class="arrows"></div>
            <div class="box-color">全面投票</div>
        </div>
    </div> 
</div>`
}
main.append(html);

// --------------------------------------------
function one() {
    for (let i = 0; i < deathToll.length; i++) {
        //判断杀手杀死谁和投票投死谁
        console.log(i);
        console.log(deathToll.length);
        if ((i + 1) % 2 == 0) {
            $(".one").eq(i).after(`<div class="font-s15">投死${deathToll[i].number}号,身份:${deathToll[i].name}</div>`);
        } else {
            $(".one").eq(i).after(`<div class="font-s15">杀死${deathToll[i].number}号,身份:${deathToll[i].name}</div>`);
        }
    }
}
one();
if (step <= day || step >= day) { //改变背景颜色
    for (let i = 0; i < cs; i++) {
        $(".box-color").eq(i).css("background-color", "#7f8c8d");
        $(".arrows").eq(i).css("border-color", "transparent #7f8c8d transparent transparent");
        console.log(cs);
    }
}
console.log(day);
console.log(step);

$(".one-wrap-killer").eq(day * 4 - 4).click(function () {
    //判断第一次点击第一行必须是杀手类容
    if (step == 1) {
        cs++;
        sessionStorage.setItem("cs", cs);
        $(".box-color").eq(day * 4 - 4).css("background-color", "#7f8c8d");
        $(".arrows").eq(day * 4 - 4).css("border-color", "transparent #7f8c8d transparent transparent");
        step++;
        sessionStorage.setItem("step", step);
        alert("天黑请闭眼");
        window.location.href = "JS4-2.html";
        one();
    } else {
        alert("请按顺序来");
    }
});
$(".one-wrap-killer").eq(day * 4 - 3).click(function () {
    //判断第二次次点击
    if (step == 2) {
        cs++;
        $(".box-color").eq(day * 4 - 3).css("background-color", "#7f8c8d");
        $(".arrows").eq(day * 4 - 3).css("border-color", "transparent #7f8c8d transparent transparent");
        alert("我是无辜的");
        step++;
    } else {
        alert("请按顺序来");
    }
});
$(".one-wrap-killer").eq(day * 4 - 2).click(function () {
    //判断第三次点击
    if (step == 3) {
        cs++;
        $(".box-color").eq(day * 4 - 2).css("background-color", "#7f8c8d");
        $(".arrows").eq(day * 4 - 2).css("border-color", "transparent #7f8c8d transparent transparent");
        alert("我觉得他/她是凶手");
        step++;
    } else {
        alert("请按顺序来");
    }
});
$(".one-wrap-killer").eq(day * 4 - 1).click(function () {
    //判断第四次点击

    if (step == 4) {
        cs++;
        sessionStorage.setItem("cs", cs);
        step = 1;
        sessionStorage.setItem("step", step);
        day++;
        sessionStorage.setItem("day", day);
        $(".box-color").eq(day * 4 - 1).css("background-color", "#7f8c8d");
        $(".arrows").eq(day * 4 - 1).css("border-color", "transparent #7f8c8d transparent transparent");
        alert("投他/她");
        window.location.href = "JS4-2.html";
    } else {
        alert("请按顺序来");
    }
});

// -----------------------------------------------------
$(".top-fs").click(function () {
     var a = $(this)
    a.siblings().toggle("slow");
    console.log(a);
});
if(day != 1){
    //隐藏之前几天的下拉框
    $(".wrap").hide();
    $(".wrap").eq(day - 1).show();
}
// -------------底部跳转
$(".right-button").click(function(){
    var H = confirm("确定结束游戏返回首页");
    if (H == true) {
        window.location.href = "JS1-1.html";
    }
})
$(".left-buttom").click(function(){
    window.location.href = "JS3-2.html";
});
// -------------------------------------------------