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
  
   }

  ngOnInit(): void {
    this.formContainer = this.fb.group({
      addDataForm : this.fb.array([{
        itemName: '',
        itemCode : '',
        itemDescrip : '',
        itemPrice : '',
        itemImage : ''
      }])
    })
   
  }

  get admins() {
    return this.formContainer.controls["addDataForm"] as FormArray;
  }

  onSubmit(){

    console.log(this.formContainer.value);
  }
}
