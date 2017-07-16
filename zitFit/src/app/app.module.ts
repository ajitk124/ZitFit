import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';



import { LoginComponent } from './public/auth/login/login.component';

import { RegisterComponent } from './public/auth/registration/registration.component';
import { NewPasswordComponent } from './public/auth/newpassword/newpassword.component';
import {LogoutComponent, ConfirmRegistrationComponent } from './public/auth/confirm/confirm-registration.component';
import { HomeComponent } from './public/home/home.component';
import { ProfileComponent } from './secure/profile/profile.component';
import { ResendComponent } from './public/auth/resend/resend.component';

import { UserLoginService } from './service/user-login.service';
import { DynomoDbService } from './service/dynomo-db.service';
import { UserRegistrationService } from './service/user-registration.service';
import {CognitoUtil} from './service/cognito.service';
import {AwsService} from './service/aws.service';
import {S3Service} from './service/s3.service';
import {UserParametersService} from './service/user-parameters.service';
import {SecurehomeComponent} from "./secure/securehome/securehome.component";

import { ForgotpasswordStep1Component,ForgotpasswordStep2Component } from './public/forgotpassword/forgotpassword.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NewPasswordComponent,
    ConfirmRegistrationComponent,
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ResendComponent,
    SecurehomeComponent,
    LogoutComponent,
    ForgotpasswordStep1Component,
    ForgotpasswordStep2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CognitoUtil,UserRegistrationService,UserLoginService,DynomoDbService,AwsService,UserParametersService,S3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
