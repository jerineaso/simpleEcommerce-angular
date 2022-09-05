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
  quantity : number = 0
  total : number = 0

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
    this.total = x.reduce((prev:any,curr:any)=>{
      return prev + curr.price
    })

    console.log(this.total);
    
  }

  quantityItem(value : string): void{
    if(value === "increment"){
      this.quantity = this.quantity+1
    }else if(value === "decremenet"){
      if(this.quantity <= 0){
        this.quantity = 0
      }
      this.quantity = this.quantity-1
    }else{
      this.quantity = 0
    }
  }
}
