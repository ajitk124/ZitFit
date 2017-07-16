import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserRegistrationService} from "../../../service/user-registration.service";
import {CognitoCallback} from "../../../service/cognito.service";

export class RegistrationUser {
    name: string;
    email: string;
    password: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegisterComponent implements CognitoCallback {

   registrationUser: RegistrationUser;
    router: Router;
    errorMessage: string;
  constructor(public userRegistration: UserRegistrationService, router: Router) {
        this.router = router;
        this.onInit();
    }

  onInit() {
        this.registrationUser = new RegistrationUser();
        this.errorMessage = null;
    }

    onRegister() {
        this.errorMessage = null;
        this.userRegistration.register(this.registrationUser, this);

        //this.router.navigate(['/confirmRegistration', "ajitk124@gmail.com"]);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("result: " + this.errorMessage);
        } else { //success
            //move to the next step
            console.log("redirecting after regisrtation for : " +  this.router.navigate(['/confirmRegistration', result.user.username]));
            this.router.navigate(['/home/confirmRegistration', result.user.username]);
        }
    }

}
