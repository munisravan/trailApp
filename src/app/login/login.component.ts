import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  errorMessage: string;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  return = '';

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/dashboard');
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
      localStorage.setItem('user', user.email);
      this.router.navigateByUrl(this.return);
    } else {
      this.errorMessage = 'UnAuthorized User';
    }
  }
}
