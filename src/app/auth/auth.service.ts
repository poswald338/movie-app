import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {}

  signUp(
    email: string,
    password: string,
    password_confirmation: string,
    first_name: string,
    last_name: string,
    nickname: string
  ) {
    return this.http.post('https://codelabs2021.herokuapp.com/api/v1/users/signup', {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      first_name: first_name,
      last_name: last_name,
      nickname: nickname
    })
  }

  login(email: string, password: string) {
    return this.http.post('https://codelabs2021.herokuapp.com/api/v1/users/login', {
      email: email,
      password: password
    })
  }
}
