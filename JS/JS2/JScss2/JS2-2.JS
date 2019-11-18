// var bone = document.getElementsByClassName("arrows");
var inputRange = document.getElementById("input_range");
var inputText = document.getElementById("input_text");
var reduce = document.getElementsByClassName("reduce");
var add = document.getElementsByClassName("add")[0];
// 狼人平民函数
var killer = document.getElementById("killer");
var civilian = document.getElementById("civilian");

// ---------------------------函数值--------------------------------
$(".arrows").click(function(){
    window.location.href = "JS2-1.html";
});


// 控制滑轮输入框数值加减
reduce[0].onclick = function () {
    // 点击减一
    inputRange.value--;
    inputText.value--;
    console.log(inputText.value);
    if (inputText.value < 4 || inputText.value > 18) {
        inputText.value = 4;
        alert("数值不能小于四");
    }
  
    killerCivilian();
    civkill();
}
add.onclick = function () {
    inputRange.value++;
    inputText.value++;
    console.log(inputText.value);
    if (inputText.value < 4 || inputText.value > 18) {
        inputText.value = 18;
        alert("数值不能大于十八");
    }
  
    killerCivilian();
    civkill();


}
// ------------------

// 输入时候执行程序 滑轮与输入框值互相联系
inputRange.oninput = function () {
    inputText.value = inputRange.value;
    killerCivilian();

}
inputText.oninput = function () {
    inputRange.value = inputText.value;
    killerCivilian();
}
// ------

// 输入框 当你输入内容后离开输入框执行下面程序
inputText.onchange = function () {
    var number = /[^0-9]/g; //声明函数让这个函数代表从0到9的数值
    if (inputText.value < 4 || inputText.value > 18) {
        inputText.value = "";
        alert("玩家数量输入错误");

    } else if (number.test(inputText.value)) {
        // 进行判断 你输入的值是否符合number进行判断

        inputText.value = inputText.value.replace(number, "");
        alert("输入错误");
        //进行替换不符合的输入
    }
    killerCivilian();

}

// --------------
// ------------判断杀手和民兵的数量
// 狼人数值与平民数值
var killerVal ;
var civVal ;
function killerCivilian() {
     
    if (inputText.value < 4 || inputText.value > 18) {
        killer.innerHTML = "";
        civilian.innerHTML = "";

    } else if (inputText.value < 14) {
        // 当输入的值小于14生效

         killerVal = Math.floor(inputText.value / 4);
        // 判断杀手的数量
         civVal = inputText.value - killerVal;
        //   判断民兵的数量
        $("#killer").text(killerVal);
       $("#civilian").text(civVal);
        // console.log(killerVal,civVal)
    } else {
        // 输入的值大于14执行程序
        killerVal = Math.floor(inputText.value / 4 + 1);
        civVal = inputText.value - killerVal;

        $("#killer").text(killerVal);
       $("#civilian").text(civVal);
         console.log(killerVal,civVal);


    }
}
// 创建杀手和平民的数组
var killer;
var civilian;
 function civkill() {
  
     killer = new Array(killerVal).fill('杀手');
     civilian = new Array(civVal).fill('民兵');
      var ck = killer.concat(civilian);
      var arrayCK = [];
      console.log(arrayCK);
     for(var i = 0,c =ck.length;  i < c; i++){
        //  随机打乱 重新排列杀手和民兵的顺序
         var a = Math.floor(Math.random() * (ck.length - 1))
         arrayCK[i] = ck[a];
         ck.splice(a,1) ;
         console.log();
     }
   return arrayCK;
}
document.getElementById('button-two').onclick = function(){
    civkill();//保存数据
    killerCivilian();
    sessionStorage.setItem("key",JSON.stringify(civkill()));
    sessionStorage.setItem("killer",JSON.stringify(killer));
    sessionStorage.setItem("civilian",JSON.stringify(civilian));
    window.location.href = "JS3-1.HTML";
    console.log(killer);
    console.log(civilian);
}
