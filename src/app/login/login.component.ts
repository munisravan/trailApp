import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  /**
	 * builds the login form
	 */
  buildLoginForm() {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  loginHandler(user) {
    this.errorMessage = '';
    if ((user.email === 'admin@eezeeorder.com') && (user.password === 'root')) {
      localStorage.setItem('isloggedIn', 'true');
      this.router.navigateByUrl('/dashboard');
    } else {
      this.errorMessage = 'UnAuthorized User';
    }
  }
}
