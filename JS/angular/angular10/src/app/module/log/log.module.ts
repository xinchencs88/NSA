import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log.component';
//双向绑定模块
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule,
    FormsModule,
  ]
})
export class LogModule { }
