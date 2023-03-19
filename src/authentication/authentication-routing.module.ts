import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./authentication.component";
import { ForgotPasswordComponent } from "./forgot_password/forgot-password.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    // {
    //     path: 'authentication',
    //     redirectTo: '/login',
    //     pathMatch: 'full'
    // },
    { 
        path: '',
        component: AuthenticationComponent,
        children:[
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
              },
              {
                path: 'forgot-password',
                component: ForgotPasswordComponent
              }
        ]
    }
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: 'forgot-password',
    //     component: ForgotPasswordComponent
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule{ }