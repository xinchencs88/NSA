var div = document.getElementsByClassName("div");
var bone = document.getElementById("b-one");
var btwo = document.getElementById("b-two");
var animation;
function array() {
    // 随机获得3个小方块
    var noe = Math.floor(Math.random()*9);
    var two = Math.floor(Math.random()*9);
    var three = Math.floor(Math.random()*9);
    console.log(noe );
    console.log(two );
    console.log(three );
    if(noe == two ){
        noe = Math.floor(Math.random()*9);

    }
    else if(two == three){
        var two = Math.floor(Math.random()*9);
    }
    else if(three ==noe){
        three = Math.floor(Math.random()*9);
    }
       a [noe].style.backgroundColor = 'rgb'+ randomColor();   
        a [two].style.backgroundColor = 'rgb'+ randomColor();
        a [three].style.backgroundColor = 'rgb'+ randomColor();
}
function randomColor(){
    var colorVal;
    var r = Math.floor(Math.random()*265);
    var g = Math.floor(Math.random()*265);
    var b = Math.floor(Math.random()*265);
    colorVal = '('+ r +','+ g +','+ b +')';
    return colorVal;
}
bone.onclick = function btop(){
    animation = setInterval(function(){
        for(var i = 0; i<9 ; i++){
            a [i].style.background = 'rgb(221, 159, 43)';
        }
        array();

    },1000);
    

}
 btwo.onclick = function btop2(){
     clearInterval( animation); 
    for (var i = 0 ; i < 9 ; i++ ){
         div [i].style.background = 'rgb(221, 159, 43)';

     }    
    
 } 

 
  
  const set = new Set([
    ['foo', 1],
    ['bar', 2]
  ]);
  const m1 = new Map(set);
  m1.get('foo') // 1
  console.log( m1.get('foo'))
  const m2 = new Map([['baz', 3]]);
  const m3 = new Map(m2);
  m3.get('baz') // 3
  console.log( m3.get('baz'))
  import { Injectable } from '@angular/core'; import { Observable } from 'rxjs/Observable'; import { Subject } from 'rxjs/Subject'; /** * 用来充当事件总线的 Service */ @Injectable() export class EventBusService { public eventBus:Subject<string> = new Subject<string>(); constructor() { } }
