import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../../shared/interfaces/user';
import { Router } from '@angular/router';
import {
  faUser,
  faKey,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public fb: FormBuilder, private router: Router) {}
  submitted: boolean = false;
  loginErrorMsg: string = '';
  userIcon = faUser;
  passIcon = faKey;
  signinIcon = faArrowRightToBracket;
  ngOnInit() {
    let loggedInUserData = sessionStorage.getItem('loggedInUserData');
    if (loggedInUserData) {
      this.router.navigate(['employees']);
    }
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern(environment.VALIDATION_EXPRESSION),
    ]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.submitted = true;
  }

  loggedInuserDetails: User = {
    name: environment.NAME,
    userName: environment.USERNAME,
    email: environment.EMAIL,
    role: environment.ROLE,
  };

  validateUser() {
    if (this.loginForm.value) {
      if (
        this.loginForm.value.userName == environment.USERNAME &&
        this.loginForm.value.password == environment.PASSWORD
      ) {
        sessionStorage.setItem(
          'loggedInUserData',
          JSON.stringify(this.loggedInuserDetails)
        );
        this.router.navigate(['employees']);
      } else {
        this.loginErrorMsg =
          'Username or Password is incorrect. Please try again';
        setTimeout(() => {
          this.loginErrorMsg = '';
        }, 3000);
      }
    }
  }
}
