import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  item : Array<any> = []

  constructor() { }

  addToCart(x:any){
    this.item.push(x)
    console.log(this.item);
    
  }

  getCartItem(){
    console.log(this.item);
    return this.item;    
  }
}
