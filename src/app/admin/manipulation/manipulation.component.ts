import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manipulation',
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.scss']
})
export class ManipulationComponent implements OnInit {

  formContainer !: FormGroup
  addDataForm !: FormArray;

  constructor(private fb : FormBuilder) {
    this.formContainer = this.fb.group({
      addDataForm : this.fb.array([
        this.fb.group({
          itemName : [''],
          itemCode : [''],
          itemDescrip : [''],
          itemPrice : [''],
          itemImage : ['']
        })
      ])
    })
   }



  ngOnInit(): void {

   
  }

  get data() {
    return this.formContainer.controls['addFormData'] as FormArray;
  }

  onSubmit(){
    console.log(this.formContainer.value);
  }
}
