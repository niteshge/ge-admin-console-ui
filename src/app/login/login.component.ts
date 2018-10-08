import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  private formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.form.get(field).valid && this.form.get(field).touched) ||
  //     (this.form.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }

  // onSubmit() {
  //   if (this.form.valid) {
  //   //  let user =  new User(this.form.value.userName, this.form.valid.password);
  //   let user = {}
  //   user = this.form.value;
  //   user['role'] = "admin";
  //      this.authService.login(user);
  //     // this.router.navigate(['/']);
  //   }
  //   this.formSubmitAttempt = true;
  // }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}
}

// export class User{
//    username:any;
//    password:any;
//    constructor(username,password){
//      username = this.username;
//      password = this.password;
//    }
// }
