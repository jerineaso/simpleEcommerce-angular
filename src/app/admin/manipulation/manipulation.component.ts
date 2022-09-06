import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manipulation',
  templateUrl: './manipulation.component.html',
  styleUrls: ['./manipulation.component.scss']
})
export class ManipulationComponent implements OnInit {

  addDataForm !: FormGroup;

  constructor(private fb : FormBuilder) {
  
    this.addDataForm = this.fb.group({
      
    })
   
   }

  ngOnInit(): void {
  }


  onSubmit(){

    console.log(this.addDataForm.value);
    
    return this.addDataForm.value
  }
}
