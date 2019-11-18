import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RightComponent } from './right/right.component';
import { CompileComponent } from './compile/compile.component';

const routes: Routes = [

  {
    path:'',component:ListComponent,
    children:[
      {
        path:'welcome',component:WelcomeComponent,
      },
     
      {
        path:'right',component:RightComponent
      },
      {
        path:'compile',component:CompileComponent,
      },
      {
        path: '**', redirectTo:'welcome',
      },
    
]
},
// {
//   path:'right',component:RightComponent
// }
// { path: '', redirectTo: 'list', pathMatch: 'prefix' },
// {
//   path:'welcome',component:WelcomeComponent
// },
// {
//   path:'right',component:RightComponent,
// },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
