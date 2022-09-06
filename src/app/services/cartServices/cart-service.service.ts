import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {

  item : Array<any> = []
  subPrice : number = 0;
  


  constructor() { }

  addToCart(x:any){
    this.item.push(x)
    console.log(this.item);
    
  }

  getCartItem(){
    return this.item;    
  }

  subTotalCart(){
    this.subPrice = this.item.reduce((prev: number, curr: any)=>{
      return prev + curr.price*curr.quantity
    },0)
    return this.subPrice
  }

  removeCartItem(i:number){
    console.log(this.item);

    this.item.splice(i,1)
    console.log(this.item);
    
  }
}
