import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { HomeComponent } from './public/home/home.component';
import {SecurehomeComponent} from "./secure/securehome/securehome.component";
import { ProfileComponent } from './secure/profile/profile.component';


import {LoginComponent} from "./public/auth/login/login.component";
import { RegisterComponent } from './public/auth/registration/registration.component';

import { LogoutComponent, ConfirmRegistrationComponent } from './public/auth/confirm/confirm-registration.component';
import { ResendComponent } from './public/auth/resend/resend.component';
import {NewPasswordComponent} from "./public/auth/newpassword/newpassword.component";
import { ForgotpasswordStep1Component,ForgotpasswordStep2Component } from './public/forgotpassword/forgotpassword.component';

const homeRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'confirmRegistration/:username', component: ConfirmRegistrationComponent},
            {path: 'resendCode', component: ResendComponent},
            {path: 'forgotPassword/:email', component: ForgotpasswordStep2Component},
            {path: 'forgotPassword', component: ForgotpasswordStep1Component},
            {path: 'newPassword', component: NewPasswordComponent}
        ]
    },
];

const secureHomeRoutes: Routes = [
    {

        path: '',
        redirectTo: '/securehome',
        pathMatch: 'full'
    },
    {
        path: 'securehome', component: SecurehomeComponent, children: [
        {path: 'logout', component: LogoutComponent},
        {path: 'myprofile', component: ProfileComponent},
        {path: '', component: ProfileComponent}]
    }
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...homeRoutes,
            ...secureHomeRoutes,
            {
                path: '',
                component: HomeComponent
            }
        ]
    },


];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
