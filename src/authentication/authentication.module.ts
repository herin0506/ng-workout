import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";
import { ForgotPasswordComponent } from "./forgot_password/forgot-password.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
    declarations:[
        AuthenticationComponent,
        LoginComponent,
        ForgotPasswordComponent
    ],
    imports:[
        CommonModule,
        AuthenticationRoutingModule
    ],
    providers:[]
})
export class AuthenticationModule{ }