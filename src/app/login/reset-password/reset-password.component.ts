import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as myGlobals from '../../app-globals';
import { AlertBoxComponent } from 'src/app/shared/alert-box/alert-box.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      retrynewpassword: ['', Validators.required]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    console.log(this.f.email_id.value);
    console.log(this.f.oldpassword.value);
    console.log(this.f.newpassword.value);
    console.log(this.f.retrynewpassword.value);
    if (
      this.f.email_id.value !== null &&
      this.f.email_id.value !== '' &&
      this.f.oldpassword.value !== null &&
      this.f.oldpassword.value !== '' &&
      this.f.newpassword.value !== null &&
      this.f.newpassword.value !== '' &&
      this.f.retrynewpassword.value !== null &&
      this.f.retrynewpassword.value !== ''
    ) {
      if (this.f.newpassword.value === this.f.retrynewpassword.value) {
        let userDetails = {};
        userDetails['emailId'] = this.f.email_id.value;
        userDetails['oldPassword'] = this.f.oldpassword.value;
        userDetails['newPassword'] = this.f.newpassword.value;
        return this.http
          .post<any>(
            'http://' + myGlobals.server + ':8787/reset/password',
            userDetails
          )
          .subscribe((response: Response) => {
            if (!response['errorMessage']) {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: 'Successfull'
              });
              dialogAlert.afterClosed().subscribe(result => {
                this.router.navigate(['/login']);
              });
            } else {
              let dialogAlert = this.dialog.open(AlertBoxComponent, {
                width: '300px',
                data: response['errorMessage']
              });
              dialogAlert.afterClosed().subscribe(result => {
                this.router.navigate(['/reset']);
              });
            }
          });
      } else {
        // let dialogAlert = this.dialog.open(AlertBoxComponent, {
        //   width: '300px',
        //   data: 'The new passwords are not same... please try again'
        // });
        // dialogAlert.afterClosed().subscribe(result => {
        //   this.router.navigate(['/reset']);
        // });
        this.error = 'The new passwords are not same... please try again';
      }
    } else {
      // let dialogAlert = this.dialog.open(AlertBoxComponent,{
      //   width: '300px',
      //   data: "email id or passwords are incorrect"
      // });
      // dialogAlert.afterClosed().subscribe(result => {
      //   this.router.navigate(['/reset']);
      // });
      this.error = 'email id or passwords might be empty... please try again';
    }
  }
}
