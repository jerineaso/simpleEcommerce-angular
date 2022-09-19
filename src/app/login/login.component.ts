import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../services/userAuthServices/user.auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup
  constructor(private fb : FormBuilder, private user : UserAuthService) { 
    this.logInForm = this.fb.group({
      email : new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password : new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {

  }

  get email() { return this.logInForm.get('email'); }

  get password() { return this.logInForm.get('password'); }

  loginAction(){
    this.user.logIn(this.email?.value,this.password?.value)
  }

}
