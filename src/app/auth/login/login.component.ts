import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false
  loginForm: FormGroup

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onLoginSubmit() {
    console.log(this.loginForm)
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(authRes => {
        console.log(authRes)
      }), (error => {
        console.log(error)
      })
  }

}
