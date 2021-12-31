import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSignUpSubmit(form: NgForm){
    console.log(form)
    if (!form.valid) {
      return;
    }
    this.isLoading = true
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
        this.isLoading = false
      }), (error => {
        console.log(error)
        this.isLoading = false
      })

    form.reset()
  }

}
