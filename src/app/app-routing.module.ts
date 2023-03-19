import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/authentication',
    pathMatch: 'full'
  },
  {
    path: 'authentication',
    loadChildren: () => import('../authentication/authentication.module').then(module => module.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
