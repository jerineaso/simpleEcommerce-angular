import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manipulation',
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.scss']
})
export class ManipulationComponent implements OnInit {

  formContainer !: FormGroup
  addDataForm !: FormArray;

  constructor(private fb : FormBuilder) {
  
   }

  ngOnInit(): void {
    this.formContainer = this.fb.group({
      addDataForm : this.fb.array([this.fb.group({
        itemName: new FormControl('',[
          Validators.required,
          Validators.maxLength(100),
          Validators.pattern("[a-zA-Z][a-zA-Z ]+")
        ]),
        itemCode : new FormControl('',[
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9]{5}$")
        ]),
        itemDescrip : new FormControl('',[
          Validators.required,
          Validators.maxLength(500)
        ]),
        itemPrice : new FormControl('',[
          Validators.required,
        ]),
        itemImage : ['']
      })])
    })
  }

  get admins() {
    return this.formContainer.controls["addDataForm"] as FormArray;
  }

  onSubmit(){

    console.log(this.formContainer.value);
  }
}
