import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationServiceService } from '../services/authentication-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  email: string;
  password: string;
  pascheck

  constructor(public authService:AuthenticationServiceService, public auth:AngularFireAuth) { }

  ngOnInit() {
  }
  
  signUp() {
    this.authService.signUp(this.email, this.password)
    console.log(this.email,this.password)
    //("make new")
  }

}
