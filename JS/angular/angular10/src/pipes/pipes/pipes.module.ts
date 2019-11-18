import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPipe,Status,Type,State,Industry} from './app.pipe';




@NgModule({
  declarations: [
    AppPipe,
    Status,
    Type,
    State,
    Industry
  ],
  //模块输出
  exports:[
    Status,
    Type,
    State,
    Industry
  ]
})
export class PipesModule { }
