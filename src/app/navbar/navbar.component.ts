import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  value : string = ""
  // Form
  searchData = new FormGroup({
    search: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.searchData.value.search);
    this.value = this.searchData.value.search
    this.searchData.reset();
  }

}
