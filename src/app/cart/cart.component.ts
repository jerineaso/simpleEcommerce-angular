import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../services/cartServices/cart-service.service';
import { ProductsListService } from '../services/productService/products-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

  show : boolean = true
  data : any 
  quantity : number = 1
  subTotal : number = 0
  total : number = 0
  price : number = 0

  constructor(private cartService : CartServiceService) { }

  ngOnInit(): void {

    this.data = this.cartService.getCartItem()

    if(this.data.length === 0){
      this.show = false
    }else{
      this.show = true
      this.totalValue(this.data);
    }
  }

  
  totalValue(x:any){
    // this.total = x.reduce((prev:any,curr:any)=>{
    //   return prev + curr.price
    // })
    x.forEach((element : any) => {
      this.subTotal = this.subTotal + parseInt(element.price)
      this.price = element.price
      console.log(this.price);
      
    });
    
    this.total = ((this.subTotal * 3)/100) + this.subTotal
  }

  quantityItem(value : string): void{
    if(value === "increment"){
      this.quantity = this.quantity+1
      this.price *= this.quantity
    }else if(value === "decrement"){
      if(this.quantity === 1){
        this.quantity = 1
      }else{
       this.quantity = this.quantity-1
       this.price /= this.quantity
      } 
    }else{
      this.quantity = 1
    }

  }
}
