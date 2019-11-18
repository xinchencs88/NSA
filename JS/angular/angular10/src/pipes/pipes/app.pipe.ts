import { Pipe, PipeTransform } from '@angular/core';

import { status ,type,state,industry} from './app.constant'

@Pipe({
  name: 'app'
})
export class AppPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
//status状态1和2改变成上线和草稿
@Pipe({
  name:'status'
})
export class Status implements PipeTransform{
  
  transform(value: any, ...args: any[]): any {
    return status.line[value];
    //这表示返回status里面对象line里面的key值，因为line是对象里面的值是数字，
    // 如果里面的值不是对象,是字符串的话可以直接写错status.line.string字符串这样就直引用
  }

}
//type管理类型
@Pipe({
  name:'type'
})
export class Type implements PipeTransform{
  
  transform(value: any, ...args: any[]): any {
    return type.types[value];
  }

}
//编辑
//type管理类型
@Pipe({
  name:'state'
})
export class State implements PipeTransform{
  
  transform(value: any, ...args: any[]): any {
    return state.types[value];
  }

}
//分支
//type管理类型
@Pipe({
    
    name:'industry'
})
export class Industry implements PipeTransform{
  
  transform(value: any, ...args: any[]): any {
    return industry.industryType[value];
  }

}