import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { WelcomeComponent } from './welcome/welcome.component';
//UI组模块
import { NzInputModule, NzTableModule, NgZorroAntdModule,NzUploadModule,UploadFile } from 'ng-zorro-antd';


import { RightComponent } from './right/right.component';
import { CompileComponent } from './compile/compile.component';
//双向绑定，表单验证模块
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
//自定义模块导入管道
import{ PipesModule } from '../../../pipes/pipes/pipes.module'





@NgModule({
  declarations: [
    ListComponent, 
    WelcomeComponent,  
    RightComponent,
    CompileComponent,
    
    
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    NzInputModule,
    NzTableModule,
    NgZorroAntdModule,
    FormsModule,
    PipesModule,
    NzUploadModule,
    ReactiveFormsModule,
 
   

  ]
})
export class ListModule { }
