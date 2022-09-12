import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  item : Array<any> = []

  constructor() { }

  addItem(x:any){
    this.item.push(x)
  }

  getItem(){
    return this.item;    
  }
}
