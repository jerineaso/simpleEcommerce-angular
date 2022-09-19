import { Component, OnInit, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Form
  searchData = new FormGroup({
    search: new FormControl('',Validators.required)
  })

  constructor(private router : Router, private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.value.emit(this.searchData.value.search);
    this.router.navigateByUrl('products/'+this.searchData.value.search)
    this.searchData.reset();
  }

  

}
