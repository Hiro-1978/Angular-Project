import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'member',component: MemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
