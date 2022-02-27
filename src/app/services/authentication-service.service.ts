import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor( public auth:AngularFireAuth, public router: Router) { }

  signUp(email, password){
    this.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log(res)
      this.router.navigateByUrl('tabs/tab1')
    }).catch(err => {
      alert(err);
    });
    
  
  }
  //function-
  //res->result

  login(email,password){
    this.auth.signInWithEmailAndPassword(email,password).then(res =>{
      console.log(res)
      this.router.navigateByUrl('tabs/tab1')
    }).catch(err => {
      alert(err);
    });
      
    


  }


  

}

