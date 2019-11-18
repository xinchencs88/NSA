import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule,
  CanActivate,
} from '@angular/router';
import {
  LogComponent
} from './module/log/log.component';
import {
  LogModule
} from './module/log/log.module';

import {
  AuthGuard
} from './auth/authGuard.service';

const routes: Routes = [{
    path: '',
    redirectTo: 'log',
    pathMatch: 'prefix'
  },

  {
    path: 'log',
    component: LogComponent
  },

  {
    path: 'list',
    canActivate:[AuthGuard],//在进入list路由之前会先进入AuthGuard路由 进行验证
    loadChildren: './pages/list/list.module#ListModule'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }),
    LogModule
  ],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}