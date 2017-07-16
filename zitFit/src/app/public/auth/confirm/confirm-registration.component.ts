import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegistrationService} from "../../../service/user-registration.service";
import {UserLoginService} from "../../../service/user-login.service";
import {LoggedInCallback} from "../../../service/cognito.service";

@Component({
    selector: 'app-logout',
    template: ''
})
export class LogoutComponent implements LoggedInCallback {

    constructor(public router: Router,
                public userService: UserLoginService) {
        this.userService.isAuthenticated(this)
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (isLoggedIn) {
            this.userService.logout();
            this.router.navigate(['/home']);
        }

        this.router.navigate(['/home']);
    }
}

@Component({
  selector: 'app-confirm-registration',
  templateUrl: './confirm-registration.component.html',
  styleUrls: ['./confirm-registration.component.css']
})
export class ConfirmRegistrationComponent implements OnInit {

    confirmationCode: string;
    email: string;
    errorMessage: string;
    private sub: any;

 constructor(public regService: UserRegistrationService, public router: Router, public route: ActivatedRoute) {
    }

  ngOnInit() {
    console.log("Inside confirm password ");
        this.sub = this.route.params.subscribe(params => {
            this.email = params['username'];
           console.log("User name = " + this.email)
        });

        this.errorMessage = null;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

     onConfirmRegistration() {
        this.errorMessage = null;
        console.log("this.email = " + this.email);
        console.log("this.confirmationCode = " + this.confirmationCode);

        this.regService.confirmRegistration(this.email, this.confirmationCode, this);
       // this.router.navigate(['/securehome']);
    }

     cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.errorMessage = message;
            console.log("message: " + this.errorMessage);
        } else { //success
            //move to the next step
            console.log("Moving to securehome");
            // this.configs.curUser = result.user;
            this.router.navigate(['/securehome']);
        }
    }


}
