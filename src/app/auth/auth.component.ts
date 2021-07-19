import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  // @ViewChild('f')signupForm: NgForm

  isLoginMode = true
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onLoginSubmit() {
    console.log(this.loginForm)
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(authRes => {
        console.log(authRes)
      }), (error => {
        console.log(error)
      })
  }

  onSignUpSubmit(form: NgForm){
    console.log(form)
    if (!form.valid) {
      return;
    }
    this.authService.signUp(
      form.value.email,
      form.value.password,
      form.value.password_confirmation,
      form.value.first_name,
      form.value.last_name,
      form.value.nickname
      )
      .subscribe(authRes => {
        console.log(authRes)
      }), (error => {
        console.log(error)
      })

    form.reset()
  }

  onStatusToggle() {
    this.isLoginMode = !this.isLoginMode
  }

}
