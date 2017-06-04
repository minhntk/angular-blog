import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent }           from './login/login.component';
import { AuthGuard }                from './shared/auth-guard.service';

const appRoutes: Routes = [  
  { 
    path: 'login',
    component: LoginComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
