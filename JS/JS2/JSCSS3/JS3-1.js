document.getElementById('one');
document.getElementById('return').onclick = function () {
    window.location.href = "JS2-2.html";
}
document.getElementById('one').onclick = function () {
    window.location.href = "JS2-1.html";
}
// --------------------头部跳转数据
let dd = JSON.parse(sessionStorage.getItem("key"));//读取数据

console.log(dd); //查看数据时否完整
console.log(dd.length);
// ----------------------------

// 实现图片切换隐藏元素
function hidePicture() {
    $(".imgs2").hide();
    $(".fs").hide();
}
var click2 = 1;
var a = 0 ;
hidePicture();
$(".b-bottom").click(function () {//记录点击次数
    click2++;
     a++ ;  
     if(click2 >= (dd.length * 2 + 1)){ //进行判断当身份都点击完后查看
      window.location.href = "JS3-2.html";
           
   }
     console.log(click2);
     console.log(dd.length * 2)
   if(click2 % 2 == 0) { //进行判断如果是偶数输出下面的值
     console.log("奇数"+a);
     $(".fs-warp-bottom").text("隐藏并传递给"+(a /2 +1.5) +"号")
   } else {//如果是奇数就进行下面的程序
    console.log("偶数"+a);
    $(".fs-top").text((a /2 + 1)) //输出上面的数字
    $(".fs-warp-bottom").text("点击查看"+(a /2 + 1) +"号")//输出查看的数字
   }
   if(click2 >= (dd.length * 2 )){ //进行判断当身份都点击完后查看
    $(".fs-warp-bottom").text("法官查看身份")     
 }
   $(".fs-bottom").text(dd[click2 / 2 - 1]);//输入上一个页面的数字
    $(".imgs2").toggle();
    $(".imgs").toggle();
    $(".fs").toggle();
});
// 对象数组

