import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../services/userAuthServices/user.auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerationForm!: FormGroup
  registrationArray : Array<any> = []

  constructor(private fb : FormBuilder, private registeration : UserAuthService) { 
    this.registerationForm = this.fb.group({
      name : new FormControl('',[
        Validators.required
      ]),
      mobile : new FormControl('',[
        Validators.required
      ]),
      email : new FormControl('',[
        Validators.required
      ]),
      password : new FormControl('',[
        Validators.required
      ])
    })
  }

  get email() { return this.registerationForm.get('email'); }

  get password() { return this.registerationForm.get('password'); }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registerationForm.value);
    this.registrationArray.push(this.registerationForm.value)
    console.log(this.registrationArray);
    
    this.registeration.signUp(this.email?.value,this.password?.value, this.registerationForm.value) 

  }

}
