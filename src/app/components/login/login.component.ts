import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin;
   faCheck = faCheck;
  constructor(private router: Router, public fireauth: AngularFireAuth,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validaFormLogin();
    // this.fireauth.user.subscribe();

  }
  login() {
    this.fireauth.signInWithEmailAndPassword(this.email.value,this.password.value).then(data=>{
      console.log("se ha logueado " + JSON.stringify(data));
      if(data){
        localStorage.setItem("logueado","1");
        this.router.navigateByUrl('adminLanding');
      }
    },err=>{
      console.log(err)
      localStorage.removeItem("logueado");
    });
  }
  logout() {
    this.fireauth.signOut();
    localStorage.removeItem("logueado");
    this.router.navigateByUrl('landing');    
  }
  validaFormLogin(){
    this.formLogin = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
      });
  }
  get email(){
    return this.formLogin.get("email");
  }
  get password(){
    return this.formLogin.get("password");
  }

}
