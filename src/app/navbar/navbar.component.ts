import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // @Output() value = new EventEmitter<string>();

  // Form
  searchData = new FormGroup({
    search: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.value.emit(this.searchData.value.search);
    this.searchData.reset();
  }

}
